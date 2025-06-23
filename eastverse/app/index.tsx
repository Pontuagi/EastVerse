import React from "react";
import { ScrollView, View } from "react-native";
import { Link } from "expo-router";
import styled from "styled-components/native";

// Styled Components
const Container = styled.ScrollView`
  flex: 1;
  background-color: #f0f9ff;
`;

const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
  min-height: 100%;
`;

const HeaderCard = styled.View`
  background-color: white;
  shadow-color: #000;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.15;
  shadow-radius: 20px;
  elevation: 10;
  border-radius: 24px;
  padding: 32px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 400px;
  border-width: 1px;
  border-color: #f3f4f6;
`;

const LogoSection = styled.View`
  align-items: center;
  margin-bottom: 24px;
`;

const LogoCircle = styled.View`
  width: 64px;
  height: 64px;
  background-color: #4f46e5;
  border-radius: 32px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const MainTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
`;

const Subtitle = styled.Text`
  color: #6b7280;
  text-align: center;
  margin-top: 8px;
  font-size: 16px;
`;

const FeaturesContainer = styled.View`
  margin-bottom: 24px;
`;

const FeatureRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;
interface FeatureDotProps {
  color: string;
}

const FeatureDot = styled.View<FeatureDotProps>`
  width: 8px;
  height: 8px;
  background-color: ${(props: FeatureDotProps) => props.color};
  border-radius: 4px;
  margin-right: 12px;
`;

const FeatureText = styled.Text`
  color: #4b5563;
  font-size: 14px;
`;

const CountriesCard = styled.View`
  background-color: white;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 12px;
  elevation: 5;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 400px;
`;

const CountriesTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 16px;
`;

const CountriesGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const CountryChip = styled.View`
  background-color: #f3f4f6;
  padding: 4px 12px;
  border-radius: 20px;
`;

const CountryText = styled.Text`
  font-size: 12px;
  color: #374151;
`;

const ButtonsContainer = styled.View`
  width: 100%;
  max-width: 400px;
  gap: 16px;
`;

interface StyledPressableProps {
  variant: "primary" | "secondary" | "outline";
}

const StyledPressable = styled.Pressable`
  padding: 16px 32px;
  border-radius: 12px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: ${(props: StyledPressableProps) =>
    props.variant === "outline" ? 0.05 : 0.15};
  shadow-radius: 8px;
  elevation: ${(props: StyledPressableProps) =>
    props.variant === "outline" ? 2 : 6};
  background-color: ${(props: StyledPressableProps) => {
    switch (props.variant) {
      case "primary":
        return "#4f46e5";
      case "secondary":
        return "#10b981";
      case "outline":
        return "#ffffff";
      default:
        return "#4f46e5";
    }
  }};
  border-width: ${(props: StyledPressableProps) =>
    props.variant === "outline" ? 2 : 0}px;
  border-color: ${(props: StyledPressableProps) =>
    props.variant === "outline" ? "#d1d5db" : "transparent"};
`;

interface ButtonTextProps {
  variant: "primary" | "secondary" | "outline";
}

const ButtonText = styled.Text`
  color: ${(props: ButtonTextProps) =>
    props.variant === "outline" ? "#374151" : "#ffffff"};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const StatsCard = styled.View`
  background-color: #8b5cf6;
  border-radius: 16px;
  padding: 24px;
  margin-top: 24px;
  width: 100%;
  max-width: 400px;
`;

const StatsTitle = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const StatsRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const StatItem = styled.View`
  align-items: center;
`;

const StatNumber = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const StatLabel = styled.Text`
  color: #c4b5fd;
  font-size: 14px;
`;

const Footer = styled.View`
  margin-top: 32px;
  margin-bottom: 16px;
`;

const FooterText = styled.Text`
  color: #9ca3af;
  text-align: center;
  font-size: 14px;
`;

// Updated EAC countries list
const countries = [
  "🇰🇪 Kenya",
  "🇺🇬 Uganda",
  "🇹🇿 Tanzania",
  "🇷🇼 Rwanda",
  "🇧🇮 Burundi",
  "🇸🇸 South Sudan",
  "🇨🇩 DRC",
  "🇸🇴 Somalia",
];

export default function Index() {
  return (
    <Container>
      <ContentWrapper>
        {/* Header Section */}
        <HeaderCard>
          <LogoSection>
            <LogoCircle>
              <LogoText>EV</LogoText>
            </LogoCircle>
            <MainTitle>EastVerse</MainTitle>
            <Subtitle>Connect. Collaborate. Create Together.</Subtitle>
          </LogoSection>

          {/* Feature Highlights */}
          <FeaturesContainer>
            <FeatureRow>
              <FeatureDot color="#10b981" />
              <FeatureText>Real-time collaboration across EAC</FeatureText>
            </FeatureRow>
            <FeatureRow>
              <FeatureDot color="#3b82f6" />
              <FeatureText>Document co-creation & editing</FeatureText>
            </FeatureRow>
            <FeatureRow>
              <FeatureDot color="#8b5cf6" />
              <FeatureText>Group chats & brainstorming</FeatureText>
            </FeatureRow>
          </FeaturesContainer>
        </HeaderCard>

        {/* EAC Countries Section */}
        <CountriesCard>
          <CountriesTitle>🌍 East African Community</CountriesTitle>
          <CountriesGrid>
            {countries.map((country, index) => (
              <CountryChip key={index}>
                <CountryText>{country}</CountryText>
              </CountryChip>
            ))}
          </CountriesGrid>
        </CountriesCard>

        {/* Action Buttons */}
        <ButtonsContainer>
          <Link href="/(auth)/login" asChild>
            <StyledPressable variant="primary">
              <ButtonText variant="primary">Sign In to Collaborate</ButtonText>
            </StyledPressable>
          </Link>

          <Link href="/(auth)/register" asChild>
            <StyledPressable variant="secondary">
              <ButtonText variant="secondary">Join the Community</ButtonText>
            </StyledPressable>
          </Link>

          <Link href="/demo" asChild>
            <StyledPressable variant="outline">
              <ButtonText variant="outline">Explore as Guest</ButtonText>
            </StyledPressable>
          </Link>
        </ButtonsContainer>

        {/* Stats Section */}
        <StatsCard>
          <StatsTitle>Platform Impact</StatsTitle>
          <StatsRow>
            <StatItem>
              <StatNumber>12K+</StatNumber>
              <StatLabel>Active Users</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>350+</StatNumber>
              <StatLabel>Projects</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>8</StatNumber>
              <StatLabel>Countries</StatLabel>
            </StatItem>
          </StatsRow>
        </StatsCard>

        {/* Footer */}
        <Footer>
          <FooterText>Empowering East African collaboration since 2024</FooterText>
        </Footer>
      </ContentWrapper>
    </Container>
  );
}