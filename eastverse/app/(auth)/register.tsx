import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import {
  Container,
  ScrollContainer,
  InnerContainer,
  HeaderContainer,
  BackButton,
  HeaderText,
  FormContainer,
  InputContainer,
  Input,
  CountryPicker,
  PasswordToggle,
  PasswordRequirementsContainer,
  RequirementRow,
  RequirementText,
  TermsContainer,
  CheckboxButton,
  Checkbox,
  TermsText,
  TermsLink,
  SignUpButton,
  ButtonText,
  FooterContainer,
  FooterText,
  SignInLink,
  GoogleButton,
  GoogleButtonText,
} from './register.styles';

// List of EAC countries plus "Others"
const countries = [
  'Kenya',
  'Uganda',
  'Tanzania',
  'Rwanda',
  'Burundi',
  'South Sudan',
  'DRC',
  'Somalia',
  'Others',
];

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    console.log('Sign up with:', { name, email, country, password });
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign-in attempted');
  };

  return (
    <Container>
      <ScrollContainer>
        <InnerContainer>
          {/* Header */}
          <HeaderContainer>
            <BackButton onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </BackButton>
            <HeaderText>Sign Up</HeaderText>
          </HeaderContainer>

          {/* Form */}
          <FormContainer>
            <InputContainer>
              <Ionicons name="person-outline" size={20} color="#666" />
              <Input
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                hasValue={!!name}
              />
            </InputContainer>

            <InputContainer>
              <Ionicons name="mail-outline" size={20} color="#666" />
              <Input
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                hasValue={!!email}
              />
            </InputContainer>

            <InputContainer>
              <Ionicons name="location-outline" size={20} color="#666" />
              <CountryPicker
                selectedValue={country}
                onValueChange={(value: string) => setCountry(value)}
              >
                <Picker.Item label="Choose your Country" value="" />
                {countries.map((country) => (
                  <Picker.Item key={country} label={country} value={country} />
                ))}
              </CountryPicker>
            </InputContainer>

            <InputContainer>
              <Ionicons name="lock-closed-outline" size={20} color="#666" />
              <Input
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                hasValue={!!password}
              />
              <PasswordToggle onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={20}
                  color="#666"
                />
              </PasswordToggle>
            </InputContainer>

            {/* Password Requirements */}
            <PasswordRequirementsContainer>
              <RequirementRow>
                <Ionicons
                  name={password.length >= 8 ? 'checkmark-circle' : 'close-circle'}
                  size={16}
                  color={password.length >= 8 ? '#4CAF50' : '#F44336'}
                />
                <RequirementText>At least 8 characters</RequirementText>
              </RequirementRow>
              <RequirementRow>
                <Ionicons
                  name={
                    /[A-Z]/.test(password) && /[a-z]/.test(password)
                      ? 'checkmark-circle'
                      : 'close-circle'
                  }
                  size={16}
                  color={
                    /[A-Z]/.test(password) && /[a-z]/.test(password)
                      ? '#4CAF50'
                      : '#F44336'
                  }
                />
                <RequirementText>
                  At least uppercase & lowercase letters
                </RequirementText>
              </RequirementRow>
              <RequirementRow>
                <Ionicons
                  name={/\d/.test(password) ? 'checkmark-circle' : 'close-circle'}
                  size={16}
                  color={/\d/.test(password) ? '#4CAF50' : '#F44336'}
                />
                <RequirementText>At least a digit e.g 1,2,3</RequirementText>
              </RequirementRow>
              <RequirementRow>
                <Ionicons
                  name={
                    /[!@#$%^&*]/.test(password)
                      ? 'checkmark-circle'
                      : 'close-circle'
                  }
                  size={16}
                  color={/[!@#$%^&*]/.test(password) ? '#4CAF50' : '#F44336'}
                />
                <RequirementText>
                  At least special character e.g !@#
                </RequirementText>
              </RequirementRow>
            </PasswordRequirementsContainer>

            {/* Terms and Conditions */}
            <TermsContainer>
              <CheckboxButton onPress={() => setAgreeToTerms(!agreeToTerms)}>
                <Checkbox checked={agreeToTerms}>
                  {agreeToTerms && (
                    <Ionicons name="checkmark" size={16} color="white" />
                  )}
                </Checkbox>
              </CheckboxButton>
              <TermsText>
                I agree to the EastVerse{' '}
                <TermsLink>Terms of Service</TermsLink> and{' '}
                <TermsLink>Privacy Policy</TermsLink>
              </TermsText>
            </TermsContainer>

            {/* Sign Up Button */}
            <SignUpButton onPress={handleSignUp}>
              <ButtonText>Sign Up</ButtonText>
            </SignUpButton>

            {/* Already have account */}
            <FooterContainer>
              <FooterText>Don't have an account? </FooterText>
              <Link href="./login" asChild>
                <SignInLink>Sign In</SignInLink>
              </Link>
            </FooterContainer>

            {/* Google Sign In */}
            <GoogleButton onPress={handleGoogleSignIn}>
              <Ionicons name="logo-google" size={20} color="#666" />
              <GoogleButtonText>Sign in with Google</GoogleButtonText>
            </GoogleButton>
          </FormContainer>
        </InnerContainer>
      </ScrollContainer>
    </Container>
  );
}