function sum(n) {
  if (n <=1) {
    console.log(n);
    return n;
    }
  console.log(n);
  return n + sum(n - 6);
}
console.log (sum(10));