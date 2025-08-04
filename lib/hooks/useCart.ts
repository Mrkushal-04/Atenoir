"use client"

import { useState, useEffect } from "react"
import type { CartItem } from "@/lib/types"

export function useCart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('atenoir-cart')
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart))
            } catch (error) {
                console.error('Error loading cart from localStorage:', error)
            }
        } else {
            // Add some sample items for demonstration
            const sampleItems = [
                {
                    id: "classic-black-tee-M-Black",
                    productId: "classic-black-tee",
                    name: "Classic Black Tee",
                    price: 350.0,
                    image: "/images/black-tshirt.jpeg",
                    quantity: 2,
                    size: "M",
                    color: "Black"
                },
                {
                    id: "champagne-short-sleeve-L-Champagne",
                    productId: "champagne-short-sleeve",
                    name: "Champagne Short Sleeve",
                    price: 480.0,
                    image: "/images/champagne-shirt.jpeg",
                    quantity: 1,
                    size: "L",
                    color: "Champagne"
                }
            ]
            setCartItems(sampleItems)
        }
        setIsLoading(false)
    }, [])

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('atenoir-cart', JSON.stringify(cartItems))
        }
    }, [cartItems, isLoading])

    const addToCart = (item: Omit<CartItem, 'id'>) => {
        const newItem: CartItem = {
            ...item,
            id: `${item.productId}-${item.size || 'default'}-${item.color || 'default'}`
        }

        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(
                cartItem => cartItem.id === newItem.id
            )

            if (existingItemIndex > -1) {
                // Update quantity if item already exists
                const updatedItems = [...prevItems]
                updatedItems[existingItemIndex].quantity += newItem.quantity
                return updatedItems
            } else {
                // Add new item
                return [...prevItems, newItem]
            }
        })
    }

    const updateQuantity = (itemId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(itemId)
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === itemId ? { ...item, quantity } : item
                )
            )
        }
    }

    const removeFromCart = (itemId: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0)
    }

    return {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount,
        isLoading
    }
} 