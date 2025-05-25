import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ContactFormInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon: LucideIcon;
  required?: boolean;
  disabled?: boolean;
}

export const ContactFormInput: React.FC<ContactFormInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  Icon,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-black border border-white/30 rounded-lg py-3 px-12 text-white placeholder:text-white/40
          focus:outline-none focus:border-[#DA6040] transition-colors"
        required={required}
        disabled={disabled}
      />
    </div>
  );
};