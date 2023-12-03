class Project {
  url: string;
  imageUrl: string;
  baseUrl: string;
  constructor(url: string, image: string) {
    this.baseUrl = "https://lucasnathandev.github.io/";
    this.url = this.baseUrl + url;
    this.imageUrl = image;
  }
}

export const projects = [new Project("split-landing-page", "")];
