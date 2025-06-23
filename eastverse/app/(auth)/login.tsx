import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Link } from 'expo-router';
import {
  Container,
  ScrollContainer,
  InnerContainer,
  Title,
  InputContainer,
  Input,
  LinksContainer,
  LinkText,
  SignInButton,
  GoogleButton,
  ButtonText,
} from './login.styles';

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
    <Container>
      <ScrollContainer>
        <InnerContainer>
          <Title>Sign in</Title>

          <InputContainer>
            <Input
              placeholder="Email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              placeholderTextColor="#9ca3af"
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              placeholderTextColor="#9ca3af"
            />
          </InputContainer>

          <LinksContainer>
            <Link href="./register" asChild>
              <LinkText>Register new account</LinkText>
            </Link>
            <Link href="./forgot-password" asChild>
              <LinkText>Forgot password?</LinkText>
            </Link>
          </LinksContainer>

          <SignInButton onPress={handleSubmit}>
            <ButtonText variant="primary">Sign in</ButtonText>
          </SignInButton>

          <GoogleButton onPress={handleGoogleSignIn}>
            <ButtonText variant="google">Sign in with Google</ButtonText>
          </GoogleButton>
        </InnerContainer>
      </ScrollContainer>
    </Container>
  );
}