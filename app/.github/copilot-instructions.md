# EastVerse Copilot Instructions

## Project Architecture

**Tech Stack**: React Native + Expo + TypeScript + NativeWind (Tailwind CSS)
- **Entry Point**: `App.tsx` - Single-page landing app with conditional login/signup views
- **Components**: Modular component library in `components/` with barrel exports via `index.ts`
- **Data**: Static content in `constants/` - East African countries and app content
- **Styling**: NativeWind for cross-platform Tailwind CSS classes

## Key Patterns

### Responsive Design Pattern
```tsx
const { width } = Dimensions.get('window');
const isWeb = width > 768;
// Use isWeb conditional for layout: grid vs flex, different spacing
className={`${isWeb ? 'grid grid-cols-3 gap-6' : 'gap-6'}`}
```

### Component Structure
- **Props Interface**: Always export TypeScript interfaces for props
- **Default Props**: Use destructuring with defaults: `variant = 'primary'`
- **Conditional Styling**: Use template literals for dynamic classes: `${base} ${variants[variant]}`
- **Platform Adaptation**: Components handle both mobile and web layouts internally

### Component Variants System
```tsx
const variants = {
  primary: 'bg-blue-600 shadow-lg',
  secondary: 'bg-green-600 shadow-lg', 
  outline: 'border-2 border-blue-600 bg-transparent',
};
```

## Development Workflows

### Scripts
- `npm start` - Expo dev server (scan QR for mobile)
- `npm run web` - Web development at localhost:19006
- `npm run lint` - ESLint + Prettier check
- `npm run format` - Auto-fix linting and formatting

### Component Creation Pattern
1. Create in `components/ComponentName.tsx`
2. Export interface and component with React.FC
3. Add to `components/index.ts` barrel export
4. Import from `'./components'` using named imports

### Styling Conventions
- **Color Palette**: `blue-600` (primary), `green-600` (secondary), gray scale for text
- **Spacing**: Consistent padding (`px-4`, `py-6`) and margins (`mb-4`, `mt-6`)
- **Responsive**: `max-w-6xl mx-auto` for web containers, `px-4` for mobile
- **Shadows**: `shadow-lg` for elevated components, `shadow-xl` for hero elements

## Data and Content

### Static Data Pattern
```tsx
// constants/appData.ts - centralized content with TypeScript interfaces
export interface Feature {
  icon: string;    // Emoji icons
  title: string;
  description: string;
}
```

### East Africa Focus
- EAC Countries: 8 member countries with flags, names, capitals
- Cultural sensitivity: Testimonials use appropriate names and avatars
- Regional themes: Unity, collaboration, cultural exchange

## Critical Files
- `App.tsx` - Main app logic and state management
- `components/Layout.tsx` - Responsive layout wrapper pattern  
- `components/Button.tsx` - Variant system reference implementation
- `constants/eacCountries.ts` - Core regional data
- `tailwind.config.js` - NativeWind setup (content paths important)

## Cross-Platform Considerations
- Use `TouchableOpacity` not `button` for interactive elements
- `View` instead of `div`, `Text` instead of `p`/`h1`
- Import platform components from `react-native`, not `react-native-web`
- Test responsive behavior with `Dimensions.get('window')`
