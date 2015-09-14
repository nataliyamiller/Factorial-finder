describe('factorial', function() {
  it("is false for a number that is not a factorial of a given number", function() {
    expect(factorial(120)).to.equal(false);
  });

  it("is 1 for number 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("is 1 for number 1", function() {
    expect(factorial(1)).to.equal(1);
  });

});
