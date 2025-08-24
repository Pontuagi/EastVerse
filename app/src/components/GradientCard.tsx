import React from 'react';
import { View, Dimensions, Platform } from 'react-native';

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
  const { width } = Dimensions.get('window');
  const isWeb = width > 768;
  
  // For better mobile compatibility, use solid color fallback on native platforms
  const backgroundClass = Platform.OS === 'web' 
    ? `bg-gradient-to-br ${colors.join(' ')}` 
    : 'bg-blue-600';
    
  const baseStyles = `${backgroundClass} rounded-2xl shadow-2xl`;
  const paddingStyles = isWeb ? 'p-12' : 'p-8';
  const marginStyles = isWeb ? 'mx-4' : 'mx-2';
  
  return (
    <View className={`${baseStyles} ${paddingStyles} ${marginStyles} ${className}`}>
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
