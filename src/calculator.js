export function yrsToDays(number) {
  if (number > 0) {
    return number * 365;
  } else {
    return "number not set";
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

export class GlabbaData {
  constructor(
    name,
    earthAge,
    type,
    combs,
    diet,
    earthLE,
    mercAge,
    venAge,
    marsAge,
    jupAge,
    mercLE,
    venLE,
    marsLE,
    jupLE,
    over
  ) {
    this.name = name;
    this.earthAge = earthAge;
    this.type = type;
    this.combs = combs;
    this.diet = diet;
    this.earthLE = earthLE;
    this.mercAge = mercAge;
    this.venAge = venAge;
    this.marsAge = marsAge;
    this.jupAge = jupAge;
    this.mercLE = mercLE;
    this.venLE = venLE;
    this.marsLE = marsLE;
    this.jupLE = jupLE;
    this.over = over;
  }

  earthLifeExp() {
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
    return (this.earthLE += calcLifeExp);
  }

  ageCalc() {
    this.mercAge = 0;
    this.venAge = 0;
    this.marsAge = 0;
    this.jupAge = 0;
    const age = this.earthAge;
    this.mercAge = mercury(age);
    this.venAge = venus(age);
    this.marsAge = mars(age);
    this.jupAge = jupiter(age);
  }

  lECalc() {
    this.over = false;
    this.mercLE = 0;
    this.venLE = 0;
    this.marsLE = 0;
    this.jupLE = 0;
    const lifeExp = this.earthLE;
    this.mercLE = parseFloat((mercury(lifeExp) - this.mercAge).toFixed(2));
    this.venLE = parseFloat((venus(lifeExp) - this.venAge).toFixed(2));
    this.marsLE = parseFloat((mars(lifeExp) - this.marsAge).toFixed(2));
    this.jupLE = parseFloat((jupiter(lifeExp) - this.jupAge).toFixed(2));
  }

  negative() {
    if (this.mercLE < 0) {
      this.over = true;
      return (this.mercLE *= -1);
    }
  }
}
