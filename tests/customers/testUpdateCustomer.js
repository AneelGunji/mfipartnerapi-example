let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'dev';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
var extCustomerId = 'EXT0';

const updateData = {
    bankAccount: {
        accountNumber: '1123145462',
        ifsc: "ICIC0210024",
        accountName: "Aneel",
        bankName: "ICIC",
        branchName: "Nellore"
    },
    branchId: "EXT002311",
    address: {
        houseNumber: "3029", streetName: "Narayan Ali", district: "Raigad", pinCode: 402202, state: "IN-MH", country: "India", stdCode: 0470
    },
}
async function test() {
    let client = await DvaraGold.Client(config);

    let getData = await client.getCustomer(extCustomerId);

    getData.bankAccount = updateData.bankAccount;
    getData.address = updateData.address

    return await client.updateCustomer(extCustomerId, getData);
}
test()
    .then(result => {
        console.dir(result)
    })
    .catch(err => {
        console.error(err)
    })
    .finally(() => {
        process.exit(0);
    })