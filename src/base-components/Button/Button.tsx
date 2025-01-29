import React from "react";

import "./Button.scss";

export enum ButtonType {
  NEUTRAL = 'neutral',   // gray
  ALERT = 'alert',      // red
  PRIMARY = 'primary'    // blue
}

interface ButtonProps {
  text: string;
  buttonType: ButtonType;
  onClick: () => void;
  additionalClassNames?: string[]; // in case we need to add more styles
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {

  const { text, onClick, additionalClassNames = [], icon = null, buttonType } = props;

  return (
    <button 
      className={`button button__${buttonType} ${additionalClassNames?.join(" ")}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
