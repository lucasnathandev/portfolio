export enum Icon {
  github = "github",
  linkedin = "linkedin",
  instagram = "instagram",
  google = "google",
  twitter = "twitter",
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
