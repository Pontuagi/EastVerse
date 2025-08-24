import React from 'react';
import { View, Text } from 'react-native';

interface GradientCardProps {
  children: React.ReactNode;
  colors?: string[];
  className?: string;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  children,
  colors = ['from-blue-600', 'to-green-600'],
  className = '',
}) => {
  const gradientClass = `bg-gradient-to-br ${colors.join(' ')}`;
  
  return (
    <View className={`${gradientClass} rounded-xl p-6 shadow-xl ${className}`}>
      {children}
    </View>
  );
};

interface HeroGradientProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroGradient: React.FC<HeroGradientProps> = ({
  children,
  className = '',
}) => {
  return (
    <View className={`bg-gradient-to-b from-white via-blue-50 to-indigo-100 ${className}`}>
      {children}
    </View>
  );
};
