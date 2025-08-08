import TrackOrderClient from "./TrackOrderClient"

// Generate static params for build
export function generateStaticParams() {
  // Generate some example order IDs for static generation
  return [
    { orderId: 'ORD-2024-001' },
    { orderId: 'ORD-2024-002' },
    { orderId: 'ORD-2024-003' },
    { orderId: 'ORD-2024-004' },
    { orderId: 'ORD-2024-005' },
  ]
}

// Server component that renders client component
export default function TrackOrderPage() {
    return <TrackOrderClient />
}