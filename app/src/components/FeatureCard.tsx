import React from 'react';
import { View, Text } from 'react-native';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <View className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${className}`}>
      <View className="items-center">
        <View className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Text className="text-2xl">{icon}</Text>
        </View>
        <Text className="text-xl font-bold text-gray-800 text-center mb-3">
          {title}
        </Text>
        <Text className="text-gray-600 text-center leading-6">
          {description}
        </Text>
      </View>
    </View>
  );
};
