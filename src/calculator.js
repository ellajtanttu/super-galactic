// export class TestObject {
//   constructor(number) {
//     this.number = 3;
//   }
// }

export function GlabbaData(name, earthAge, type, combs, diet, earthLE, mercData, venData, marsData, jupData) {
  this.name = name;
  this.earthAge = earthAge;
  this.type = type;
  this.combs = combs;
  this.diet = diet;
  this.earthLE = earthLE;
  this.mercData = mercData;
  this.venData = venData;
  this.marsData = marsData;
  this.jupData = jupData;
}

GlabbaData.prototype.earthLifeExp = function() {
  let calcLifeExp = 0;
  if (this.type === "bloogblag") {
    calcLifeExp += 67;
  } else if (this.type === "magmoog") {
    calcLifeExp += 83;
  } else if (this.type === "magblag") {
    calcLifeExp += 75;
  } else {
    calcLifeExp += 0;
  }

  if (this.combs === true) {
    calcLifeExp -= 20;
  } else if (this.combs === false) {
    calcLifeExp += 5;
  } else {
    calcLifeExp += 0;
  }

  if (this.diet === "carnivore") {
    calcLifeExp += 12;
  } else if (this.diet === "vegetarian") {
    calcLifeExp += 18;
  } else {
    calcLifeExp += 0;
  } 

  return this.earthLE += calcLifeExp;
}

// GlabbaData.prototype.yrsToDays = function() {
//   if (this.earthAge > 0) {
//     return this.earthAge * 365;
//   } else {
//     return "age not set"
//   } 
// }

export function yrsToDays(number) {
  if (number > 0) {
    return number * 365;
  } else {
    return "number not set"
  } 
}

GlabbaData.prototype.mercury = function () {
  const earthDays = this.yrsToDays();
  const mercConv = parseFloat(earthDays / 88);
  return parseFloat(mercConv.toFixed(2));
}

GlabbaData.prototype.venus = function () {
  const earthDays = this.yrsToDays();
  const venConv = parseFloat(earthDays / 225);
  return parseFloat(venConv.toFixed(2));
}

GlabbaData.prototype.mars = function () {
  const earthDays = this.yrsToDays();
  const marsConv = parseFloat(earthDays / 687);
  return parseFloat(marsConv.toFixed(2));
}

GlabbaData.prototype.jupiter = function () {
  const earthDays = this.yrsToDays();
  const jupConv = parseFloat(earthDays / 4333);
  return parseFloat(jupConv.toFixed(2));
}

GlabbaData.prototype.lifeExp = function () {
  const earthLEYears = this.earthLE
  const earthLEDays = earthLEYears.yrsToDays();
  const mercExpectancy = parseFloat(earthLEDays / 88);
  return parseFloat(mercExpectancy.toFixed(2));
}


// git add __tests__/calculator.test.js src/calculator.js