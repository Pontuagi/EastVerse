import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  background-color: #ffffff;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  flex: 1;
`;

export const InnerContainer = styled.View`
  padding: 20px;
  width: 100%;
  max-width: 400px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 24px;
`;

export const InputContainer = styled.View`
  gap: 16px;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 12px;
  border-width: 1px;
  border-color: #d1d5db;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 16px;
  color: #000000;
`;

export const LinksContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const LinkText = styled.Text`
  color: #4f46e5;
  font-size: 14px;
`;

export const SignInButton = styled.Pressable`
  background-color: #4f46e5;
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 12px;

  /* Active state */
  &:active {
    opacity: 0.8;
  }
`;

export const GoogleButton = styled.Pressable`
  background-color: #ffffff;
  border-width: 1px;
  border-color: #d1d5db;
  border-radius: 8px;
  padding: 14px;

  /* Active state */
  &:active {
    opacity: 0.8;
  }
`;

export const ButtonText = styled.Text`
  color: ${(props: { variant: 'primary' | 'google' }) =>
    props.variant === 'primary' ? '#ffffff' : '#374151'};
  text-align: center;
  font-weight: 600;
  font-size: 16px;
`;