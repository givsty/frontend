import React, { useState } from "react";
const Input: React.FC = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  return (
    <input
      placeholder="Поиск..."
      onChange={(e) => {
        setSearchItem(e.target.value);
      }}
    />
  );
};

export default Input;
