// / js started from here
function inputDataCollection(serial) {
    let firstInput = document.getElementById(serial + "-input");
    let firstInputValue = firstInput.value;
    if (firstInput.value > 0) {
        let firstInputValueFloat = parseFloat(firstInputValue);
        firstInput.value = firstInputValueFloat;
        return firstInputValueFloat;
    }
}

//total expenses calculating************//
function totalExpenses() {
    let primaryExpenses = document.getElementById("total-expenses");
    let primaryExpensesData = primaryExpenses.innerText;
    let primaryExpensesValue =
        inputDataCollection("second") +
        inputDataCollection("third") +
        inputDataCollection("fourth");
    // using-condition
    // if (primaryExpenses.innerText <= inputDataCollection("first"))

    if (primaryExpensesValue <= inputDataCollection("first")) {
        // primaryExpenses.innerText = primaryExpenses.innerText;
        // return primaryExpenses.innerText;
        primaryExpenses.innerText = primaryExpensesValue;
        return primaryExpensesValue;
    } else {
        let error1 = document.getElementById("error1");
        error1.style.display = "block";
    }
}
//initial balance after giving the value of income
function initialBalance() {
    let initialBalanceAmount = document.getElementById("balance");
    let initialBalanceAmountData = initialBalanceAmount.innerText;
    // let initialBalanceAmountData = initialBalanceAmount.innerText;
    // let initialBalanceAmountDataFloat = parseFloat(initialBalanceAmountData);
    // initialBalanceAmount.innerText =
    //   inputDataCollection("first") - totalExpenses();
    let totalInitialBalance = initialBalanceAmountInnerText =
        inputDataCollection("first") - totalExpenses();
    initialBalanceAmount.innerText = totalInitialBalance;
    return initialBalanceAmount.innerText;
    // return initialBalanceAmount.innerText;
}
// calculate button click event handeling
document
    .getElementById("calculate-button")
    .addEventListener("click", function () {
        //total primary expenses calling
        totalExpenses();
        // initial bance
        initialBalance();
    });

function savingPercentageAmount() {
    let savingPercentage = document.getElementById("fifth-input");
    let savingPercentageText = savingPercentage.value;
    if (savingPercentage.value > 0) {
        let savingPercentageTextFloat = parseFloat(savingPercentageText);
        return savingPercentageTextFloat;
    }
}
// save amount function with error
function saveYourMoney() {
    let moneyInput = document.getElementById("money-saved");
    // let moneyInputData = moneyInput.innerText;
    // let moneyInputDataFloat = parseFloat(moneyInputData);
    let savingMoney =
        (savingPercentageAmount() * inputDataCollection("first")) / 100;
    // moneyInput.innerText = savingMoney;
    // return savingMoney;

    // return moneyInput.innerText;
    //error2 msg
    if (savingMoney > initialBalance()) {
        let error1 = document.getElementById("error2");
        error1.style.display = "block";
    } else {
        moneyInput.innerText = savingMoney;
        return savingMoney;
    }
}
//remaining money after savings
function remainingMoneyAfterSavings() {
    let remainingMoney = document.getElementById("remaining-balance");
    let remainingMoneyDataType = remainingMoney.innerText;
    // let remainingMoneyDataFloat = parseFloat(remainingMoneyData);
    // remainingMoney.innerText = initialBalance() - saveYourMoney();
    let remainingMoneyData = initialBalance() - saveYourMoney();
    remainingMoney.innerText = remainingMoneyData;
    return remainingMoneyData;
}
// save button click handeling
document.getElementById("save-button").addEventListener("click", function () {
    //amount saved from income by given percentage
    saveYourMoney();
    //money available after savings
    remainingMoneyAfterSavings();
});

