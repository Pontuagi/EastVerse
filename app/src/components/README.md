# EastVerse Landing Page Components

This directory contains modern, reusable React Native components for the EastVerse landing page.

## Components Overview

### Core UI Components

- **Button**: Customizable button with multiple variants (primary, secondary, outline) and sizes
- **Card**: Flexible container with different variants (default, gradient, outlined)
- **InputField**: Form input with label, validation, and error states
- **Layout**: Main layout wrapper with responsive design support

### Specialized Components

- **Logo**: EastVerse logo component with different sizes and configurations
- **SectionHeader**: Page section headers with title and subtitle
- **CountryCard**: Interactive cards displaying EAC country information
- **FeatureCard**: Cards showcasing app features with icons and descriptions
- **StatisticCard**: Cards displaying key statistics with animated counters
- **TestimonialCard**: User testimonials with avatars and metadata

### Visual Enhancement Components

- **GradientCard**: Cards with gradient backgrounds
- **HeroGradient**: Hero section with gradient background
- **AnimatedCounter**: Animated number counters for statistics

## Usage Examples

```tsx
import { Button, Card, Logo, SectionHeader } from './components';

// Basic button
<Button title="Click me" onPress={handlePress} variant="primary" />

// Logo with different sizes
<Logo size="large" showText={true} />

// Section with header
<SectionHeader 
  title="Welcome" 
  subtitle="This is a subtitle" 
  alignment="center" 
/>
```

## Design System

- **Colors**: Blue and green gradient theme representing East African unity
- **Typography**: Clear hierarchy with semibold headings and regular body text
- **Spacing**: Consistent padding and margins using Tailwind classes
- **Shadows**: Subtle shadows for depth and modern appearance
- **Responsiveness**: Web and mobile optimized layouts

## Features

- **Modern Design**: Clean, contemporary UI following current design trends
- **Responsive**: Works on both mobile and web platforms
- **Accessible**: Proper contrast ratios and touch targets
- **Reusable**: Modular components that can be used across different screens
- **Type Safe**: Full TypeScript support with proper interfaces
- **Customizable**: Props for styling and behavior customization
