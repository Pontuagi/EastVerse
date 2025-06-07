import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    // Add your sign up logic here
    console.log('Sign up with:', { name, email, country, password });
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
      <ScrollView className="flex-1">
        <View className="p-5">
          {/* Header */}
          <View className="flex-row items-center mb-6">
            <Pressable onPress={() => router.back()} className="p-2">
              <Ionicons name="chevron-back" size={24} color="#000" />
            </Pressable>
            <Text className="text-2xl font-bold text-center flex-1 mr-8">Sign Up</Text>
          </View>

          {/* Form */}
          <View className="space-y-4">
            <View className="bg-gray-50 rounded-lg flex-row items-center px-4 py-3">
              <Ionicons name="person-outline" size={20} color="#666" />
              <TextInput
                className="flex-1 ml-2 text-base"
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View className="bg-gray-50 rounded-lg flex-row items-center px-4 py-3">
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

            <View className="bg-gray-50 rounded-lg flex-row items-center px-4 py-3">
              <Ionicons name="location-outline" size={20} color="#666" />
              <TextInput
                className="flex-1 ml-2 text-base"
                placeholder="Choose your Country"
                value={country}
                onChangeText={setCountry}
              />
            </View>

            <View className="bg-gray-50 rounded-lg flex-row items-center px-4 py-3">
              <Ionicons name="lock-closed-outline" size={20} color="#666" />
              <TextInput
                className="flex-1 ml-2 text-base"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#666" />
              </Pressable>
            </View>

            {/* Password Requirements */}
            <View className="space-y-1">
              <View className="flex-row items-center">
                <Ionicons 
                  name={password.length >= 8 ? "checkmark-circle" : "close-circle"} 
                  size={16} 
                  color={password.length >= 8 ? "#4CAF50" : "#F44336"} 
                />
                <Text className="ml-2 text-sm text-gray-600">At least 8 characters</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons 
                  name={/[A-Z]/.test(password) && /[a-z]/.test(password) ? "checkmark-circle" : "close-circle"} 
                  size={16} 
                  color={/[A-Z]/.test(password) && /[a-z]/.test(password) ? "#4CAF50" : "#F44336"} 
                />
                <Text className="ml-2 text-sm text-gray-600">At least uppercase & lowercase letters</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons 
                  name={/\d/.test(password) ? "checkmark-circle" : "close-circle"} 
                  size={16} 
                  color={/\d/.test(password) ? "#4CAF50" : "#F44336"} 
                />
                <Text className="ml-2 text-sm text-gray-600">At least a digit e.g 1,2,3</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons 
                  name={/[!@#$%^&*]/.test(password) ? "checkmark-circle" : "close-circle"} 
                  size={16} 
                  color={/[!@#$%^&*]/.test(password) ? "#4CAF50" : "#F44336"} 
                />
                <Text className="ml-2 text-sm text-gray-600">At least special character e.g !@#</Text>
              </View>
            </View>

            {/* Terms and Conditions */}
            <View className="flex-row items-start mt-4">
              <Pressable 
                onPress={() => setAgreeToTerms(!agreeToTerms)}
                className="mt-1"
              >
                <View className={`w-5 h-5 border rounded ${agreeToTerms ? 'bg-blue-500 border-blue-500' : 'border-gray-300'} items-center justify-center`}>
                  {agreeToTerms && <Ionicons name="checkmark" size={16} color="white" />}
                </View>
              </Pressable>
              <Text className="ml-2 text-sm text-gray-600">
                I agree to the anexnexare{' '}
                <Text className="text-blue-500">Terms of Service</Text> and{' '}
                <Text className="text-blue-500">Privacy Policy</Text>
              </Text>
            </View>

            {/* Sign Up Button */}
            <Pressable 
              onPress={handleSignUp}
              className="bg-blue-500 rounded-lg py-3.5 mt-4"
            >
              <Text className="text-white text-center font-semibold text-lg">
                Sign Up
              </Text>
            </Pressable>

            {/* Already have account */}
            <View className="flex-row justify-center items-center mt-4">
              <Text className="text-gray-600">Don't have an account?{' '}</Text>
              <Link href="./login" className="text-blue-500 font-semibold">
                Sign In
              </Link>
            </View>

            {/* Google Sign In */}
            <Pressable 
              onPress={handleGoogleSignIn}
              className="flex-row items-center justify-center border border-gray-300 rounded-lg py-3 mt-4"
            >
              <Ionicons name="logo-google" size={20} color="#666" />
              <Text className="ml-2 text-gray-700 font-semibold">
                Sign in with Google
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
