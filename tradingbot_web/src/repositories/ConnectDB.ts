import { connect } from 'mongoose';
import { Account } from '../domains/Account';
import AccountRepo from './AccountRepo';
import AppUserRepo from './AppUserRepo';



const connectDB = () =>
    connect(
        'mongodb://dbUser:password@localhost:27017/test?authSource=admin',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );


const AppUserRepoTest = async () => {
    const data = {
        email: 'test@test.com',
        activated: false,
        submitted: true,
    };
    await AppUserRepo.create(data);
    const record = await AppUserRepo
        .findOne({ 'email': data.email });
    console.log('AppUserRepoTest: saved record', record);
    console.log('AppUserRepoTest: saved record id', record.id);
    await AppUserRepo.deleteMany({ 'email': data.email });
};

const AccountRepoTest = async () => {
    const mockAccount: Account = {
        ownerId: 'ownerIdownerIdownerId',
        name: 'AccountRepoTest',
        apiKey: 'apiKeyapiKeyapiKey',
        apiSecret: 'apiSecretapiSecretapiSecret',
        disabled: true,
        quota: 987,
        balances: [
            { asset: 'asset/test', free: 888, locked: 666 },
            { asset: 'test/asset', free: 666, locked: 888 },
        ],
        balancesLastUpdateTime: new Date(),
    };
    await AccountRepo.create(mockAccount);
    const record = await AccountRepo
        .findOne({ 'name': mockAccount.name });
    console.log('AccountRepoTest: saved record', record);
    console.log('AccountRepoTest: saved record id', record.id);
    await AccountRepo.deleteMany({ 'email': mockAccount.name });
};



const runDBTest = async () => {
    await AppUserRepoTest();
    await AccountRepoTest();
};

connectDB()
    .then(() => console.log('db connected'))
   // .then(() => runDBTest)
    .catch(err => console.error(err));