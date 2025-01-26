import React from 'react';

enum ButtonType {
  Submit = 'submit',
  Reset = 'reset',
  Button = 'button'
}

interface CustomButtonProps {
  btnType?: ButtonType;
  title: string;
  handleClick: () => void;
  styles?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  btnType = ButtonType.Button, 
  title, 
  handleClick, 
  styles = '' 
}) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;