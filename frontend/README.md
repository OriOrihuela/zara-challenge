# Frontend Application Documentation

## 📋 Table of Contents

1. [Overview](#-overview)
2. [Architecture](#️-architecture)
3. [Getting Started](#-getting-started)
4. [Component Architecture](#-component-architecture)
5. [Styling System](#-styling-system)
6. [Shopping Cart System](#-shopping-cart-system)
7. [Search Functionality](#-search-functionality)
8. [Responsive Design](#-responsive-design)
9. [Accessibility Features](#-accessibility-features)
10. [Animations and Interactions](#-animations-and-interactions)
11. [API Integration](#-api-integration)
12. [Performance Optimization](#-performance-optimization)
13. [Development Tools](#-development-tools)
14. [Mobile Optimization](#-mobile-optimization)
15. [Deployment](#-deployment)
16. [Debugging](#-debugging)
17. [Additional Resources](#-additional-resources)

---

## 🎯 Overview

The frontend is a React 19 application built with TypeScript and Vite, providing a modern, responsive interface for browsing and managing a mobile phone catalog with shopping cart functionality.

## 🏗️ Architecture

### **Technology Stack**

- **Framework**: React 19.1.1
- **Language**: TypeScript 5.9+
- **Build Tool**: Vite 7.1.7
- **Styling**: SCSS with BEM methodology
- **Routing**: React Router DOM 6.21.1
- **State Management**: React Context API
- **Icons**: React SVG 16.3.0
- **HTTP Client**: Axios 1.12.2

### **Project Structure**

```
frontend/
├── 📁 public/                 # Static assets
├── 📁 src/                   # Source code
│   ├── 📁 assets/            # Static assets (SVG icons)
│   ├── 📁 components/        # Reusable UI components
│   ├── 📁 context/           # React Context providers
│   ├── 📁 hooks/             # Custom React hooks
│   ├── 📁 models/            # TypeScript type definitions
│   ├── 📁 pages/             # Page components
│   ├── 📁 services/          # API services
│   ├── 📁 styles/            # SCSS stylesheets
│   ├── 📄 App.tsx            # Main application component
│   └── 📄 main.tsx           # Application entry point
└── 📄 Configuration files
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js >= 18.0.0
- pnpm package manager

### **Installation**

```bash
cd frontend
pnpm install
```

### **Development**

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎨 Component Architecture

### **Page Components**

- **PhoneListPage**: Main catalog with search and grid layout
- **PhoneDetailPage**: Individual phone details with specifications
- **CartPage**: Shopping cart management

### **Reusable Components**

- **PhoneCard**: Grid item for phone display
- **PhoneImage**: Optimized image display
- **PhoneInfo**: Product details and options
- **PhoneSpecs**: Technical specifications
- **SearchBar**: Real-time search functionality
- **SimilarItems**: Related products carousel
- **Layout**: Main application wrapper
- **BackButton**: Navigation component

### **Context Providers**

- **CartContext**: Shopping cart state management
- **SearchContext**: Search functionality and filters

### **Custom Hooks**

- **useCart**: Cart operations and state
- **useSearch**: Search functionality and state

## 🎨 Styling System

### **SCSS Architecture**

```
styles/
├── 📄 variables.scss    # Design tokens and variables
├── 📄 mixins.scss      # Reusable SCSS mixins
├── 📄 base.scss        # Base styles and resets
├── 📄 components.scss  # Component-specific styles
├── 📄 utilities.scss   # Utility classes
└── 📄 main.scss        # Main stylesheet entry
```

### **Design System**

#### **Color Palette**

- **Primary**: Black (#000000)
- **Secondary**: Gray (#666666)
- **Background**: White (#FFFFFF)
- **Light Gray**: #F8F9FA
- **Border**: #DDDDDD

#### **Typography**

- **Font Sizes**: 12px, 14px, 16px, 20px, 24px
- **Font Weights**: 300 (Light), 400 (Regular)
- **Line Height**: 1.5

#### **Spacing System**

- **Base Unit**: 8px
- **Common Spacing**: 8px, 16px, 24px, 32px, 64px
- **Component Padding**: 16px, 24px, 32px

#### **Breakpoints**

```scss
// Mobile first approach
@include mobile {
} // < 768px
@include tablet {
} // 768px - 1024px
@include laptop {
} // 1024px - 1440px
@include desktop {
} // 1440px - 1920px
@include large-desktop {
} // > 1920px
```

### **BEM Methodology**

```scss
// Block
.phone-card {
}

// Element
.phone-card__image {
}
.phone-card__content {
}

// Modifier
.phone-card--featured {
}
.phone-card__image--large {
}
```

## 🛒 Shopping Cart System

### **Cart State Management**

```typescript
interface CartItem {
  id: string;
  phone: PhoneDetail;
  selectedColor: string;
  selectedStorage: string;
  quantity: number;
  price: number;
}
```

### **Cart Operations**

- **Add to Cart**: With color and storage selection
- **Remove Item**: Individual item removal
- **Update Quantity**: Quantity management
- **Clear Cart**: Remove all items
- **Calculate Total**: Price calculation

### **Cart Validation**

- **Required Selections**: Color and storage must be selected
- **Price Calculation**: Dynamic pricing based on storage
- **Item Uniqueness**: Prevent duplicate items

## 🔍 Search Functionality

### **Search Features**

- **Real-time Search**: Debounced input with 300ms delay
- **Search Terms**: Name and brand filtering
- **Results Display**: Live result count
- **Search State**: Persistent search state

### **Search Implementation**

```typescript
interface SearchState {
  searchTerm: string;
  total: number;
  loading: boolean;
}
```

## 📱 Responsive Design

### **Mobile-First Approach**

- **Base Styles**: Mobile-optimized
- **Progressive Enhancement**: Tablet, laptop, desktop
- **Touch-Friendly**: Large touch targets
- **Performance**: Optimized for mobile networks

### **Grid System**

```scss
// Phone list grid
.phone-list__grid {
  display: grid;
  grid-template-columns: 1fr; // Mobile: 1 column

  @include tablet-up {
    grid-template-columns: repeat(2, 1fr); // Tablet: 2 columns
  }

  @include laptop-up {
    grid-template-columns: repeat(3, 1fr); // Laptop: 3 columns
  }

  @include desktop-up {
    grid-template-columns: repeat(4, 1fr); // Desktop: 4 columns
  }

  @include large-desktop-up {
    grid-template-columns: repeat(5, 1fr); // Large: 5 columns
  }
}
```

### **Responsive Components**

- **SearchBar**: Full width on mobile, centered on desktop
- **PhoneCard**: Responsive image sizing
- **CartPage**: Mobile-optimized layout
- **Navigation**: Touch-friendly buttons

## ♿ Accessibility Features

### **Semantic HTML**

- **Navigation**: `<nav>` with proper roles
- **Main Content**: `<main>` with role="main"
- **Sections**: `<section>` with aria-labels
- **Lists**: `<ul>`, `<ol>` for structured content

### **ARIA Support**

- **Labels**: `aria-label` for interactive elements
- **Roles**: `role` attributes for custom components
- **Live Regions**: `aria-live` for dynamic content
- **Described By**: `aria-describedby` for form elements

### **Keyboard Navigation**

- **Tab Order**: Logical tab sequence
- **Focus Management**: Visible focus indicators
- **Keyboard Shortcuts**: Standard keyboard interactions
- **Screen Reader**: Compatible with assistive technologies

### **Focus Management**

```scss
// Focus styles
&:focus {
  outline: 2px solid $color-black;
  outline-offset: 2px;
}

&:focus-visible {
  outline: 2px solid $color-black;
  outline-offset: 2px;
}
```

## 🎭 Animations and Interactions

### **Hover Effects**

- **Phone Cards**: Dark overlay with smooth transition
- **Buttons**: Opacity changes and color transitions
- **Interactive Elements**: Subtle hover feedback

### **Transition System**

```scss
// Smooth transitions
@mixin transition {
  transition: all 0.2s ease;
}

// Hover effects
.phone-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
}
```

### **Loading States**

- **Search**: Loading indicators during API calls
- **Images**: Lazy loading with placeholders
- **Cart**: Loading states for cart operations

## 🔌 API Integration

### **API Client Configuration**

```typescript
// Base configuration
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});
```

### **Service Layer**

- **phoneService**: Product API calls
- **Error Handling**: Graceful error management
- **Type Safety**: TypeScript interfaces
- **Caching**: Request optimization

### **Data Flow**

1. **User Interaction**: Search, click, add to cart
2. **State Update**: Context state management
3. **API Call**: Service layer communication
4. **UI Update**: Component re-rendering
5. **Error Handling**: User feedback

## 🚀 Performance Optimization

### **Code Splitting**

- **Route-based**: Lazy loading of pages
- **Component-based**: Dynamic imports
- **Bundle Optimization**: Tree shaking

### **Image Optimization**

- **Lazy Loading**: `loading="lazy"` attribute
- **Responsive Images**: Multiple sizes
- **Format Optimization**: WebP support
- **Placeholder**: Loading states

### **State Management**

- **Context Optimization**: Minimal re-renders
- **Memoization**: React.memo for components
- **Callback Optimization**: useCallback for functions

## 🔧 Development Tools

### **Build Configuration**

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
```

### **TypeScript Configuration**

- **Strict Mode**: Enabled
- **Path Mapping**: Absolute imports
- **Type Checking**: Comprehensive
- **Declaration Files**: Generated

### **Code Quality**

- **ESLint**: Code quality and style
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **SCSS**: Style linting

## 📱 Mobile Optimization

### **Touch Interactions**

- **Touch Targets**: Minimum 44px size
- **Swipe Gestures**: Horizontal scrolling
- **Pinch Zoom**: Disabled for app-like experience
- **Scroll Behavior**: Smooth scrolling

### **Performance**

- **Bundle Size**: Optimized for mobile
- **Loading Speed**: Fast initial load
- **Memory Usage**: Efficient state management
- **Network**: Optimized API calls

## 🚀 Deployment

### **Production Build**

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### **Environment Configuration**

```typescript
// API endpoint configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

### **Static Hosting**

- **Vite Build**: Optimized static files
- **CDN Ready**: Asset optimization
- **SPA Routing**: History API support
- **Environment Variables**: Build-time configuration

## 🔍 Debugging

### **Development Tools**

- **React DevTools**: Component inspection
- **Redux DevTools**: State management
- **Network Tab**: API call monitoring
- **Console Logging**: Debug information

### **Common Issues**

- **CORS Errors**: Check API configuration
- **Routing Issues**: Verify React Router setup
- **State Updates**: Check Context providers
- **Styling Issues**: Verify SCSS compilation

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [React Router Guide](https://reactrouter.com/en/main)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
