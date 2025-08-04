"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";

export interface UserProfile {
    name: string
    email: string
    avatar: string
    registeredDate: string
    phone?: string
    dateOfBirth?: string
    gender?: string
}

export interface Address {
    id: string
    name: string
    address: string
    phone: string
    isDefault?: boolean
    type?: 'home' | 'work' | 'other'
}

export interface WishlistItem {
    id: string
    productId: string
    name: string
    image: string
    price: number
    addedDate: string
}

export interface Order {
    id: string
    orderNumber: string
    date: string
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
    total: number
    items: Array<{
        id: string
        name: string
        image: string
        price: number
        quantity: number
        size: string
        color: string
    }>
}

export interface SavedDesign {
    id: string
    name: string
    image: string
    createdDate: string
    description?: string
}

export interface Review {
    id: string
    productId: string
    productName: string
    rating: number
    comment: string
    date: string
}

export interface Notification {
    id: string
    title: string
    message: string
    type: 'order' | 'promotion' | 'system' | 'loyalty'
    isRead: boolean
    date: string
}

export interface UserData {
    profile: UserProfile
    addresses: Address[]
    wishlist: WishlistItem[]
    orders: Order[]
    savedDesigns: SavedDesign[]
    reviews: Review[]
    notifications: Notification[]
    loyaltyPoints: number
    referralCode: string
    subscription: {
        isActive: boolean
        plan: string
        nextBilling: string
    }
}

const defaultUserData: UserData = {
    profile: {
        name: "",
        email: "",
        avatar: "/images/user-avatar.png",
        registeredDate: "",
        phone: "",
        dateOfBirth: "",
        gender: ""
    },
    addresses: [],
    wishlist: [],
    orders: [],
    savedDesigns: [],
    reviews: [],
    notifications: [],
    loyaltyPoints: 0,
    referralCode: "",
    subscription: {
        isActive: false,
        plan: "",
        nextBilling: ""
    }
}

