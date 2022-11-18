const { I } = inject();


const calculatorPage = {
    buttonNum: (num) => `//button[text() = ${num}]`,
    buttonSum: "//button[text() = '+']",
    buttonSubtract: "//button[text() = '-']",
    buttonEqual: "//button[text() = '=']",
    displayResult: "//div[@class='component-app']/div",
    isLoad,
    sum,
    subtraction,
    returnResult
}

const time = 10

function isLoad() {
    I.amOnPage('/')
    I.waitForVisible(calculatorPage.buttonEqual, time);
    I.seeElement(calculatorPage.buttonEqual);
}

function sum(num1, num2) {

    I.click(calculatorPage.buttonNum(num1))
    I.click(calculatorPage.buttonSum)
    I.click(calculatorPage.buttonNum(num2))
    I.click(calculatorPage.buttonEqual)
}

function subtraction(num1, num2) {

    I.click(calculatorPage.buttonNum(num1))
    I.click(calculatorPage.buttonSubtract)
    I.click(calculatorPage.buttonNum(num2))
    I.click(calculatorPage.buttonEqual)
}

function returnResult() {

    const result = I.grabTextFrom(calculatorPage.displayResult)
    return result
}

module.exports = calculatorPage