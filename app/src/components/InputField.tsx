import React from 'react';
import { View, Text, TextInput } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  className?: string;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  className = '',
  error,
}) => {
  return (
    <View className={`mb-4 ${className}`}>
      <Text className="text-gray-700 mb-2 font-medium text-base">{label}</Text>
      <TextInput
        className={`border rounded-lg px-4 py-3 text-gray-800 text-base ${
          error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
        } focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholderTextColor="#9CA3AF"
      />
      {error && (
        <Text className="text-red-500 text-sm mt-1 ml-1">{error}</Text>
      )}
    </View>
  );
};
