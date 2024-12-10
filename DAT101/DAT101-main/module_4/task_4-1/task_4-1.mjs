"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const currencyTypes = { 
    NOK: {value: 1.0000, name: "Norske kroner", denomination: "kr"}, 
    EUR: {value: 0.0985, name: "Europeiske euro", denomination: "€"}, 
    USD: {value: 0.1091, name: "United States dollar", denomination: "$"}, 
    GBP: {value: 0.0847, name: "Pound sterling", denomination: "£"}, 
    INR: {value: 7.8309, name: "Indiske rupee", denomination: "₹"}, 
    AUD: {value: 0.1581, name: "Australske dollar", denomination: "A$"}, 
    PHP: {value: 6.5189, name: "Fillippinske peso", denomination: "₱"}, 
    SEK: {value: 1.0580, name: "Svenske kroner", denomination: "kr"}, 
    CAD: {value: 0.1435, name: "Kanadiske dollar", denomination: "C$"}, 
    THB: {value: 3.3289, name: "Thai baht", denomination: "฿"} 
}


const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensjonskonto"


};

class TAccount {
    #type; 
    #balance;
    #withdrawCount;
    constructor(aType){
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
    }

    toString(){
        return this.#type;
    }
    setType(aType){
        let text = "Account type  has changed from" + this.#type;
        this.#type = aType;
        this.#withdrawCount = 0
        text += "to" + this.#type;
        printOut(text)
    
    }

    getBalance(){
        return this.#balance;
    }
    deposit(aAamount){
        this.#balance += aAamount;
        this.#balance,this.#balance += aAamount;
        printOut("Deposit of " + aAamount +  " ,new balance is" + this.#balance);

    }
    withdraw(aAamount) {
        let canWithdraw = true;
        let text = "";

        switch(this.#type){
            case AccountType.Savings:
            if(this.#withdrawCount < 3){
                this.#withdrawCount++;
                canWithdraw = true;
            }else{
                canWithdraw = false;
                text = "cannot withdraw more than 3 times from a " + this.#type + "account"
            }
            break;
            case AccountType.Pension:
            canWithdraw = false;
            text = "cannot withdraw from a " + this.#type + " account "
            break;
            
    
        if(this.#withdrawCount < 3){
            this.#withdrawCount++;
             this.#balance -= aAamount;
        printOut("Whitdraw of" + aAamount + " , new balance is" + this.#balance);
        }else{
            printOut(text);
        }
        break;
        case AccountType.Pension:
        canwithdraw = false;
        //text = "cannot withdraw more than 3 times from a" + this.#type + " account."
        break;
    }
}
    }
        
        

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


printOut (AccountType.Normal1 + ", " + AccountType.Saving + ", " + AccountType.Credit + ", " + AccountType.Pension);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let myAccount = new TAccount(AccountType.Normal);
printOut("My account" + myAccount.toString());
myAccount.setType(AccountType.Saving);
printOut("myAccount: " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(100);
myAccount.withdraw(23);
printOut("my account balance is: " + myAccount.getBalance());

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);
myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);




printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 

printOut(newLine);
myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);
printOut("Replace this with you answer!");
printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(100.927, CurrencyTypes.SEK);
printOut("Replace this with you answer!");
printOut(newLine);
