# Atenoir Checkout System

A comprehensive e-commerce checkout system built with Next.js, TypeScript, and Tailwind CSS.

## Features

### 🛒 Shopping Cart
- Add/remove items from cart
- Update quantities
- Apply promo codes
- Real-time cart total calculation
- Persistent cart storage (localStorage)

### 📦 Checkout Process
1. **Cart Review** (`/checkout`)
   - View cart items
   - Apply promo codes
   - Review order summary

2. **Delivery Information** (`/checkout/delivery`)
   - Shipping address form
   - Billing address (same as shipping option)
   - Delivery method selection

3. **Payment** (`/checkout/payment`)
   - Multiple payment methods:
     - Credit/Debit Cards
     - UPI
     - Net Banking
     - Digital Wallets
   - Secure payment processing

4. **Order Review** (`/checkout/review`)
   - Final order confirmation
   - Review all details
   - Place order

### ✅ Order Management
- **Order Confirmation** (`/checkout/confirmation`)
  - Success page with order details
  - Download invoice
  - Track order
  - Continue shopping

- **Invoice** (`/checkout/invoice`)
  - Detailed invoice view
  - Download/Print/Email options
  - Professional invoice layout

- **Track Order** (`/checkout/track/[orderId]`)
  - Real-time tracking timeline
  - Order status updates
  - Delivery estimates

- **Order History** (`/orders`)
  - View all orders
  - Search and filter orders
  - Order status tracking

## File Structure

```
app/
├── checkout/
│   ├── layout.tsx              # Checkout layout
│   ├── page.tsx                # Shopping cart
│   ├── delivery/
│   │   └── page.tsx            # Delivery information
│   ├── payment/
│   │   └── page.tsx            # Payment methods
│   ├── review/
│   │   └── page.tsx            # Order review
│   ├── confirmation/
│   │   └── page.tsx            # Order confirmation
│   ├── invoice/
│   │   └── page.tsx            # Invoice page
│   └── track/
│       └── [orderId]/
│           └── page.tsx        # Track order
├── orders/
│   └── page.tsx                # Order history

components/
├── navbar.tsx                  # Updated with cart icon
├── payment-gateway.tsx         # Payment processing component

lib/
├── types.ts                    # TypeScript interfaces
└── hooks/
    └── useCart.ts              # Cart management hook
```

## Key Components

### useCart Hook
Manages cart state across the application:
- Add/remove items
- Update quantities
- Calculate totals
- Persistent storage

### Payment Gateway
Supports multiple payment methods:
- Credit/Debit Cards
- UPI
- Net Banking
- Digital Wallets
- Ready for Razorpay/Stripe integration

### Order Tracking
Real-time order status with timeline:
- Order Confirmed
- Order Processed
- Shipped
- In Transit
- Out for Delivery
- Delivered

## Payment Integration

The system is designed to easily integrate with popular payment gateways:

### Razorpay
```typescript
// Ready for integration
export function RazorpayPayment({ amount, onSuccess, onFailure }) {
  // Razorpay SDK integration
}
```

### Stripe
```typescript
// Ready for integration
export function StripePayment({ amount, onSuccess, onFailure }) {
  // Stripe SDK integration
}
```

## Styling

Uses Tailwind CSS with a dark theme:
- Primary: Lime yellow (`lime-yellow-600`)
- Background: Dark gray/black
- Text: White and gray variants
- Consistent spacing and typography

## State Management

- **Cart State**: Local storage with React hooks
- **Form State**: React useState for form data
- **Order State**: Mock data (ready for API integration)

## Future Enhancements

1. **API Integration**
   - Connect to backend APIs
   - Real payment processing
   - Order management system

2. **User Authentication**
   - User accounts
   - Order history
   - Saved addresses

3. **Advanced Features**
   - Wishlist
   - Product reviews
   - Loyalty program
   - Multiple currencies

4. **Mobile Optimization**
   - Responsive design improvements
   - Mobile-specific features

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Navigate to `/checkout` to see the shopping cart

## Usage

1. **Add items to cart** from product pages
2. **View cart** at `/checkout`
3. **Proceed through checkout** steps
4. **Track orders** at `/checkout/track/[orderId]`
5. **View order history** at `/orders`

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Animations
- **React Hooks** - State management 