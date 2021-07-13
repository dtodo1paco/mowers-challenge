global.console = {
  log: jest.fn(), // console.log are ignored in tests
  warn: jest.fn(), // console.warn are ignored in tests
  debug: jest.fn(), // console.debug are ignored in tests
  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  info: console.info,
  //error: console.error,
  error: jest.fn(), // console.debug are ignored in tests
};