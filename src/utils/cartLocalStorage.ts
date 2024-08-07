export const getCartFromLS = () => {
  const data = localStorage.getItem("cardItem");
  return data ? JSON.parse(data) : [];
};
