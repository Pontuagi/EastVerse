import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface CheckboxProps {
  checked: boolean;
}

interface InputProps {
  hasValue: boolean;
}

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
  max-width: 600px; /* Increased from 400px */
  align-self: center;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const BackButton = styled.Pressable`
  padding: 8px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  flex: 1;
  margin-right: 32px;
  color: #000000;
`;

export const FormContainer = styled.View`
  gap: 16px;
`;

export const InputContainer = styled.View`
  background-color: #f7f7f7;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 16px; /* Increased padding for taller input */
  height: 60px; /* Fixed height for consistency */
`;

interface InputStyledProps {
    hasValue: boolean;
}

export const Input = styled.TextInput<InputStyledProps>`
    flex: 1;
    margin-left: 8px;
    font-size: 16px;
    color: #000000;
    text-align-vertical: ${(props: InputStyledProps) => (props.hasValue ? 'top' : 'center')};
`;

export const CountryPicker = styled(Picker)`
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
  color: #000000;
`;

export const PasswordToggle = styled.Pressable`
  padding: 4px;
`;

export const PasswordRequirementsContainer = styled.View`
  gap: 4px;
`;

export const RequirementRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RequirementText = styled.Text`
  margin-left: 8px;
  font-size: 14px;
  color: #4b5563;
`;

export const TermsContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 16px;
`;

export const CheckboxButton = styled.Pressable`
  margin-top: 4px;
`;

interface CheckboxStyledProps {
    checked: boolean;
}

export const Checkbox = styled.View<CheckboxStyledProps>`
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-color: ${(props: CheckboxStyledProps) => (props.checked ? '#3b82f6' : '#d1d5db')};
    background-color: ${(props: CheckboxStyledProps) => (props.checked ? '#3b82f6' : 'transparent')};
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const TermsText = styled.Text`
  margin-left: 8px;
  font-size: 14px;
  color: #4b5563;
`;

export const TermsLink = styled.Text`
  color: #3b82f6;
  font-size: 14px;
`;

export const SignUpButton = styled.Pressable`
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 14px;
  margin-top: 16px;

  &:active {
    opacity: 0.8;
  }
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

export const GoogleButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #d1d5db;
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;

  &:active {
    opacity: 0.8;
  }
`;

export const GoogleButtonText = styled.Text`
  margin-left: 8px;
  color: #374151;
  font-weight: 600;
  font-size: 16px;
`;