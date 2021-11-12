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
  let calcLifeExp = 1;
  // if (type === bloogblag) {
  //   lifeExp += 67;
  // } else {
  //   lifeExp += 75;
  // }
  return this.earthLE += calcLifeExp;
}

/* 
  function earthLE() {
        let lifeExp = 0;
        if (type === bloogblag) {
              life exp += 67
        } else if (type === magmoog) {
              life exp += 83
        } else {
              life exp += 75
        }

        if (inhaleComp === true) {
              lifeExp -= 20;
        } else {
              lifeExp -= o;
        }

        if (diet === "carnivore) {
              lifeExp += 12;
        } else {
              lifeExp += 18;
        }
        return lifeExp;
  }
*/
