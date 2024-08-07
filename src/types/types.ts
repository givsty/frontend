export interface ISneaker {
  id: number;
  name: string;
  image: string;
  price: string;
  toggleBasket: () => void
}

export interface Pages {
  toggleBasket: () => void;
}
