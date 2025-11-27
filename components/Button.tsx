import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: string;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href, 
  download,
  asChild
}) => {
  const baseStyle = "px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 border border-black flex items-center gap-2 justify-center inline-flex cursor-pointer";
  const variants = {
    primary: "bg-black text-white hover:bg-white hover:text-black",
    outline: "bg-transparent text-black hover:bg-black hover:text-white",
    ghost: "border-none hover:bg-gray-100 text-black"
  };

  const finalClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement;
    return React.cloneElement(child, {
      className: `${finalClassName} ${child.props.className || ''}`,
      onClick: onClick ? (e: React.MouseEvent) => {
        child.props.onClick?.(e);
        onClick();
      } : child.props.onClick,
    });
  }

  if (href) {
    return (
      <a 
        href={href} 
        download={download} 
        className={finalClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={finalClassName}
    >
      {children}
    </button>
  );
};