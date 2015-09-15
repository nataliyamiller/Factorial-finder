describe('factorial', function() {
  it("is false for a negative number", function() {
    expect(factorial(-2)).to.equal(false);
  });

  it("is 1 for number 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("is 1 for number 1", function() {
    expect(factorial(1)).to.equal(1);
  });

  it("is 120 for number 5", function() {
    expect(factorial(5)).to.equal(120);
  });

});
