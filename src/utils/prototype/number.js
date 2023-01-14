Number.prototype.digitize = function (digit = 3, prefix) {
  if (typeof this !== "number") return "invalid value";
  if (typeof digit !== "number") return "invalid digit value";

  const temp = this.toString();
  const tempLength = temp.length;
  const diff = digit - tempLength;
  const zeros = "0".repeat(diff < 0 ? 0 : diff);

  return (prefix || "") + zeros + temp;
};
