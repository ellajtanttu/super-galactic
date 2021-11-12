// import { ClassExample1, ClassExample2 } from "../src/project"; // classes
// import {DogMoods} from './../src/project.js'; // object

// describe('DogMoods', () => {

//   test('testMood.happy should be defined', () => {
//     const testMood = new DogMoods("woof", "yip", "growl");
//     expect(testMood.happy).toBeDefined();
//   });
// });

// expect(monster1.level).toBeDefined();

import {GlabbaData} from './../src/calculator.js'; // object

describe('GlabbaData', () => {

  test('should correctly create a GlabbaData object with ten keys', () => {
    const testGlabba = new GlabbaData("Gloopdoop", 26, "Magblag", true, "herbivore", 0, [0,0], [0,0], [0,0], [0,0]);
    expect(testGlabba.name).toEqual("Gloopdoop");
    expect(testGlabba.earthAge).toEqual(26);
    expect(testGlabba.type).toEqual("Magblag");
    expect(testGlabba.combs).toEqual(true);
    expect(testGlabba.diet).toEqual("herbivore");
    expect(testGlabba.earthLE).toEqual(0);
    expect(testGlabba.mercData).toEqual([0,0]);
    expect(testGlabba.venData).toEqual([0,0]);
    expect(testGlabba.marsData).toEqual([0,0]);
    expect(testGlabba.jupData).toEqual([0,0]);
  });
});


describe('earthLifeExp', () => {

  test('should return 0 when run on object', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(0);
  });
  
  test('should return 67 when run on object with .type === "bloogblag"', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.type = "bloogblag";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(67);
  });

  test('should return 83 when run on object with .type === "magmoog"', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.type = "magmoog";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(83);
  });

  test('should return 75 when run on object with .type === "magblag"', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.type = "magblag";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(75);
  });

  test('should return -20 when run on object with .combs === true', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.combs = true;
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(-20);
  });

  test('should return 5 when run on object with .combs === false', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.combs = false;
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(5);
  });

  test('should return 12 when run on object with .diet === "carnivore"', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.diet = "carnivore";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(12);
  });

  test('should return 18 when run on object with .diet === "vegetarian"', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthLE = 0;
    testGlabba.diet = "vegetarian";
    testGlabba.earthLifeExp();
    expect(testGlabba.earthLE).toEqual(18);
  });

});

describe('yrsToDays', () => {

  test('should return 365 when run on object with .earthAge === 1', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthAge = 1;
    const testAgeInDays = testGlabba.yrsToDays();
    expect(testAgeInDays).toEqual(365);
  });

  test('should return 1460 when run on object with .earthAge === 4', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthAge = 4;
    const testAgeInDays = testGlabba.yrsToDays();
    expect(testAgeInDays).toEqual(1460);
  });

  test('should return "age not set" when run on object with .earthAge === 0', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthAge = 0;
    const testAgeInDays = testGlabba.yrsToDays();
    expect(testAgeInDays).toEqual("age not set");
  });

});

describe('mercury', () => {

  test('should return 4.15 when run on object with .earthAge === 1', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthAge = 1;
    const mercuryAge = testGlabba.mercury();
    expect(mercuryAge).toEqual(4.15);
  });

});

describe('venus', () => {

  test('should return 1.62 when run on object with .earthAge === 1', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthAge = 1;
    const venusAge = testGlabba.venus();
    expect(venusAge).toEqual(1.62);
  });

});

describe('mars', () => {

  test('should return .53 when run on object with .earthAge === 1', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthAge = 1;
    const marsAge = testGlabba.mars();
    expect(marsAge).toEqual(.53);
  });

});

describe('jupiter', () => {

  test('should return .08 when run on object with .earthAge === 1', () => {
    const testGlabba = new GlabbaData();
    testGlabba.earthAge = 1;
    const jupAge = testGlabba.jupiter();
    expect(jupAge).toEqual(.08);
  });

});

