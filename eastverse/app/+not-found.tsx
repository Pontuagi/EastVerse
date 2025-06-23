import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
`;

const Message = styled.Text`
  font-size: 20px;
  color: #4b5563;
  margin-bottom: 32px;
  text-align: center;
`;

const HomeButton = styled.View`
  background-color: #4f46e5;
  padding: 12px 24px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`;

export default function NotFoundScreen() {
  return (
    <Container>
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <Link href="/" asChild>
        <HomeButton>
          <ButtonText>Go back home</ButtonText>
        </HomeButton>
      </Link>
    </Container>
  );
}