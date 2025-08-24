import React from 'react';
import { View, Text } from 'react-native';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  country: string;
  avatar: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  title,
  country,
  avatar,
  className = '',
}) => {
  return (
    <View className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${className}`}>
      <Text className="text-gray-600 italic text-base leading-6 mb-4">
        "{quote}"
      </Text>
      <View className="flex-row items-center">
        <Text className="text-3xl mr-3">{avatar}</Text>
        <View className="flex-1">
          <Text className="font-bold text-gray-800 text-base">{author}</Text>
          <Text className="text-gray-600 text-sm">{title}</Text>
          <Text className="text-blue-600 text-sm">{country}</Text>
        </View>
      </View>
    </View>
  );
};
