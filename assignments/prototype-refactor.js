/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*function GameObject(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
    this.name = options.name;
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
  };*/

  class GameObject{
      constructor(createdAt, dimensions, name){
          this.createdAt= createdAt;
          this.dimensions=dimensions;
        this.name=name;
          }
          destroy(){
              return `${this.name} was removed from the game.`;
          }
  }

  /*function CharacterStats(characterStatsOptions) {
    GameObject.call(this, characterStatsOptions);
    this.healthPoints = characterStatsOptions.healthPoints;
  }
  
  // Sets up inheritance with GameObject
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`;
  }; */

  class CharacterStats extends GameObject{
  constructor(healthPoints){
      super(healthPoints);
      this.name=name;
  }
  takeDamage(){
      return `${this.name} took damage.`;
  }
}

/* function Humanoid(humanoidOptions) {
  CharacterStats.call(this, humanoidOptions);
  this.team = humanoidOptions.team;
  this.weapons = humanoidOptions.weapons;
  this.language = humanoidOptions.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
}; */

class Humanoid extends CharacterStats{
    constructor(team, weapons, language){
        super(team,weapons,language);
        this.team= team;
        this.weapons=weapons;
        this.language=language;

    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}