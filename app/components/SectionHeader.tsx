import React from 'react';
import { View, Text } from 'react-native';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = '',
  alignment = 'center',
}) => {
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <View className={`mb-6 ${className}`}>
      <Text className={`text-3xl font-bold text-gray-800 ${alignmentStyles[alignment]} mb-2`}>
        {title}
      </Text>
      {subtitle && (
        <Text className={`text-lg text-gray-600 ${alignmentStyles[alignment]} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};
