export interface ICard {
  srcImg: string;
  name: string;
  author: string;
}

export interface IUnsplashPhoto {
  urls: {
    regular: string;
  };
  user: {
    name: string;
    first_name: string;
    last_name: string;
  };
  alt_description: string;
  id: string;
}
