var assert = require('chai').assert;
var TicTacToe = require('./ticTacToe');

xdescribe("Tic Tac Toe", function() {

  it("can place an x at 1, 1", function() {
    //Arrange
    var ticTacToe = new TicTacToe();
    //Act
    ticTacToe.set(1, 1, "X");
    var atOneOne = ticTacToe.get(1, 1, "X");
    //Assert
    assert.equal(atOneOne, "X");
  });

  xit("can place an o at 1, 1", function() {});
  xit("can place an x at 1, 1, and o at 2,2", function() {});
  xit("can place an x at 1,1 2,2 and 3,3", function() {});
  xit("can convert the grid to a 3 line string for display", function() {});
  xit("can convert a grid with o in center to a string", function() {});
  xit("can show x wins when x is at 1,1 1,2 and 1,3", function() {});
  xit("can show o wins when o is at 1,1 2,1 and 3,1", function() {});
  xit("can show x wins when x is in the diagonal", function() {});
});
