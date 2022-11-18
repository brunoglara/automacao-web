const assert = require('assert');
const { I, calculatorPage } = inject();
// Add in your custom step files


Given('estou na página de calculadora', () => {
  // From "features\calculator.feature" {"line":7,"column":5}

  calculatorPage.isLoad()
});

When('eu somo os números {int} e {int}', (num1, num2) => {
  // From "features\calculator.feature" {"line":8,"column":5}
  calculatorPage.sum(num1, num2)
});

Then('eu devo receber {int} como resultado', async (result) => {
  // From "features\calculator.feature" {"line":9,"column":5}
  const returnValue = await calculatorPage.returnResult()

  // assert.equal(returnValue, result)
  if (returnValue !== String(result)) {

    throw new Error(`Calculated: ${returnValue} -> Expected: ${result}`);
  }
});

Given('estou na página de calculadora para subtrair', () => {
  // From "features\calculator.feature" {"line":17,"column":5}
  calculatorPage.isLoad()
});

When('eu subtraio os números {int} e {int}', (num1, num2) => {
  // From "features\calculator.feature" {"line":18,"column":5}
  calculatorPage.subtraction(num1, num2)
});

Then('eu devo receber {int} como resultado da subtração', async (result) => {
  // From "features\calculator.feature" {"line":19,"column":5}
  const returnValue = await calculatorPage.returnResult()

  if (returnValue !== String(result)) {

    throw new Error(`Calculated: ${returnValue} -> Expected: ${result}`);
  }
});
