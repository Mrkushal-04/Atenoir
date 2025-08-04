export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  images?: string[] // Array of image URLs for product gallery
  sizes?: string[] // Available sizes (e.g., S, M, L, XL)
  colors?: { name: string; hex: string }[] // Available colors with hex codes
  material?: string
  careInstructions?: string
  category: "Men" | "Women" | "Kids" | "Shirts" | "Trousers" | "Suits" | "Accessories" // Added new categories
  fabric?: string[] // Added fabric property
  model3D?: string // Path to .glb 3D model
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  rating: number // e.g., 1-5 stars
}

export interface BrandingPostData {
  id: string
  title: string
  description: string
  image: string
}

// Cart & Checkout Types
export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

export interface Address {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault?: boolean
}

export interface PaymentMethod {
  id: string
  type: 'card' | 'upi' | 'netbanking' | 'wallet' | 'cod'
  last4?: string
  brand?: string
  isDefault?: boolean
}

export interface PromoCode {
  code: string
  discount: number
  type: 'percentage' | 'fixed'
  minAmount?: number
  maxDiscount?: number
  validUntil: Date
}

export interface Order {
  id: string
  orderNumber: string
  items: CartItem[]
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  paymentStatus: 'pending' | 'paid' | 'failed'
  createdAt: Date
  estimatedDelivery?: Date
  trackingNumber?: string
  notes?: string
}

export interface CheckoutStep {
  id: string
  title: string
  description: string
  isCompleted: boolean
  isActive: boolean
}
