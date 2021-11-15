import {
  GlabbaData,
  yrsToDays,
  mercury,
  venus,
  mars,
  jupiter,
} from "./../src/calculator.js"; // object

describe("GlabbaData", () => {
  test("should correctly create a GlabbaData object with fourteen keys", () => {
    let testGlabba = new GlabbaData(
      "Gloopdoop",
      26,
      "Magblag",
      true,
      "herbivore",
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      false
    );
    expect(testGlabba.name).toEqual("Gloopdoop");
    expect(testGlabba.earthAge).toEqual(26);
    expect(testGlabba.type).toEqual("Magblag");
    expect(testGlabba.combs).toEqual(true);
    expect(testGlabba.diet).toEqual("herbivore");
    expect(testGlabba.earthLE).toEqual(0);
    expect(testGlabba.mercAge).toEqual(0);
    expect(testGlabba.venAge).toEqual(0);
    expect(testGlabba.marsAge).toEqual(0);
    expect(testGlabba.jupAge).toEqual(0);
    expect(testGlabba.mercLE).toEqual(0);
    expect(testGlabba.venLE).toEqual(0);
    expect(testGlabba.marsLE).toEqual(0);
    expect(testGlabba.jupLE).toEqual(0);
    expect(testGlabba.over).toEqual(false);
  });
});

describe("earthLifeExp", () => {
  test("should return 0 when run on object", () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(0);
  });

  test('should return 67 when run on object with .type === "bloogblag"', () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.type = "bloogblag";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(67);
  });

  test('should return 83 when run on object with .type === "magmoog"', () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.type = "magmoog";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(83);
  });

  test('should return 75 when run on object with .type === "magblag"', () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.type = "magblag";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(75);
  });

  test("should return -20 when run on object with .combs === true", () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.combs = true;
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(-20);
  });

  test("should return 5 when run on object with .combs === false", () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.combs = false;
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(5);
  });

  test('should return 12 when run on object with .diet === "carnivore"', () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.diet = "carnivore";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(12);
  });

  test('should return 18 when run on object with .diet === "vegetarian"', () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.diet = "vegetarian";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(18);
  });
});

describe("yrsToDays", () => {
  test("should return 365 when run on object with .earthAge === 1", () => {
    let testAge = 1;
    const testAgeInDays = yrsToDays(testAge);
    expect(testAgeInDays).toEqual(365);
  });

  test("should return 1460 when run on object with .earthAge === 4", () => {
    let testAge = 4;
    const testAgeInDays = yrsToDays(testAge);
    expect(testAgeInDays).toEqual(1460);
  });

  test('should return "age not set" when run on object with .earthAge === 0', () => {
    let testAge = 0;
    const testAgeInDays = yrsToDays(testAge);
    expect(testAgeInDays).toEqual("number not set");
  });
});

describe("mercury", () => {
  test("should return 4.15 when run on age of 1", () => {
    const testAge = 1;
    const mercuryAge = mercury(testAge);
    expect(mercuryAge).toEqual(4.15);
  });
});

describe("venus", () => {
  test("should return 1.62 when run on age of 1", () => {
    const testAge = 1;
    const mercuryAge = venus(testAge);
    expect(mercuryAge).toEqual(1.62);
  });
});

describe("mars", () => {
  test("should return .53 when run on age of 1", () => {
    const testAge = 1;
    const marsAge = mars(testAge);
    expect(marsAge).toEqual(0.53);
  });
});

describe("jupiter", () => {
  test("should return .08 when run on age of 1", () => {
    const testAge = 1;
    const jupAge = jupiter(testAge);
    expect(jupAge).toEqual(0.08);
  });
});

describe("ageCalc", () => {
  test("should set object merData to 269.6 when run on earth age of 65", () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthAge = 65;
    testGlabba.ageCalc();
    expect(testGlabba.mercAge).toEqual(269.6);
  });

  test("should set object venData to 105.44 when run on earth age of 65", () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthAge = 65;
    testGlabba.ageCalc();
    expect(testGlabba.venAge).toEqual(105.44);
  });

  test("should set object marsData to 34.53 when run on earth age of 65", () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthAge = 65;
    testGlabba.ageCalc();
    expect(testGlabba.marsAge).toEqual(34.53);
  });

  test("should set object jupData to 5.48 when run on earth age of 65", () => {
    let testGlabba = new GlabbaData();
    testGlabba.earthAge = 65;
    testGlabba.ageCalc();
    expect(testGlabba.jupAge).toEqual(5.48);
  });
});

describe("lECalc", () => {
  test("should change mercLE to equal years left on mercury, 124.43 at earth age 50 earth exp 80.", () => {
    let testGlabba = new GlabbaData();
    testGlabba.mercAge = 207.39;
    testGlabba.earthLE = 80;
    testGlabba.lECalc();
    expect(testGlabba.mercLE).toEqual(124.43);
  });

  test("should change venLE to equal years left on venus, 48.67 at earth age 50 earth exp 80.", () => {
    let testGlabba = new GlabbaData();
    testGlabba.venAge = 81.11;
    testGlabba.earthLE = 80;
    testGlabba.lECalc();
    expect(testGlabba.venLE).toEqual(48.67);
  });

  test("should change marsLE to equal years left on mars, 15.93 at earth age 50 earth exp 80.", () => {
    let testGlabba = new GlabbaData();
    testGlabba.marsAge = 26.57;
    testGlabba.earthLE = 80;
    testGlabba.lECalc();
    expect(testGlabba.marsLE).toEqual(15.93);
  });

  test("should change venLE to equal years left on venus, 2.53 at earth age 50 earth exp 80.", () => {
    let testGlabba = new GlabbaData();
    testGlabba.jupAge = 4.21;
    testGlabba.earthLE = 80;
    testGlabba.lECalc();
    expect(testGlabba.jupLE).toEqual(2.53);
  });

  test("should change mercLE to equal years passed expectancy, -20.75 at earth age 85 earth exp 80.", () => {
    let testGlabba = new GlabbaData();
    testGlabba.mercAge = 352.56;
    testGlabba.earthLE = 80;
    testGlabba.lECalc();
    expect(testGlabba.mercLE).toEqual(-20.74);
  });
});

describe("wholeNumber", () => {
  test("should change .over to true when the mercLE life expectency has been met.", () => {
    let testGlabba = new GlabbaData();
    testGlabba.mercLE = -20.74;
    testGlabba.negative();
    expect(testGlabba.over).toEqual(true);
  });
});

describe("negative", () => {
  test("should change .over to true when the mercLE life expectency has been met.", () => {
    let testGlabba = new GlabbaData();
    testGlabba.mercLE = -20.74;
    testGlabba.negative();
    expect(testGlabba.over).toEqual(true);
  });

  test("should change negative value to positive for mercLE", () => {
    let testGlabba = new GlabbaData();
    testGlabba.mercLE = -20.74;
    testGlabba.negative();
    expect(testGlabba.mercLE).toEqual(20.74);
  });
});
