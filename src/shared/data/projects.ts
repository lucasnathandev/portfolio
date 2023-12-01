class Project {
  url: string;
  imageUrl: string;

  constructor(url: string, image: string) {
    this.url = url;
    this.imageUrl = image;
  }
}

export const projects = [new Project("", "")];
