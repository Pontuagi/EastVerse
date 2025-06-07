# Expo + Supabase Project Structure

```
eastverse/
├── app/                          # Expo Router pages (file-based routing)
│   ├── (auth)/                   # Auth group routes
│   │   ├── login.tsx            # Login page
│   │   ├── register.tsx         # Registration page
│   │   └── forgot-password.tsx  # Password reset page
│   ├── (tabs)/                  # Tab navigation group
│   │   ├── _layout.tsx          # Tab layout
│   │   ├── index.tsx            # Home/Dashboard page
│   │   ├── profile.tsx          # User profile page
│   │   └── settings.tsx         # Settings page
│   ├── _layout.tsx              # Root layout
│   ├── +not-found.tsx           # 404 page
│   └── index.tsx                # Entry point
│
├── lib/                         # Core utilities and configurations
│   ├── supabase.ts             # Supabase client configuration
│   ├── database.ts             # Database helper functions
│   └── storage.ts              # File storage utilities
│
├── contexts/                    # React contexts
│   ├── AuthContext.tsx         # Authentication context
│   └── ThemeContext.tsx        # Theme context
│
├── components/                  # Reusable UI components
│   ├── ui/                     # Basic UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── auth/                   # Auth-specific components
│   │   ├── LoginForm.tsx
│   │   └── ProtectedRoute.tsx
│   └── common/                 # Common components
│       ├── Header.tsx
│       └── Loading.tsx
│
├── hooks/                      # Custom React hooks
│   ├── useAuth.ts             # Authentication hook
│   ├── useSupabase.ts         # Supabase operations hook
│   └── useStorage.ts          # Storage operations hook
│
├── types/                      # TypeScript type definitions
│   ├── supabase.ts            # Supabase generated types
│   ├── auth.ts                # Authentication types
│   └── database.ts            # Database types
│
├── utils/                      # Utility functions
│   ├── validation.ts          # Form validation
│   ├── formatting.ts          # Data formatting
│   └── constants.ts           # App constants
│
├── services/                   # API service layers
│   ├── auth.ts                # Authentication services
│   ├── user.ts                # User management services
│   └── api.ts                 # General API utilities
│
├── assets/                     # Static assets
│   ├── images/
│   └── fonts/
│
├── supabase/                   # Supabase server functions & config
│   ├── functions/              # Edge Functions (server-side)
│   │   ├── hello/
│   │   │   └── index.ts       # Example edge function
│   │   ├── auth-webhook/
│   │   │   └── index.ts       # Auth webhook handler
│   │   └── send-email/
│   │       └── index.ts       # Email sending function
│   ├── migrations/             # Database migrations
│   │   ├── 20240101000000_initial_schema.sql
│   │   └── 20240102000000_add_profiles.sql
│   ├── seed.sql               # Database seed data
│   └── config.toml            # Supabase configuration
│
├── .env                       # Environment variables
├── .env.example              # Environment variables template
├── app.config.js             # Expo configuration
├── babel.config.js           # Babel configuration
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Key Directories Explained:

### 📱 **app/** - Pages (Expo Router)
- File-based routing system
- Each file becomes a route
- Groups with parentheses for organization
- Layouts for shared UI structure

### 🔧 **lib/** - Core Configuration
- Supabase client setup
- Database connection utilities
- Storage configuration

### 🎯 **contexts/** - State Management
- Authentication state
- Global app state
- Theme management

### 🧩 **components/** - UI Components
- Reusable UI elements
- Feature-specific components
- Common layout components

### 🪝 **hooks/** - Custom Hooks
- Authentication logic
- Database operations
- Reusable stateful logic

### 📊 **services/** - API Layer
- Business logic
- API calls to Supabase
- Data transformation

### 🗄️ **supabase/** - Backend Functions
- **functions/**: Server-side Edge Functions
- **migrations/**: Database schema changes
- **seed.sql**: Initial data setup

## Server Functions (Edge Functions) Examples:

### Authentication Webhook
```typescript
// supabase/functions/auth-webhook/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { record, type } = await req.json()
  
  if (type === 'INSERT') {
    // Create user profile when user signs up
    // Send welcome email
  }
  
  return new Response('OK')
})
```

### Email Service
```typescript
// supabase/functions/send-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { to, subject, body } = await req.json()
  
  // Send email using your preferred service
  // Return success/failure response
})
```

## Environment Setup:

### .env
```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### app.config.js
```javascript
export default {
  expo: {
    name: "eastverse",
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
}
```

This structure provides:
- ✅ Clear separation of concerns
- ✅ Scalable architecture
- ✅ Type safety with TypeScript
- ✅ Server-side functions with Edge Functions
- ✅ Proper state management
- ✅ Reusable components and hooks
