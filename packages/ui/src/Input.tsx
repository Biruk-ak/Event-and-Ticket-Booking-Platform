import React from 'react';

export type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
};

export function Input({ label, value, onChange, type = 'text', placeholder }: InputProps) {
  return (
    <label className="etbp-input">
      <span>{label}</span>
      <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
