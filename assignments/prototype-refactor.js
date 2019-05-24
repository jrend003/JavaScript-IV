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