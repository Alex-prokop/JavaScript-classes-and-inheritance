const MainBuilder = function (value) {
  this.value = value;
};

MainBuilder.prototype.plus = function (...args) {
  this.value += args.reduce((acc, num) => acc + num);
  return this;
};

MainBuilder.prototype.minus = function (args) {
  this.value = this.value.slice(0, this.value.length - args);
  return this;
};

MainBuilder.prototype.multiply = function (args) {
  this.value = this.value.repeat(args);
  return this;
};

MainBuilder.prototype.divide = function (args) {
  this.value = this.value.slice(0, Math.floor(this.value.length / args));
  return this;
};

MainBuilder.prototype.get = function () {
  return this.value;
};

//  IntBuilder class ES6: //
class IntBuilder extends MainBuilder {
  constructor(value) {
    super(value);
  }
  minus(...args) {
    this.value -= args.reduce((acc, num) => acc + num, 0);
    return this;
  }
  multiply(args) {
    this.value *= args;
    return this;
  }
  divide(args) {
    this.value = Math.floor(this.value / args);
    return this;
  }
  mod(args) {
    this.value %= args;
    return this;
  }

  static random(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
}

//  StringBuilder class ES5
const StringBuilder = function (value) {
  MainBuilder.call(this, value);
};

StringBuilder.prototype = Object.create(MainBuilder.prototype);

StringBuilder.prototype.remove = function (str) {
  this.value = this.value
    .split('')
    .filter((s) => s !== str)
    .join('');
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.value = this.value.substr(from, n);
  return this;
};

IntBuilder.random(10, 100); // 42;
let intBuilder = new IntBuilder(10); // 10;
intBuilder
  .plus(2, 3, 2) // 17;
  .minus(1, 2) // 14;
  .multiply(2) // 28;
  .divide(4) // 7;
  .mod(3); // 1;
console.log(intBuilder.get());

let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!') // 'Hello all!'
  .minus(4) // 'Hello '
  .multiply(3) // 'Hello Hello Hello '
  .divide(4) // 'Hell';
  .remove('l') // 'He';
  .sub(1, 1); // 'e';
console.log(strBuilder.get());
