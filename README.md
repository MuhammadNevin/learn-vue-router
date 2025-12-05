# Learn Vue Router - Vue 3 Router Learning Project

## 📋 Project Overview

This project is a collection of interactive examples and exercises built with Vue 3, Vue Router, and Vite. It covers essential routing concepts through hands-on components and examples, from basic navigation to advanced nested routes and route guards.

## ❓ What is Vue Router and Why Do We Need It?

Vue Router is the official routing library for Vue.js, enabling you to build single-page applications (SPA) with navigation between different views or pages—without reloading the browser. With Vue Router, you can:
- Define multiple routes and map them to components
- Navigate between pages using links or programmatically
- Pass parameters and query strings to routes
- Handle nested and dynamic routes
- Protect routes with navigation guards
- Show custom layouts, headers, and footers per route
- Display a 404 page for unknown routes

**Why do we need Vue Router?**
- SPAs need to change views without full page reloads
- Organize your app into logical pages and flows
- Enable deep linking and browser navigation (back/forward)
- Manage complex navigation, authentication, and user flows
- Improve user experience with seamless transitions

This project demonstrates all those features and best practices for building robust Vue apps with Vue Router.

## 🎯 Learning Topics Covered

### Core Vue Router Concepts
- **Basic Routing** - Defining routes and navigation
- **Dynamic Routing** - Route params and dynamic segments
- **Nested Routes** - Child routes and layouts
- **Named Views** - Multiple router views in one layout
- **Route Redirects** - Redirecting routes and aliases
- **404 Not Found** - Handling unknown routes
- **Lazy Loading** - Dynamic import for route components
- **Route Guards** - Navigation guards and route protection

### Application Features
- **Home** - Home page with navigation
- **About** - About page
- **Product Detail** - Dynamic product detail page using route params
- **Product Search** - Search page with query params and redirect
- **User** - User layout with nested profile, order, and wishlist pages
- **User Profile** - User profile page
- **User Order** - User order list with custom footer
- **User Wishlist** - User wishlist with custom footer

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components & pages
│   ├── Home.vue
│   ├── Abouts.vue
│   ├── ProductDetails.vue
│   ├── ProductSearch.vue
│   ├── User.vue
│   ├── UserHeader.vue
│   ├── UserProfile.vue
│   ├── UserOrder.vue
│   ├── UserOrderFooter.vue
│   ├── UserWishlist.vue
│   ├── UserWishlistFooter.vue
│   └── NotFound.vue
├── assets/             # Static assets
├── main.js             # Application entry point & router setup
├── App.vue             # Root component
├── style.css           # Global styles

public/
└── api/                # Product data files (JSON)
    ├── products.json
    ├── products/1.json
    └── ...

index.html              # Main HTML file
vite.config.js          # Vite configuration
package.json            # Project dependencies & scripts
README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The development server will start and you can view the project in your browser.

### Build

```bash
# Build for production
npm run build
```

## 📚 Example Components & Routing Features

- **Home.vue** - Main landing page with navigation
- **Abouts.vue** - About page
- **ProductDetails.vue** - Dynamic product detail using route params
- **ProductSearch.vue** - Product search with query params and redirect
- **User.vue** - User layout with named views and nested routes
- **UserProfile.vue** - User profile page
- **UserOrder.vue** - User order list
- **UserOrderFooter.vue** - Custom footer for order page
- **UserWishlist.vue** - User wishlist
- **UserWishlistFooter.vue** - Custom footer for wishlist page
- **NotFound.vue** - 404 page for unknown routes

## 🛠️ Technology Stack

- **Vue 3** - Progressive JavaScript framework
- **Vue Router** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **JavaScript (ES6+)** - Modern JavaScript

## 📖 Resources

- [Vue Router Documentation](https://router.vuejs.org/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Script Setup Docs](https://vuejs.org/guide/scaling-up/sfc-script-setup.html)
- [Vue IDE Support Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)

## 💡 Key Learning Goals

✅ Understand Vue Router setup and navigation  
✅ Master dynamic and nested routes  
✅ Implement named views and redirects  
✅ Handle route params and query params  
✅ Create 404 pages and route guards  
✅ Lazy load route components for performance  
✅ Build interactive pages with routing logic  

## 📝 Notes

This is a learning project. Each component and route demonstrates a specific Vue Router concept or feature. Use them as references while learning Vue Router fundamentals and best practices.
