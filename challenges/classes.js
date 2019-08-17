// 1. Copy and paste your prototype in here and refactor into class syntax.

/*
    I had to change the identifiers 'CuboidMaker' and 'cuboid', because they were already declared in prototypes.js file. They have been changed to 'CuboidMaker2' and 'cuboid2' to avoid the SyntaxError.
*/
class CuboidMaker2 {
  constructor(obj) {
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

// STRETCH TASK - sub class CubeMaker
class CubeMaker extends CuboidMaker2 {
  constructor(obj) {
    super(obj);
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});

// STRETCH TASK - new CubeMaker Object
const myCubeMaker = new CubeMaker({
  length: 5,
  width: 6,
  height: 6
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// STRETCH TASK - Testing
console.log(myCubeMaker.volume());
console.log(myCubeMaker.surfaceArea());
