import { connect, set } from 'mongoose';
import { accountInfoResp } from '../common/binanceApi/FutureAccountBalance';
import { DB_CONNECTION_STRING } from '../config';
import { Account } from '../domains/Account';
import { AppUser } from '../domains/AppUser';
import AccountRepo from './AccountRepo';
import AppUserRepo from './AppUserRepo';



export const connectDB = () => {
    console.info('db connecting', DB_CONNECTION_STRING);
    set('useCreateIndex', true);
    connect(
        DB_CONNECTION_STRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('db connected'))
    // .then(() => runDBTest)
    .catch(err => console.error('db connect failed', err));
};


const AppUserRepoTest = async () => {
    const data: AppUser = {
        email: 'test@test.com',
        passwordHash: 'xxxxxxxxxxx',
        activated: false,
        submitted: true,
    };
    await AppUserRepo.create(data);
    const record = await AppUserRepo
        .findOne({ 'email': data.email });
    console.log('AppUserRepoTest: saved record', record);
    console.log('AppUserRepoTest: saved record id', record?.id);
    await AppUserRepo.deleteMany({ email: data.email });
};

const AccountRepoTest = async () => {
    const mockAccount: Account = {
        ownerId: 'ownerIdownerIdownerId',
        name: 'AccountRepoTest',
        apiKey: 'apiKeyapiKeyapiKey',
        apiSecret: 'apiSecretapiSecretapiSecret',
        disabled: true,
        balances: {
            availableBalance: (999).toString(),
            positions: accountInfoResp.positions
        },
        balancesLastUpdateTime: new Date(),
    };
    await AccountRepo.create(mockAccount);
    const record = await AccountRepo
        .findOne({ name: mockAccount.name });
    console.log('AccountRepoTest: saved record', record);
    console.log('AccountRepoTest: saved record id', record?.id);
    await AccountRepo.deleteMany({ name: mockAccount.name });
};



const runDBTest = async () => {
    await AppUserRepoTest();
    await AccountRepoTest();
};
