/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type calculatorPage = typeof import('./pages/calculators-page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, calculatorPage: calculatorPage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
