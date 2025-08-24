import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { eacCountries } from './constants/eacCountries';
import './global.css';
const { width } = Dimensions.get('window');
const isWeb = width > 768;

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const resetForms = () => {
    setEmail('');
    setPassword('');
    setName('');
    setShowLogin(false);
    setShowSignup(false);
  };

  if (showLogin || showSignup) {
    return (
      <View className="flex-1 bg-gray-100">
        <StatusBar style="dark" />
        <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
          <View className={`flex-1 justify-center px-4 py-8 ${isWeb ? 'max-w-lg mx-auto' : ''}`}>
            <View className="bg-white rounded-xl shadow-lg p-6">
              <TouchableOpacity 
                onPress={resetForms}
                className="absolute top-2 left-2 p-2"
              >
                <Text className="text-xl text-gray-600">←</Text>
              </TouchableOpacity>
              
              <View className="items-center mb-6">
                <View className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                  <Text className="text-white text-lg font-bold">EV</Text>
                </View>
                <Text className="text-2xl font-semibold text-gray-800">
                  {showLogin ? 'Sign In' : 'Get Started'}
                </Text>
                <Text className="text-gray-600 text-center mt-1 text-sm">
                  Join the East African Community
                </Text>
              </View>
              
              {showSignup && (
                <View className="mb-4">
                  <Text className="text-gray-700 mb-1 font-medium">Name</Text>
                  <TextInput
                    className="border border-gray-300 rounded-md px-3 py-2 text-gray-800"
                    placeholder="Your full name"
                    value={name}
                    onChangeText={setName}
                  />
                </View>
              )}
              
              <View className="mb-4">
                <Text className="text-gray-700 mb-1 font-medium">Email</Text>
                <TextInput
                  className="border border-gray-300 rounded-md px-3 py-2 text-gray-800"
                  placeholder="Your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              
              <View className="mb-4">
                <Text className="text-gray-700 mb-1 font-medium">Password</Text>
                <TextInput
                  className="border border-gray-300 rounded-md px-3 py-2 text-gray-800"
                  placeholder="Your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
              
              <TouchableOpacity
                onPress={showLogin ? () => console.log('Login:', { email, password }) : () => console.log('Signup:', { name, email, password })}
                className="bg-blue-600 rounded-md py-3 mb-3"
              >
                <Text className="text-white text-center font-semibold">
                  {showLogin ? 'Sign In' : 'Get Started'}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => {
                  setShowLogin(!showLogin);
                  setShowSignup(!showSignup);
                }}
              >
                <Text className="text-blue-600 text-center text-sm">
                  {showLogin ? 'Need an account? Get Started' : 'Already a member? Sign In'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className={`px-4 pt-12 pb-8 ${isWeb ? 'max-w-5xl mx-auto' : ''}`}>
          <View className="items-center mb-6">
            <View className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3">
              <Text className="text-white text-2xl font-bold">EV</Text>
            </View>
            <Text className={`${isWeb ? 'text-4xl' : 'text-3xl'} font-semibold text-gray-800 text-center`}>
              EASTVERSE
            </Text>
            <Text className={`${isWeb ? 'text-lg' : 'text-base'} text-gray-600 text-center mt-2 max-w-2xl`}>
              Connecting East Africa for unity and progress
            </Text>
          </View>
          
          <View className="flex-row justify-center gap-4">
            <TouchableOpacity
              onPress={() => setShowSignup(true)}
              className="bg-green-600 rounded-md py-3 px-6"
            >
              <Text className="text-white font-semibold">Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowLogin(true)}
              className="border border-blue-600 rounded-md py-3 px-6"
            >
              <Text className="text-blue-600 font-semibold">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* EAC Countries Section */}
        <View className={`px-4 mb-8 ${isWeb ? 'max-w-5xl mx-auto' : ''}`}>
          <Text className={`${isWeb ? 'text-3xl' : 'text-2xl'} font-semibold text-gray-800 text-center mb-6`}>
            East African Community
          </Text>
          <View className={`${isWeb ? 'grid grid-cols-4 gap-4' : 'flex flex-row flex-wrap justify-center gap-2'}`}>
            {eacCountries.map((country, index) => (
              <View key={index} className={`bg-white rounded-lg p-4 shadow-md ${isWeb ? '' : 'w-[48%]'}`}>
                <Text className="text-3xl mb-2 text-center">{country.flag}</Text>
                <Text className="text-base font-semibold text-gray-800 text-center">{country.name}</Text>
                <Text className="text-sm text-gray-600 text-center">{country.capital}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View className={`px-4 pb-8 ${isWeb ? 'max-w-4xl mx-auto' : ''}`}>
          <View className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6">
            <Text className={`${isWeb ? 'text-2xl' : 'text-xl'} font-semibold text-white text-center mb-4`}>
              Join the Movement
            </Text>
            <Text className="text-white text-center mb-4 text-sm">
              Take the pledge to support East African unity and progress
            </Text>
            <TouchableOpacity
              onPress={() => setShowSignup(true)}
              className="bg-white rounded-md py-3 px-6 mx-auto w-fit"
            >
              <Text className="text-blue-600 font-semibold">Take the Pledge</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}