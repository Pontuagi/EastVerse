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
  max-width: 500px; /* Set max width to 500px */
  align-self: center; /* Center horizontally */
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
`;

export const BackButton = styled.Pressable`
  padding: 8px;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  flex: 1;
  margin-right: 32px;
  color: #000000;
`;

export const EmailInputContainer = styled.View`
  background-color: #f7f7f7;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 24px;
`;

export const EmailInput = styled.TextInput`
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
  color: #000000;
`;

export const ResetButton = styled.Pressable`
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 14px;
`;

export const ResetButtonText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

export const FooterText = styled.Text`
  color: #4b5563;
  font-size: 16px;
`;

export const SignInLink = styled.Text`
  color: #3b82f6;
  font-weight: 600;
  font-size: 16px;
`;