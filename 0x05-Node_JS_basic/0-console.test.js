const chai = require('chai');
const displayMessage = require('./yourFileName'); // Replace 'yourFileName' with the actual file name containing your function

const { expect } = chai;

describe('displayMessage function', () => {
  it('should log the provided string to the console', () => {
    // Arrange
    const consoleLogSpy = chai.spy.on(console, 'log'); // Using the 'chai-spies' package for spying on console.log

    // Act
    displayMessage('Hello, world!');

    // Assert
    expect(consoleLogSpy).to.have.been.called.with('Hello, world!');
  });
});
