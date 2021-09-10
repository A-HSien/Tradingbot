import { KeyManagementServiceClient } from '@google-cloud/kms';
import { project } from './GoogleConst';


const client = new KeyManagementServiceClient();
const keyName = `projects/${project}/locations/global/keyRings/KeyRing/cryptoKeys/key`;
const crc32c = require('fast-crc32c');


export const encrypt = async (text: string) => {
  const plaintextBuffer = Buffer.from(text);
  const plaintextCrc32c = crc32c.calculate(plaintextBuffer);
  const [encryptResponse] = await client.encrypt({
    name: keyName,
    plaintext: plaintextBuffer,
    plaintextCrc32c: {
      value: plaintextCrc32c,
    },
  });
  const ciphertext: any = encryptResponse.ciphertext;

  // Optional, but recommended: perform integrity verification on encryptResponse.
  // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
  // https://cloud.google.com/kms/docs/data-integrity-guidelines
  if (!encryptResponse.verifiedPlaintextCrc32c) {
    throw new Error('Encrypt request corrupted in-transit');
  }
  if (
    crc32c.calculate(ciphertext) !==
    Number(encryptResponse.ciphertextCrc32c?.value)
  ) {
    throw new Error('Encrypt response corrupted in-transit');
  }
  return ciphertext.toString('base64');
};

export const decrypt = async (ciphertext: string) => {
  const buffer = Buffer.from(ciphertext, 'base64');
  const ciphertextCrc32c = crc32c.calculate(buffer);
  const [decryptResponse] = await client.decrypt({
    name: keyName,
    ciphertext: buffer,
    ciphertextCrc32c: {
      value: ciphertextCrc32c,
    },
  })
    .catch((err: any) => {
      const msg = 'Decrypt failed';
      console.error(msg, err);
      throw new Error(msg);
    });

  // Optional, but recommended: perform integrity verification on decryptResponse.
  // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
  // https://cloud.google.com/kms/docs/data-integrity-guidelines
  if (
    crc32c.calculate(decryptResponse.plaintext) !==
    Number(decryptResponse.plaintextCrc32c?.value)
  ) {
    throw new Error('Decrypt response corrupted in-transit');
  }

  const decrypt = decryptResponse.plaintext?.toString();
  return decrypt || '';
}
