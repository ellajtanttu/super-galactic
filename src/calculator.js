// export class TestObject {
//   constructor(number) {
//     this.number = 3;
//   }
// }
export function yrsToDays(number) {
  if (number > 0) {
    return number * 365;
  } else {
    return "number not set"
  }
}

export function mercury(number) {
  const earthDays = yrsToDays(number);
  const mercConv = parseFloat(earthDays / 88);
  return parseFloat(mercConv.toFixed(2));
}

export function venus(number) {
  const earthDays = yrsToDays(number);
  const venusConv = parseFloat(earthDays / 225);
  return parseFloat(venusConv.toFixed(2));
}

export function mars(number) {
  const earthDays = yrsToDays(number);
  const marsConv = parseFloat(earthDays / 687);
  return parseFloat(marsConv.toFixed(2));
}

export function jupiter(number) {
  const earthDays = yrsToDays(number);
  const jupConv = parseFloat(earthDays / 4333);
  return parseFloat(jupConv.toFixed(2));
}

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

GlabbaData.prototype.ageCalc = function () {
  const age = this.earthAge;
  this.mercData = [];
  this.venData = [];
  // this.marsData = [];
  // this.jupData = [];
  this.mercData.push(mercury(age));
  this.venData.push(venus(age));

  // this.venData.push(venus(ageDays));
  // this.marsData.push(mars(ageDays));
  // this.jupData.push(jupiter(ageDays));
}

// prototype.lifeExp = function () {
//   const lEDays = this.earthLE.yrsToDays();
//   this.mercData.push(lEDays.mercury)
//   this.venData.push(lEDays.venus)
//   this.marsData.push(lEDays.mars)
//   this.jupData.push(lEDays.jupiter)
// }

// GlabbaData.prototype.lifeExp = function () {
//   const earthLEYears = this.earthLE
//   const earthLEDays = earthLEYears.yrsToDays();
//   const mercExpectancy = parseFloat(earthLEDays / 88);
//   return parseFloat(mercExpectancy.toFixed(2));
// }


// git add __tests__/calculator.test.js src/calculator.js