import React from 'react';
import { View, Text } from 'react-native';
import { Statistic } from '../constants/appData';

interface StatisticCardProps {
  statistic: Statistic;
  className?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  statistic,
  className = '',
}) => {
  return (
    <View className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${className}`}>
      <View className="items-center">
        <Text className="text-3xl mb-2">{statistic.icon}</Text>
        <Text className="text-3xl font-bold text-blue-600 mb-1">
          {statistic.value}
        </Text>
        <Text className="text-gray-600 text-center font-medium">
          {statistic.label}
        </Text>
      </View>
    </View>
  );
};
