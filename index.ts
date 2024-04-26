#! usr/bin/env node

import inquirer from 'inquirer'
const Courrency: any = {
    USD: 1, // based currendy
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
}

let user_answer = await inquirer.prompt ([{
    name: 'from',
    message: 'enter from Courrency',
    type: 'list',
    choices: ['USD', 'EUR','GBP', 'INR', 'PKR' ]
},
{
    name: 'to',
    message: 'enter to Courrency',
    type: 'list',
    choices: ['USD', 'EUR','GBP', 'INR', 'PKR' ]
},
{
    name: 'amount',
    message: 'enter your amount',
    type: 'number',
}])

let fromAmount = Courrency [user_answer.from]
let toAmount = Courrency[user_answer.to]
let amount = user_answer.amount
let baseamount = amount / fromAmount // usd base currency //4
let convertedamount = baseamount * toAmount
console.log (convertedamount)
