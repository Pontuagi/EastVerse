import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showScrollIndicator?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  showScrollIndicator = false,
}) => {
  const { width } = Dimensions.get('window');
  const isWeb = width > 768;

  return (
    <View className={`flex-1 bg-gray-50 ${className}`}>
      <StatusBar style="dark" />
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={showScrollIndicator}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className={`${isWeb ? 'max-w-6xl mx-auto px-6' : 'px-4'} py-6`}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};