export function useUserData() {
    const [userData, setUserData] = useState<UserData>(defaultUserData)
    const [isLoading, setIsLoading] = useState(true)

    // Load user data from localStorage on mount
    useEffect(() => {
        const savedUserData = localStorage.getItem('atenoir-user-data')
        if (savedUserData) {
            try {
                setUserData(JSON.parse(savedUserData))
            } catch (error) {
                console.error('Error loading user data from localStorage:', error)
                setUserData(defaultUserData)
            }
        }
        setIsLoading(false)
    }, [])

    // Save user data to localStorage whenever it changes
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('atenoir-user-data', JSON.stringify(userData))
        }
    }, [userData, isLoading])

    // Profile management
    const updateProfile = (updates: Partial<UserProfile>) => {
        setUserData(prev => ({
            ...prev,
            profile: { ...prev.profile, ...updates }
        }))
    }

    // Address management
    const addAddress = (address: Omit<Address, 'id'>) => {
        const newAddress: Address = {
            ...address,
            id: Date.now().toString()
        }
        setUserData(prev => ({
            ...prev,
            addresses: [...prev.addresses, newAddress]
        }))
    }

    const updateAddress = (id: string, updates: Partial<Address>) => {
        setUserData(prev => ({
            ...prev,
            addresses: prev.addresses.map(addr =>
                addr.id === id ? { ...addr, ...updates } : addr
            )
        }))
    }

    const deleteAddress = (id: string) => {
        setUserData(prev => ({
            ...prev,
            addresses: prev.addresses.filter(addr => addr.id !== id)
        }))
    }

    // Wishlist management
    const addToWishlist = (item: Omit<WishlistItem, 'id' | 'addedDate'>) => {
        const newItem: WishlistItem = {
            ...item,
            id: Date.now().toString(),
            addedDate: new Date().toISOString().split('T')[0]
        }
        setUserData(prev => ({
            ...prev,
            wishlist: [...prev.wishlist, newItem]
        }))
    }

    const removeFromWishlist = (id: string) => {
        setUserData(prev => ({
            ...prev,
            wishlist: prev.wishlist.filter(item => item.id !== id)
        }))
    }

    // Order management
    const addOrder = (order: Omit<Order, 'id'>) => {
        const newOrder: Order = {
            ...order,
            id: Date.now().toString()
        }
        setUserData(prev => ({
            ...prev,
            orders: [newOrder, ...prev.orders]
        }))
    }

    // Saved designs management
    const addSavedDesign = (design: Omit<SavedDesign, 'id' | 'createdDate'>) => {
        const newDesign: SavedDesign = {
            ...design,
            id: Date.now().toString(),
            createdDate: new Date().toISOString().split('T')[0]
        }
        setUserData(prev => ({
            ...prev,
            savedDesigns: [...prev.savedDesigns, newDesign]
        }))
    }

    const deleteSavedDesign = (id: string) => {
        setUserData(prev => ({
            ...prev,
            savedDesigns: prev.savedDesigns.filter(design => design.id !== id)
        }))
    }

    // Reviews management
    const addReview = (review: Omit<Review, 'id' | 'date'>) => {
        const newReview: Review = {
            ...review,
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0]
        }
        setUserData(prev => ({
            ...prev,
            reviews: [...prev.reviews, newReview]
        }))
    }

    const updateReview = (id: string, updates: Partial<Review>) => {
        setUserData(prev => ({
            ...prev,
            reviews: prev.reviews.map(review =>
                review.id === id ? { ...review, ...updates } : review
            )
        }))
    }

    const deleteReview = (id: string) => {
        setUserData(prev => ({
            ...prev,
            reviews: prev.reviews.filter(review => review.id !== id)
        }))
    }

    // Notifications management
    const markNotificationAsRead = (id: string) => {
        setUserData(prev => ({
            ...prev,
            notifications: prev.notifications.map(notification =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
        }))
    }

    const deleteNotification = (id: string) => {
        setUserData(prev => ({
            ...prev,
            notifications: prev.notifications.filter(notification => notification.id !== id)
        }))
    }

    const addNotification = (notification: Omit<Notification, 'id' | 'date' | 'isRead'>) => {
        const newNotification: Notification = {
            ...notification,
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            isRead: false
        }
        setUserData(prev => ({
            ...prev,
            notifications: [newNotification, ...prev.notifications]
        }))
    }

    // Loyalty points management
    const addLoyaltyPoints = (points: number) => {
        setUserData(prev => ({
            ...prev,
            loyaltyPoints: prev.loyaltyPoints + points
        }))
    }

    const useLoyaltyPoints = (points: number) => {
        setUserData(prev => ({
            ...prev,
            loyaltyPoints: Math.max(0, prev.loyaltyPoints - points)
        }))
    }

    // Subscription management
    const updateSubscription = (updates: Partial<UserData['subscription']>) => {
        setUserData(prev => ({
            ...prev,
            subscription: { ...prev.subscription, ...updates }
        }))
    }

    // Password change (just for demo - in real app this would be handled by backend)
    const changePassword = (oldPassword: string, newPassword: string) => {
        // This would typically make an API call
        console.log('Password changed:', { oldPassword, newPassword })
        return Promise.resolve(true)
    }

    // Set user data directly (for login)
    const setUserDataDirectly = (data: UserData) => {
        setUserData(data)
        localStorage.setItem('atenoir-user-data', JSON.stringify(data))
    }

    return {
        userData,
        isLoading,
        // Profile
        updateProfile,
        // Addresses
        addAddress,
        updateAddress,
        deleteAddress,
        // Wishlist
        addToWishlist,
        removeFromWishlist,
        // Orders
        addOrder,
        // Saved designs
        addSavedDesign,
        deleteSavedDesign,
        // Reviews
        addReview,
        updateReview,
        deleteReview,
        // Notifications
        markNotificationAsRead,
        deleteNotification,
        addNotification,
        // Loyalty
        addLoyaltyPoints,
        useLoyaltyPoints,
        // Subscription
        updateSubscription,
        // Password
        changePassword,
        // Direct setter
        setUserDataDirectly
    }
} 