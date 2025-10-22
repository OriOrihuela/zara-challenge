# Backend API Documentation

## 📋 Table of Contents

1. [Overview](#-overview)
2. [Architecture](#️-architecture)
3. [Getting Started](#-getting-started)
4. [API Endpoints](#-api-endpoints)
5. [Configuration](#-configuration)
6. [Security Features](#️-security-features)
7. [Testing](#-testing)
8. [External API Integration](#-external-api-integration)
9. [Performance](#-performance)
10. [Deployment](#-deployment)
11. [Code Quality](#-code-quality)
12. [Monitoring](#-monitoring)
13. [Development Workflow](#-development-workflow)
14. [Troubleshooting](#-troubleshooting)
15. [Additional Resources](#-additional-resources)

---

## 🎯 Overview

The backend is a Node.js/Express API server built with TypeScript that provides RESTful endpoints for the Zara Challenge mobile phone catalog application.

## 🏗️ Architecture

### **Technology Stack**
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18+
- **Language**: TypeScript 5.9+
- **Module System**: ESM (ES Modules)
- **Testing**: Jest + Supertest
- **Security**: Helmet, CORS
- **Logging**: Morgan

### **Project Structure**
```
backend/
├── 📁 src/                    # Source code
│   ├── 📁 models/            # TypeScript models
│   ├── 📁 routes/            # API route handlers
│   ├── 📄 apiClient.ts       # External API client
│   └── 📄 index.ts           # Main application entry
├── 📁 tests/                 # Test suites
│   ├── 📁 integration/       # Integration tests
│   ├── 📁 routes/            # Route-specific tests
│   └── 📄 setup.ts           # Test configuration
├── 📁 dist/                  # Compiled JavaScript
├── 📁 coverage/              # Test coverage reports
└── 📄 Configuration files
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js >= 18.0.0
- pnpm package manager

### **Installation**
```bash
cd backend
pnpm install
```

### **Development**
```bash
# Start development server with hot reload
pnpm dev

# Build TypeScript to JavaScript
pnpm build

# Start production server
pnpm start
```

### **Testing**
```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test:watch
```

## 📡 API Endpoints

### **Base URL**: `http://localhost:5000`

### **Products API**

#### **GET /api/products**
Get a list of products with optional search and pagination.

**Query Parameters:**
- `search` (string, optional): Search term for filtering products
- `limit` (number, optional): Number of items per page (default: 20)
- `offset` (number, optional): Number of items to skip (default: 0)

**Response:**
```typescript
{
  items: Product[],
  total: number
}
```

**Example:**
```bash
GET /api/products?search=iPhone&limit=10&offset=0
```

#### **GET /api/products/:id**
Get detailed information about a specific product.

**Path Parameters:**
- `id` (string): Product identifier

**Response:**
```typescript
ProductDetail
```

**Example:**
```bash
GET /api/products/SMG-S24U
```

### **Favicon API**

#### **GET /favicon.ico**
Serve favicon for the application.

**Response:**
- Content-Type: `image/x-icon`
- Cache-Control: `public, max-age=31536000`
- CORS headers included

## 🔧 Configuration

### **Environment Variables**
```env
PORT=5000                    # Server port
CLIENT_URL=http://localhost:5173  # Frontend URL for CORS
NODE_ENV=development         # Environment mode
```

### **TypeScript Configuration**
- **Target**: ES2022
- **Module**: ESNext
- **Strict Mode**: Enabled
- **Source Maps**: Enabled
- **Declaration Files**: Generated

### **Jest Configuration**
- **Preset**: ts-jest/presets/default-esm
- **Environment**: Node.js
- **Coverage**: Enabled
- **ESM Support**: Enabled

## 🛡️ Security Features

### **Helmet Security Headers**
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Cross-Origin-Resource-Policy: same-origin

### **CORS Configuration**
- **Origin**: Configurable via CLIENT_URL
- **Methods**: GET, POST, PUT, DELETE, OPTIONS
- **Headers**: Content-Type, Authorization, x-api-key
- **Credentials**: Supported

### **Error Handling**
- Centralized error middleware
- JSON parsing error handling
- 404 route handling
- 500 server error handling

## 🧪 Testing

### **Test Structure**
```
tests/
├── 📁 integration/          # Full application tests
├── 📁 routes/              # Route-specific tests
│   ├── 📄 favicon.test.ts  # Favicon endpoint tests
│   └── 📄 products.test.ts # Products API tests
└── 📄 setup.ts            # Test configuration
```

### **Test Coverage**
- **Overall Coverage**: 61.36%
- **Test Suites**: 6
- **Total Tests**: 41
- **Passing Tests**: 41

### **Test Categories**
1. **Unit Tests**: Individual component testing
2. **Integration Tests**: Full application flow
3. **Route Tests**: API endpoint functionality
4. **Error Handling**: Error scenario testing

### **Running Tests**
```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run specific test file
pnpm test tests/routes/products.test.ts

# Run tests in watch mode
pnpm test:watch
```

## 🔌 External API Integration

### **API Client Configuration**
- **Base URL**: `https://prueba-tecnica-api-tienda-moviles.onrender.com`
- **Authentication**: API key required
- **Headers**: x-api-key for authentication

### **Data Processing**
- **Search**: Client-side filtering by name and brand
- **Pagination**: Server-side limit and offset
- **Error Handling**: Graceful failure with fallbacks

## 📊 Performance

### **Middleware Stack**
1. **Helmet**: Security headers (minimal overhead)
2. **CORS**: Cross-origin request handling
3. **Morgan**: Request logging (development only)
4. **Body Parsing**: JSON and URL-encoded data
5. **Routes**: API endpoint handlers
6. **Error Handling**: Centralized error management

### **Optimization Features**
- **ESM Modules**: Modern JavaScript module system
- **TypeScript Compilation**: Optimized JavaScript output
- **Source Maps**: Development debugging support
- **Hot Reload**: Development server with nodemon

## 🚀 Deployment

### **Production Build**
```bash
# Build TypeScript to JavaScript
pnpm build

# Start production server
pnpm start
```

### **Docker Deployment**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 5000
CMD ["pnpm", "start"]
```

### **Environment Configuration**
```env
PORT=5000
CLIENT_URL=https://your-frontend-domain.com
NODE_ENV=production
```

## 🔍 Code Quality

### **Linting**
- **ESLint**: Code quality and style
- **TypeScript**: Type checking
- **Prettier**: Code formatting

### **Scripts**
```bash
# Linting
pnpm lint              # Run ESLint
pnpm lint:fix          # Fix ESLint issues

# Formatting
pnpm format            # Format code with Prettier
pnpm format:check      # Check code formatting
```

## 📈 Monitoring

### **Logging**
- **Morgan**: HTTP request logging
- **Console**: Error logging and debugging
- **Development**: Detailed request/response logging

### **Health Checks**
- **Favicon Endpoint**: Basic connectivity test
- **Products API**: Data availability test
- **Error Handling**: Graceful failure management

## 🔄 Development Workflow

### **Local Development**
1. Install dependencies: `pnpm install`
2. Start development server: `pnpm dev`
3. Make changes to TypeScript files
4. Tests run automatically on file changes
5. Hot reload for immediate feedback

### **Testing Workflow**
1. Write tests for new features
2. Run tests: `pnpm test`
3. Check coverage: `pnpm test:coverage`
4. Fix any failing tests
5. Commit changes

### **Production Deployment**
1. Build project: `pnpm build`
2. Test production build: `pnpm start`
3. Deploy to production environment
4. Monitor logs and performance

## 🐛 Troubleshooting

### **Common Issues**

#### **Module Resolution Errors**
- Ensure `.js` extensions in import statements
- Check TypeScript configuration
- Verify Jest moduleNameMapper settings

#### **CORS Issues**
- Verify CLIENT_URL environment variable
- Check CORS configuration in index.ts
- Ensure frontend URL matches CORS origin

#### **Test Failures**
- Run `pnpm test` to see specific errors
- Check Jest configuration
- Verify test file imports

### **Debug Mode**
```bash
# Enable debug logging
DEBUG=* pnpm dev

# Run tests with verbose output
pnpm test --verbose
```

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Jest Testing Framework](https://jestjs.io/)
- [Node.js ESM Modules](https://nodejs.org/api/esm.html)
