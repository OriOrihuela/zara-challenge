# Zara Challenge - Complete Project Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Root Directory Structure](#root-directory-structure)
3. [Frontend Documentation](#frontend-documentation)
4. [Backend Documentation](#backend-documentation)
5. [Development Setup](#development-setup)
6. [Deployment](#deployment)

---

## 🎯 Project Overview

The **Zara Challenge** is a full-stack web application for viewing, searching, and managing a catalog of mobile phones. The application provides a modern, responsive interface for browsing phone details and managing a shopping cart.

### Key Features
- 📱 **Phone Catalog**: Browse and search mobile phones
- 🔍 **Advanced Search**: Real-time search functionality
- 📄 **Detailed Views**: Comprehensive phone specifications
- 🛒 **Shopping Cart**: Add/remove items with specifications
- 📱 **Responsive Design**: Mobile-first approach
- ♿ **Accessibility**: WCAG compliant interface
- 🧪 **Comprehensive Testing**: Full test coverage

### Technology Stack
- **Frontend**: React 19, TypeScript, Vite, SCSS
- **Backend**: Node.js, Express, TypeScript
- **Testing**: Jest, Supertest
- **Styling**: SCSS with BEM methodology
- **State Management**: React Context API

---

## 📁 Root Directory Structure

```
zara-challenge/
├── 📁 backend/                 # Backend API server
├── 📁 frontend/               # React frontend application
├── 📄 LICENSE                 # MIT License
├── 📄 README.md              # Project overview
└── 📄 PROJECT_DOCUMENTATION.md # This documentation
```

### Root Directory Purpose
The root directory serves as the main project container, organizing the monorepo structure with separate frontend and backend applications.

---

## 🎨 Frontend Documentation

### 📁 Frontend Structure

```
frontend/
├── 📁 public/                 # Static assets
│   └── 📄 vite.svg           # Vite logo
├── 📁 src/                   # Source code
│   ├── 📁 assets/            # Static assets
│   │   ├── 📄 arrow-back.svg # Back button icon
│   │   ├── 📄 bag.svg        # Shopping cart icon
│   │   └── 📄 mbst.svg       # Company logo
│   ├── 📁 components/        # Reusable components
│   │   ├── 📁 BackButton/    # Navigation component
│   │   ├── 📁 Layout/        # Main layout wrapper
│   │   ├── 📁 PhoneCard/     # Phone list item
│   │   ├── 📁 PhoneImage/    # Phone image display
│   │   ├── 📁 PhoneInfo/     # Phone details & options
│   │   ├── 📁 PhoneSpecs/    # Technical specifications
│   │   ├── 📁 SearchBar/     # Search functionality
│   │   ├── 📁 SimilarItems/  # Related products
│   │   └── 📁 SVGIcon/       # SVG icon wrapper
│   ├── 📁 context/           # React Context providers
│   │   ├── 📄 CartContext.tsx    # Shopping cart state
│   │   └── 📄 SearchContext.tsx  # Search state
│   ├── 📁 hooks/             # Custom React hooks
│   │   ├── 📄 useCart.ts     # Cart management hook
│   │   └── 📄 useSearch.ts   # Search functionality hook
│   ├── 📁 models/            # TypeScript type definitions
│   │   ├── 📄 index.ts       # Main exports
│   │   ├── 📄 phoneDetail.ts # Phone detail types
│   │   └── 📄 phoneList.ts   # Phone list types
│   ├── 📁 pages/             # Page components
│   │   ├── 📁 CartPage/      # Shopping cart page
│   │   ├── 📁 PhoneDetailPage/ # Phone detail page
│   │   └── 📁 PhoneListPage/ # Phone catalog page
│   ├── 📁 services/          # API services
│   │   ├── 📄 apiClient.ts   # HTTP client configuration
│   │   └── 📄 phoneService.ts # Phone API calls
│   ├── 📁 styles/            # SCSS stylesheets
│   │   ├── 📄 base.scss      # Base styles
│   │   ├── 📄 components.scss # Component styles
│   │   ├── 📄 main.scss      # Main stylesheet
│   │   ├── 📄 mixins.scss    # SCSS mixins
│   │   ├── 📄 utilities.scss # Utility classes
│   │   └── 📄 variables.scss # SCSS variables
│   ├── 📄 App.tsx            # Main application component
│   └── 📄 main.tsx           # Application entry point
├── 📄 index.html             # HTML template
├── 📄 package.json           # Dependencies & scripts
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 tsconfig.app.json      # App-specific TS config
├── 📄 tsconfig.node.json     # Node-specific TS config
├── 📄 vite.config.ts         # Vite build configuration
└── 📄 eslint.config.js       # ESLint configuration
```

### 🎯 Frontend Architecture

#### **Component Structure**
- **Pages**: Top-level route components (`PhoneListPage`, `PhoneDetailPage`, `CartPage`)
- **Components**: Reusable UI components with BEM methodology
- **Context**: Global state management for cart and search
- **Hooks**: Custom hooks for state logic
- **Services**: API communication layer

#### **Styling Architecture**
- **SCSS Variables**: Centralized design tokens
- **Mixins**: Reusable style patterns
- **BEM Methodology**: Block-Element-Modifier naming
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Focus management and screen reader support

#### **State Management**
- **CartContext**: Shopping cart state and operations
- **SearchContext**: Search functionality and filters
- **Local State**: Component-specific state with React hooks

### 🚀 Frontend Features

#### **Phone Catalog**
- Grid layout with responsive breakpoints
- Hover animations with dark overlay
- Image optimization and lazy loading
- Search and filter functionality

#### **Phone Details**
- Comprehensive specifications display
- Color and storage option selection
- Similar products recommendations
- Add to cart functionality

#### **Shopping Cart**
- Item management with specifications
- Price calculation and totals
- Remove individual items
- Continue shopping navigation

#### **Accessibility Features**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### 🛠️ Frontend Scripts

```bash
# Development
pnpm dev                 # Start development server

# Building
pnpm build              # Production build
pnpm build:dev          # Development build
pnpm preview            # Preview production build

# Code Quality
pnpm lint               # Run ESLint
pnpm lint:fix           # Fix ESLint issues
pnpm format             # Format code with Prettier
pnpm format:check       # Check code formatting
```

---

## 🔧 Backend Documentation

### 📁 Backend Structure

```
backend/
├── 📁 coverage/              # Test coverage reports
├── 📁 dist/                 # Compiled JavaScript
├── 📁 node_modules/         # Dependencies
├── 📁 src/                  # Source code
│   ├── 📁 models/          # TypeScript models
│   │   └── 📄 product.ts   # Product type definitions
│   ├── 📁 routes/          # API route handlers
│   │   ├── 📄 favicon.ts   # Favicon endpoint
│   │   └── 📄 products.ts  # Products API endpoints
│   ├── 📄 apiClient.ts     # External API client
│   └── 📄 index.ts         # Main application entry
├── 📁 tests/               # Test suites
│   ├── 📁 integration/     # Integration tests
│   ├── 📁 routes/          # Route-specific tests
│   │   ├── 📄 favicon.test.ts
│   │   └── 📄 products.test.ts
│   └── 📄 setup.ts         # Test configuration
├── 📄 package.json         # Dependencies & scripts
├── 📄 tsconfig.json        # TypeScript configuration
├── 📄 jest.config.js       # Jest test configuration
└── 📄 eslint.config.js     # ESLint configuration
```

### 🎯 Backend Architecture

#### **API Structure**
- **Express.js**: Web framework with TypeScript
- **ESM Modules**: Modern JavaScript module system
- **Middleware**: Security, CORS, logging, and error handling
- **Route Handlers**: RESTful API endpoints
- **External API**: Integration with phone data service

#### **Security Features**
- **Helmet**: Security headers and protection
- **CORS**: Cross-origin resource sharing
- **Input Validation**: Request validation and sanitization
- **Error Handling**: Centralized error management

#### **Testing Architecture**
- **Jest**: Testing framework with TypeScript support
- **Supertest**: HTTP assertion library
- **Coverage**: Comprehensive test coverage reporting
- **Integration Tests**: Full application testing

### 🚀 Backend Features

#### **API Endpoints**

##### **Products API**
```typescript
GET /api/products
- Query parameters: search, limit, offset
- Response: { items: Product[], total: number }
- Features: Search, pagination, filtering

GET /api/products/:id
- Path parameter: product ID
- Response: ProductDetail
- Features: Individual product details
```

##### **Favicon API**
```typescript
GET /favicon.ico
- Response: Empty favicon
- Headers: Content-Type, Cache-Control
- Features: CORS support, caching
```

#### **Middleware Stack**
1. **Helmet**: Security headers
2. **CORS**: Cross-origin requests
3. **Morgan**: Request logging
4. **Body Parsing**: JSON and URL-encoded data
5. **Routes**: API endpoints
6. **Error Handling**: Centralized error management

#### **External API Integration**
- **Base URL**: `https://prueba-tecnica-api-tienda-moviles.onrender.com`
- **Authentication**: API key authentication
- **Data Processing**: Search, filtering, and pagination
- **Error Handling**: Graceful failure management

### 🛠️ Backend Scripts

```bash
# Development
pnpm dev                 # Start development server with hot reload

# Building
pnpm build              # Compile TypeScript to JavaScript
pnpm start              # Start production server

# Testing
pnpm test               # Run all tests
pnpm test:watch         # Run tests in watch mode
pnpm test:coverage      # Run tests with coverage report
pnpm test:ci            # CI/CD test configuration

# Code Quality
pnpm lint               # Run ESLint
pnpm lint:fix           # Fix ESLint issues
pnpm format             # Format code with Prettier
pnpm format:check       # Check code formatting
```

### 🧪 Testing Coverage

#### **Test Structure**
- **Unit Tests**: Individual component testing
- **Integration Tests**: Full application testing
- **Route Tests**: API endpoint testing
- **Coverage**: 61.36% overall coverage

#### **Test Categories**
1. **Models**: TypeScript interface validation
2. **API Client**: External API integration
3. **Routes**: Endpoint functionality
4. **Integration**: Full application flow
5. **Error Handling**: Error scenarios

---

## 🚀 Development Setup

### Prerequisites
- **Node.js**: >= 18.0.0
- **pnpm**: Package manager
- **Git**: Version control

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd zara-challenge

# Install dependencies
cd frontend && pnpm install
cd ../backend && pnpm install
```

### Development Workflow

```bash
# Terminal 1: Backend
cd backend
pnpm dev

# Terminal 2: Frontend
cd frontend
pnpm dev
```

### Environment Variables

#### **Backend (.env)**
```env
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

#### **Frontend**
- Development server: `http://localhost:5173`
- API endpoint: `http://localhost:5000`

---

## 🚀 Deployment

### Production Build

```bash
# Backend
cd backend
pnpm build
pnpm start

# Frontend
cd frontend
pnpm build
```

### Docker Deployment (Optional)

```dockerfile
# Backend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 5000
CMD ["pnpm", "start"]
```

### Environment Configuration

#### **Production Backend**
```env
PORT=5000
CLIENT_URL=https://your-frontend-domain.com
NODE_ENV=production
```

#### **Production Frontend**
- Update API endpoint in `src/services/apiClient.ts`
- Configure build settings in `vite.config.ts`

---

## 📊 Project Statistics

### **Frontend**
- **Components**: 8 reusable components
- **Pages**: 3 main pages
- **Context Providers**: 2 global state managers
- **Custom Hooks**: 2 specialized hooks
- **TypeScript Files**: 25+ type definitions

### **Backend**
- **API Endpoints**: 3 main endpoints
- **Test Coverage**: 61.36% overall
- **Test Suites**: 6 test suites
- **Total Tests**: 41 passing tests
- **TypeScript Files**: 7 source files

### **Code Quality**
- **ESLint**: Configured for both frontend and backend
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking
- **Testing**: Comprehensive test coverage

---

## 🔗 API Documentation

### **Base URL**: `http://localhost:5000`

### **Endpoints**

#### **GET /api/products**
- **Description**: Get list of products with optional search and pagination
- **Query Parameters**:
  - `search` (string): Search term for filtering
  - `limit` (number): Number of items per page
  - `offset` (number): Number of items to skip
- **Response**: `{ items: Product[], total: number }`

#### **GET /api/products/:id**
- **Description**: Get detailed information about a specific product
- **Path Parameters**:
  - `id` (string): Product identifier
- **Response**: `ProductDetail`

#### **GET /favicon.ico**
- **Description**: Serve favicon for the application
- **Response**: Empty favicon with proper headers

---

## 🎨 Design System

### **Color Palette**
- **Primary**: Black (#000000)
- **Secondary**: Gray (#666666)
- **Background**: White (#FFFFFF)
- **Accent**: Light Gray (#F8F9FA)

### **Typography**
- **Font Family**: System fonts
- **Font Sizes**: 12px, 14px, 16px, 20px, 24px
- **Font Weights**: 300 (Light), 400 (Regular)

### **Spacing**
- **Base Unit**: 8px
- **Common Spacing**: 8px, 16px, 24px, 32px, 64px

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Laptop**: 1024px - 1440px
- **Desktop**: 1440px - 1920px
- **Large Desktop**: > 1920px

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
