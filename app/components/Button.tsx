import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  const getButtonStyles = () => {
    const base = 'rounded-lg flex items-center justify-center';
    const variants = {
      primary: 'bg-blue-600 shadow-lg',
      secondary: 'bg-green-600 shadow-lg',
      outline: 'border-2 border-blue-600 bg-transparent',
    };
    const sizes = {
      small: 'px-4 py-2',
      medium: 'px-6 py-3',
      large: 'px-8 py-4',
    };
    const disabledStyle = disabled ? 'opacity-50' : '';
    
    return `${base} ${variants[variant]} ${sizes[size]} ${disabledStyle} ${className}`;
  };

  const getTextStyles = () => {
    const base = 'font-semibold';
    const variants = {
      primary: 'text-white',
      secondary: 'text-white',
      outline: className.includes('text-') ? '' : 'text-blue-600',
    };
    const sizes = {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    };
    
    return `${base} ${variants[variant]} ${sizes[size]}`;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={getButtonStyles()}
      activeOpacity={0.8}
    >
      <Text className={getTextStyles()}>{title}</Text>
    </TouchableOpacity>
  );
};
