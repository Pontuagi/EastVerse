import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Add your login logic here
    console.log('Login attempt with:', { email, password });
  };

  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    console.log('Google sign-in attempted');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        <View className="p-5 w-full max-w-[400px] self-center">
          <Text className="text-2xl font-bold text-gray-900 text-center mb-6">
            Sign in
          </Text>
          
          <View className="space-y-4 mb-6">
            <TextInput
              className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white text-base"
              placeholder="Email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              placeholderTextColor="#9ca3af"
            />
            
            <TextInput
              className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white text-base"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <View className="flex-row justify-between mb-6">
            <Link href="./register" className="text-indigo-600 text-sm">
              Register new account
            </Link>
            <Link href="./forgot-password" className="text-indigo-600 text-sm">
              Forgot password?
            </Link>
          </View>

          <Pressable 
            className="bg-indigo-600 rounded-lg py-3.5 mb-3 active:opacity-80"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center font-semibold text-base">
              Sign in
            </Text>
          </Pressable>

          <Pressable 
            className="bg-white border border-gray-300 rounded-lg py-3.5 active:opacity-80"
            onPress={handleGoogleSignIn}
          >
            <Text className="text-gray-700 text-center font-semibold text-base">
              Sign in with Google
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
