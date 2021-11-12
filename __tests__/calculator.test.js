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
    const testGlabba = new GlabbaData("Gloopdoop", 26, "Magblag", True, "herbivore", 0, [0,0], [0,0], [0,0], [0,0]);
    expect(testGlabba.name).toEqual("Gloopdoop");
    expect(testGlabba.earthAge).toEqual(26);
    expect(testGlabba.type).toEqual("Magblag");
    expect(testGlabba.combs).toEqual(True);
    expect(testGlabba.diet).toEqual("herbivore");
    expect(testGlabba.earthLE).toEqual(0);
    expect(testGlabba.mercData).toEqual([0,0]);
    expect(testGlabba.venData).toEqual([0,0]);
    expect(testGlabba.marsData).toEqual([0,0]);
    expect(testGlabba.jupData).toEqual([0,0]);
  });
});