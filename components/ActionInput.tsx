'use client';

import { useState } from 'react';
import { type ActionInputVariant } from '../lib/types';
import { cn } from '../lib/utils';

interface ActionInputProps {
  variant: ActionInputVariant;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  buttonText?: string;
}

export function ActionInput({
  variant,
  placeholder,
  value: controlledValue,
  onChange,
  onSubmit,
  disabled = false,
  className,
  buttonText = 'Submit',
}: ActionInputProps) {
  const [internalValue, setInternalValue] = useState('');
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  
  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  if (variant === 'button') {
    return (
      <button
        onClick={() => onSubmit?.(value)}
        disabled={disabled}
        className={cn('btn-primary', className)}
      >
        {buttonText}
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex space-x-2', className)}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={disabled}
        className="input flex-1"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="btn-primary px-4"
      >
        {buttonText}
      </button>
    </form>
  );
}
