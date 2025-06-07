import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleRequestReset = () => {
    // Add your password reset logic here
    console.log('Password reset requested for:', email);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <View className="p-5">
        {/* Header */}
        <View className="flex-row items-center mb-8">
          <Pressable onPress={() => router.back()} className="p-2">
            <Ionicons name="chevron-back" size={24} color="#000" />
          </Pressable>
          <Text className="text-xl font-semibold text-center flex-1 mr-8">
            Forgot Password?
          </Text>
        </View>

        {/* Email Input */}
        <View className="bg-gray-50 rounded-lg flex-row items-center px-4 py-3 mb-6">
          <Ionicons name="mail-outline" size={20} color="#666" />
          <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Request Reset Button */}
        <Pressable 
          onPress={handleRequestReset}
          className="bg-blue-500 rounded-lg py-3.5"
        >
          <Text className="text-white text-center font-semibold text-lg">
            Request Reset
          </Text>
        </Pressable>

        {/* Remember Password Link */}
        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Remembered Password? </Text>
          <Link href="./login" className="text-blue-500 font-semibold">
            Sign In
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
