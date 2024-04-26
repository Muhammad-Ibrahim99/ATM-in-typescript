//start code by import inquirer:
import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "Welcome Muhammad Ibrahim"
    },
    {
        type: "number",
        name: "pinCode",
        message: "Enter your 4 digit pinCode"
    },
    //create listing and withdrawl method:
    {
        type: "list",
        name: "accounttype",
        message: "Select your account type",
        choices: ["current", "saving"]
    },
    //transition type:
    {
        type: "list",
        name: "transitiontype",
        message: "Select your transition type",
        choices: ["cash", "withdrawl"]
    },
    //selected amount:
    {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices: ["1000", "2000", "5000", "10000"],
        when(user) {
            return user.transitiontype === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(user) {
            return user.transitiontype === "withdrawl";
        }
    },
]);
//final slip:
if (user.pinCode) {
    const balance = Math.floor(Math.random() * 10000 + 1);
    console.log(balance);
    const enteramount = user.amount;
    if (enteramount <= balance) {
        const remaining = balance - enteramount;
        console.log(`you have withdrawl ${enteramount} rupess and you have remainig balance ${remaining}`);
    }
}
