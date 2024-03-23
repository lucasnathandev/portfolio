export enum Icon {
  github = "fab fa-github",
  linkedin = "fab fa-linkedin",
  instagram = "fab fa-instagram",
  google = "fab fa-google",
  mail = "fas fa-envelope",
}

export interface SocialIconProps {
  icon: Icon;
  color?: string;
  size?: string;
  hover?: string;
}

export interface SocialLinkProps {
  url: string;
  style: SocialIconProps;
}
