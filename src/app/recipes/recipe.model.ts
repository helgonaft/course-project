// Model is just a blueprint of object recipe. It will define inside class how the recipe should look like

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // constructor is called once a new instance of the class is created
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
