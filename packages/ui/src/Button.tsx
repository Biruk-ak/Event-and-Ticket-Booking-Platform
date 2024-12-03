import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
};

export function Button({ children, onClick, variant = 'primary', disabled }: ButtonProps) {
  return (
    <button className={`etbp-btn etbp-btn-${variant}`} onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  );
}
