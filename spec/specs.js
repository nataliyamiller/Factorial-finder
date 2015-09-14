describe('factorial', function() {
  it("is false for a number that is not a factorial of a given number", function() {
    expect(factorial(120)).to.equal(false);
  });
});
