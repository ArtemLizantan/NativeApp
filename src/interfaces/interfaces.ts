export interface ICard {
  srcImg: string;
  name: string;
  author: string;
}

export interface IUnsplashPhoto {
  urls: {
    small: string;
  };
  user: {
    name: string;
    first_name: string;
    last_name: string;
  };
  alt_description: string;
  id: string;
}
