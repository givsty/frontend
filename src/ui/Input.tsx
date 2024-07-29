import React, { useState } from "react";
interface InputProps {
  setSearchItem: (text: string) => void;
}

const Input: React.FC<InputProps> = ({setSearchItem}) => {
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
