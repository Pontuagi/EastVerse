import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EACCountry } from '../constants/eacCountries';

interface CountryCardProps {
  country: EACCountry;
  onPress?: (country: EACCountry) => void;
  showDetails?: boolean;
  className?: string;
}

export const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onPress,
  showDetails = true,
  className = '',
}) => {
  const CardWrapper = onPress ? TouchableOpacity : View;

  return (
    <CardWrapper
      className={`bg-white rounded-xl p-4 shadow-lg border border-gray-100 ${className}`}
      onPress={onPress ? () => onPress(country) : undefined}
      activeOpacity={onPress ? 0.8 : 1}
    >
      <View className="items-center">
        <Text className="text-4xl mb-3">{country.flag}</Text>
        <Text className="text-lg font-bold text-gray-800 text-center mb-1">
          {country.name}
        </Text>
        {showDetails && (
          <Text className="text-sm text-gray-600 text-center">
            {country.capital}
          </Text>
        )}
      </View>
      {onPress && (
        <View className="mt-3 pt-3 border-t border-gray-100">
          <Text className="text-blue-600 text-center text-sm font-medium">
            Learn More
          </Text>
        </View>
      )}
    </CardWrapper>
  );
};
