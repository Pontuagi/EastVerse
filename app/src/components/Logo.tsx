import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  onPress?: () => void;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  showText = true,
  onPress,
  className = '',
}) => {
  const sizes = {
    small: { container: 'w-8 h-8', text: 'text-sm' },
    medium: { container: 'w-16 h-16', text: 'text-2xl' },
    large: { container: 'w-20 h-20', text: 'text-3xl' },
  };

  const textSizes = {
    small: 'text-xl',
    medium: 'text-3xl',
    large: 'text-4xl',
  };

  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      onPress={onPress}
      className={`items-center ${className}`}
      activeOpacity={onPress ? 0.8 : 1}
    >
      <View className={`${sizes[size].container} bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg mb-3`}>
        <Text className={`text-white font-bold ${sizes[size].text}`}>EV</Text>
      </View>
      {showText && (
        <Text className={`font-bold text-gray-800 ${textSizes[size]} tracking-wider`}>
          EASTVERSE
        </Text>
      )}
    </Wrapper>
  );
};
