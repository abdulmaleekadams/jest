import { useState } from "react";

const Button = ({
  onClick,
  label = "Click me",
  disabled = false,
}: {
  label?: string;
  disabled?: boolean;
  onClick: () => void;
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    onClick();
  };
  return (
    <button onClick={handleClick} disabled={disabled}>
      {clicked ? "Clicked!" : label}
    </button>
  );
};

export default Button;
