import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import {
  Container,
  ScrollContainer,
  InnerContainer,
  HeaderContainer,
  BackButton,
  HeaderText,
  EmailInputContainer,
  EmailInput,
  ResetButton,
  ResetButtonText,
  FooterContainer,
  FooterText,
  SignInLink,
} from './forgot-password.styles';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleRequestReset = () => {
    // Add your password reset logic here
    console.log('Password reset requested for:', email);
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
            <HeaderText>Forgot Password?</HeaderText>
          </HeaderContainer>

          {/* Email Input */}
          <EmailInputContainer>
            <Ionicons name="mail-outline" size={20} color="#666" />
            <EmailInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </EmailInputContainer>

          {/* Request Reset Button */}
          <ResetButton onPress={handleRequestReset}>
            <ResetButtonText>Request Reset</ResetButtonText>
          </ResetButton>

          {/* Remember Password Link */}
          <FooterContainer>
            <FooterText>Remembered Password? </FooterText>
            <Link href="./login" asChild>
              <SignInLink>Sign In</SignInLink>
            </Link>
          </FooterContainer>
        </InnerContainer>
      </ScrollContainer>
    </Container>
  );
}