const { calculateFinalAmount } = require("../src/pricing");

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("No coupon case", () => {
  expect(calculateFinalAmount(100)).toBe(100);
});

test("SAVE10 coupon applies 10% discount", () => {
  expect(calculateFinalAmount(200, "SAVE10")).toBe(180);
});


test("FLAT50 boundary case (exactly 50)", () => {
  expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
});

test("FLAT50 boundary case (less than 50)", () => {
  expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
});

