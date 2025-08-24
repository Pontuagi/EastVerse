import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  className = '',
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayValue, setDisplayValue] = React.useState('0');

  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0;
    
    Animated.timing(animatedValue, {
      toValue: numericValue,
      duration,
      useNativeDriver: false,
    }).start();

    const listener = animatedValue.addListener(({ value: animValue }) => {
      const currentValue = Math.floor(animValue);
      if (value.includes('M')) {
        setDisplayValue(`${currentValue}M+`);
      } else if (value.includes('K')) {
        setDisplayValue(`${currentValue}K+`);
      } else if (value.includes('+')) {
        setDisplayValue(`${currentValue}+`);
      } else {
        setDisplayValue(currentValue.toString());
      }
    });

    return () => {
      animatedValue.removeListener(listener);
    };
  }, [value, duration]);

  return (
    <Text className={`text-3xl font-bold text-blue-600 ${className}`}>
      {displayValue}
    </Text>
  );
};
