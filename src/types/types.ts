export interface ISneaker{
  id: number;
  name: string;
  image: string;
  price: string;
}

export interface Pages {
  toggleBasket: () => void;
}