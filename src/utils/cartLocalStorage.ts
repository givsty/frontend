
interface Item {
  id: number;
  name: string;
  image: string;
}

export const getCartFromLS = (): Item[] => {
  const data = localStorage.getItem('cardItems');
  const items = data ? JSON.parse(data) : [];
  return Array.isArray(items) ? items : [];
};