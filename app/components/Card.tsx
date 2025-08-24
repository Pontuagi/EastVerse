import React from 'react';
import { View, Text } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: 'default' | 'gradient' | 'outlined';
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  className = '',
  variant = 'default',
}) => {
  const getCardStyles = () => {
    const base = 'rounded-xl p-6 shadow-lg';
    const variants = {
      default: 'bg-white',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      outlined: 'bg-white border-2 border-gray-200',
    };
    
    return `${base} ${variants[variant]} ${className}`;
  };

  return (
    <View className={getCardStyles()}>
      {title && (
        <View className="mb-4">
          <Text className="text-xl font-bold text-gray-800 mb-1">{title}</Text>
          {subtitle && (
            <Text className="text-sm text-gray-600">{subtitle}</Text>
          )}
        </View>
      )}
      {children}
    </View>
  );
};
