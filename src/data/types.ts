/** Shapes shared by the page copy files in this folder. */

export interface Seo {
  /** Browser tab and search result title. Aim for under 60 characters. */
  title: string;
  /** Search result description. Aim for under 160 characters. */
  description: string;
}

export interface TitleText {
  title: string;
  text: string;
}

export interface Review {
  quote: string;
  name: string;
  context: string;
}

export interface Cta {
  title: string;
  text: string;
}
