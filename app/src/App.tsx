import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { eacCountries, EACCountry } from './constants/eacCountries';
import { features, statistics, testimonials } from './constants/appData';
import {
  Layout,
  Logo,
  Button,
  Card,
  CountryCard,
  FeatureCard,
  StatisticCard,
  SectionHeader,
  InputField,
  HeroGradient,
  GradientCard,
  TestimonialCard,
} from './components';
import '../global.css';

const { width } = Dimensions.get('window');
const isWeb = width > 768;

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<EACCountry | null>(null);

  const resetForms = () => {
    setEmail('');
    setPassword('');
    setName('');
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleCountryPress = (country: EACCountry) => {
    setSelectedCountry(country);
    // Add logic here for country details or navigation
    console.log(`Selected country: ${country.name}`);
  };

  if (showLogin || showSignup) {
    return (
      <Layout className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <View className={`flex-1 justify-center ${isWeb ? 'max-w-md mx-auto' : ''}`}>
          <Card className="relative">
            <TouchableOpacity 
              onPress={resetForms}
              className="absolute top-2 left-2 p-2 rounded-full bg-gray-100"
            >
              <Text className="text-xl text-gray-600">←</Text>
            </TouchableOpacity>
            
            <View className="items-center mb-6 pt-4">
              <Logo size="medium" />
              <Text className="text-2xl font-bold text-gray-800 mt-4">
                {showLogin ? 'Welcome Back' : 'Join EastVerse'}
              </Text>
              <Text className="text-gray-600 text-center mt-2 text-sm">
                {showLogin 
                  ? 'Sign in to continue your journey' 
                  : 'Be part of the East African community'}
              </Text>
            </View>
            
            {showSignup && (
              <InputField
                label="Full Name"
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
              />
            )}
            
            <InputField
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <InputField
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
            />
            
            <Button
              title={showLogin ? 'Sign In' : 'Create Account'}
              onPress={() => {
                const action = showLogin ? 'Login' : 'Signup';
                console.log(action, { name, email, password });
              }}
              className="mb-4"
            />
            
            <TouchableOpacity
              onPress={() => {
                setShowLogin(!showLogin);
                setShowSignup(!showSignup);
              }}
            >
              <Text className="text-blue-600 text-center text-sm">
                {showLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <HeroGradient className="rounded-2xl mb-8">
        <View className="items-center py-16 px-4">
          <Logo size="large" />
          <Text className={`${isWeb ? 'text-5xl' : 'text-4xl'} font-bold text-gray-800 text-center mt-6 mb-4`}>
            Welcome to EastVerse
          </Text>
          <Text className={`${isWeb ? 'text-xl' : 'text-lg'} text-gray-600 text-center max-w-3xl mb-8 leading-relaxed`}>
            Building bridges across East Africa through unity, innovation, and shared prosperity. 
            Join our community working towards a brighter future for all.
          </Text>
          
          <View className={`${isWeb ? 'flex-row' : 'flex-col'} gap-4 mb-8`}>
            <Button
              title="Join the Movement"
              onPress={() => setShowSignup(true)}
              variant="secondary"
              size="large"
            />
            <Button
              title="Sign In"
              onPress={() => setShowLogin(true)}
              variant="outline"
              size="large"
            />
          </View>
        </View>
      </HeroGradient>

      {/* Statistics Section */}
      <View className="py-8">
        <SectionHeader 
          title="East Africa by Numbers"
          subtitle="Discover the scale and diversity of our beautiful region"
        />
        <View className={`${isWeb ? 'grid grid-cols-4 gap-6' : 'flex-row flex-wrap justify-between'}`}>
          {statistics.map((stat, index) => (
            <StatisticCard 
              key={index} 
              statistic={stat} 
              className={`${isWeb ? '' : 'w-[48%] mb-4'}`}
            />
          ))}
        </View>
      </View>

      {/* EAC Countries Section */}
      <View className="py-8">
        <SectionHeader 
          title="East African Community"
          subtitle="Eight nations united by shared values, diverse cultures, and common goals"
        />
        <View className={`${isWeb ? 'grid grid-cols-4 gap-6' : 'flex-row flex-wrap justify-between'}`}>
          {eacCountries.map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              onPress={handleCountryPress}
              className={`${isWeb ? '' : 'w-[48%] mb-4'}`}
            />
          ))}
        </View>
      </View>

      {/* Features Section */}
      <View className="py-8">
        <SectionHeader 
          title="Our Mission"
          subtitle="Working together to create a prosperous and united East Africa"
        />
        <View className={`${isWeb ? 'grid grid-cols-3 gap-6' : 'gap-6'}`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`${isWeb ? '' : 'mb-4'}`}
            />
          ))}
        </View>
      </View>

      {/* Testimonials Section */}
      <View className="py-8">
        <SectionHeader 
          title="Voices of Change"
          subtitle="Hear from East Africans who are making a difference in their communities"
        />
        <View className={`${isWeb ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'gap-6'}`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              country={testimonial.country}
              avatar={testimonial.avatar}
              className={`${isWeb ? '' : 'mb-4'}`}
            />
          ))}
        </View>
      </View>

      {/* Call to Action Section */}
      <View className={`${isWeb ? 'py-12' : 'py-8'} ${isWeb ? 'px-0' : 'px-2'}`}>
        <GradientCard className={`${isWeb ? 'mx-4' : 'mx-0'} min-h-[280px]`}>
          <View className="items-center justify-center flex-1">
            <Text className={`${isWeb ? 'text-4xl' : 'text-3xl'} font-bold text-black mb-6 text-center px-4`}>
              Ready to Make a Difference?
            </Text>
            <Text className={`text-black text-center mb-8 ${isWeb ? 'text-xl max-w-3xl' : 'text-lg px-4'} leading-relaxed opacity-90`}>
              Join thousands of East Africans who are already part of this movement. 
              Together, we can build a stronger, more prosperous region for future generations.
            </Text>
            <TouchableOpacity
              onPress={() => setShowSignup(true)}
              className={`bg-white rounded-xl ${isWeb ? 'px-10 py-5' : 'px-8 py-4'} shadow-lg elevation-8`}
              activeOpacity={0.8}
            >
              <Text className={`text-blue-600 font-bold ${isWeb ? 'text-xl' : 'text-lg'}`}>
                Take the Pledge Today
              </Text>
            </TouchableOpacity>
          </View>
        </GradientCard>
      </View>

      {/* Footer */}
      <View className="py-8 border-t border-gray-200 mt-8">
        <View className="items-center">
          <Logo size="small" />
          <Text className="text-gray-600 text-center mt-4 text-sm">
            © 2025 EastVerse. Building a united East Africa, one connection at a time.
          </Text>
        </View>
      </View>
    </Layout>
  );
}