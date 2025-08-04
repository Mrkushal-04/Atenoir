export interface Product {
    id: string
    name: string
    category: string
    subcategory: string
    price: number
    originalPrice?: number
    images: string[]
    rating: number
    reviews: number
    inStock: boolean
    isLimited: boolean
    isNew: boolean
    colors: { name: string; hex: string }[]
    sizes: string[]
    fabrics: { name: string; price: number }[]
    description: string
    features: string[]
    specifications: Record<string, string>
    relatedProducts: string[]
    tags: string[]
}

export const products: Product[] = [
    // Men's Products
    {
        id: "1",
        name: "Classic Oxford Shirt",
        category: "men",
        subcategory: "shirts",
        price: 89.99,
        originalPrice: 119.99,
        images: ["/images/products/oxford-shirt-1.jpg", "/images/products/oxford-shirt-2.jpg"],
        rating: 4.8,
        reviews: 124,
        inStock: true,
        isLimited: false,
        isNew: true,
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Blue", hex: "#1E40AF" },
            { name: "Pink", hex: "#EC4899" }
        ],
        sizes: ["S", "M", "L", "XL"],
        fabrics: [
            { name: "Premium Cotton", price: 0 },
            { name: "Linen Blend", price: 15 },
            { name: "Silk Blend", price: 25 }
        ],
        description: "A timeless Oxford shirt crafted from premium cotton, featuring a classic button-down collar and comfortable fit.",
        features: [
            "Premium cotton fabric",
            "Classic button-down collar",
            "Comfortable fit",
            "Wrinkle-resistant",
            "Machine washable"
        ],
        specifications: {
            "Material": "100% Premium Cotton",
            "Weight": "180 GSM",
            "Fit": "Regular",
            "Collar": "Button-down",
            "Cuffs": "Single button",
            "Care": "Machine wash cold"
        },
        relatedProducts: ["2", "3", "4"],
        tags: ["formal", "casual", "business"]
    },
    {
        id: "2",
        name: "Slim Fit Trousers",
        category: "men",
        subcategory: "trousers",
        price: 129.99,
        images: ["/images/products/slim-trousers-1.jpg", "/images/products/slim-trousers-2.jpg"],
        rating: 4.6,
        reviews: 89,
        inStock: true,
        isLimited: false,
        isNew: false,
        colors: [
            { name: "Navy", hex: "#1E3A8A" },
            { name: "Charcoal", hex: "#374151" },
            { name: "Beige", hex: "#F5F5DC" }
        ],
        sizes: ["30", "32", "34", "36"],
        fabrics: [
            { name: "Wool Blend", price: 0 },
            { name: "Cotton Blend", price: 10 }
        ],
        description: "Modern slim-fit trousers with a sophisticated cut and premium fabric for the contemporary gentleman.",
        features: [
            "Slim fit design",
            "Premium wool blend",
            "Side pockets",
            "Back pocket",
            "Adjustable waist"
        ],
        specifications: {
            "Material": "70% Wool, 30% Polyester",
            "Weight": "280 GSM",
            "Fit": "Slim",
            "Pockets": "2 side, 1 back",
            "Waist": "Adjustable",
            "Care": "Dry clean only"
        },
        relatedProducts: ["1", "3", "4"],
        tags: ["formal", "business", "slim-fit"]
    },
    {
        id: "3",
        name: "Business Suit",
        category: "men",
        subcategory: "suits",
        price: 599.99,
        originalPrice: 799.99,
        images: ["/images/products/business-suit-1.jpg", "/images/products/business-suit-2.jpg"],
        rating: 4.9,
        reviews: 67,
        inStock: true,
        isLimited: true,
        isNew: false,
        colors: [
            { name: "Navy", hex: "#1E3A8A" },
            { name: "Charcoal", hex: "#374151" }
        ],
        sizes: ["S", "M", "L", "XL"],
        fabrics: [
            { name: "Wool", price: 0 },
            { name: "Silk Blend", price: 50 }
        ],
        description: "A sophisticated business suit designed for the modern professional, featuring impeccable tailoring and premium materials.",
        features: [
            "Impeccable tailoring",
            "Premium wool fabric",
            "Notched lapel",
            "Single breasted",
            "Two-button closure"
        ],
        specifications: {
            "Material": "100% Wool",
            "Weight": "320 GSM",
            "Fit": "Regular",
            "Lapel": "Notched",
            "Buttons": "2",
            "Care": "Dry clean only"
        },
        relatedProducts: ["1", "2", "4"],
        tags: ["business", "formal", "professional"]
    },
    {
        id: "4",
        name: "Silk Tie",
        category: "men",
        subcategory: "accessories",
        price: 49.99,
        images: ["/images/products/silk-tie-1.jpg", "/images/products/silk-tie-2.jpg"],
        rating: 4.7,
        reviews: 156,
        inStock: true,
        isLimited: false,
        isNew: false,
        colors: [
            { name: "Red", hex: "#DC2626" },
            { name: "Blue", hex: "#1E40AF" },
            { name: "Green", hex: "#059669" },
            { name: "Purple", hex: "#7C3AED" }
        ],
        sizes: ["Standard"],
        fabrics: [
            { name: "Silk", price: 0 },
            { name: "Premium Silk", price: 10 }
        ],
        description: "Handcrafted silk tie with elegant patterns, perfect for adding sophistication to any outfit.",
        features: [
            "100% Silk",
            "Handcrafted",
            "Elegant patterns",
            "Perfect length",
            "Easy to tie"
        ],
        specifications: {
            "Material": "100% Silk",
            "Length": "58 inches",
            "Width": "3.5 inches",
            "Weight": "Light",
            "Care": "Dry clean only"
        },
        relatedProducts: ["1", "2", "3"],
        tags: ["accessories", "formal", "silk"]
    },

    // Women's Products
    {
        id: "5",
        name: "Elegant Blouse",
        category: "women",
        subcategory: "shirts",
        price: 79.99,
        images: ["/images/products/elegant-blouse-1.jpg", "/images/products/elegant-blouse-2.jpg"],
        rating: 4.8,
        reviews: 203,
        inStock: true,
        isLimited: false,
        isNew: true,
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#000000" },
            { name: "Rose", hex: "#F9A8D4" }
        ],
        sizes: ["XS", "S", "M", "L"],
        fabrics: [
            { name: "Silk", price: 0 },
            { name: "Cotton Blend", price: 10 }
        ],
        description: "An elegant blouse crafted from premium silk, featuring a sophisticated design perfect for any occasion.",
        features: [
            "Premium silk fabric",
            "Elegant design",
            "Comfortable fit",
            "Versatile styling",
            "Easy care"
        ],
        specifications: {
            "Material": "100% Silk",
            "Weight": "Light",
            "Fit": "Regular",
            "Sleeves": "Long",
            "Care": "Dry clean only"
        },
        relatedProducts: ["6", "7", "8"],
        tags: ["elegant", "silk", "versatile"]
    },
    {
        id: "6",
        name: "High-Waist Trousers",
        category: "women",
        subcategory: "trousers",
        price: 149.99,
        images: ["/images/products/high-waist-trousers-1.jpg", "/images/products/high-waist-trousers-2.jpg"],
        rating: 4.7,
        reviews: 156,
        inStock: true,
        isLimited: false,
        isNew: false,
        colors: [
            { name: "Black", hex: "#000000" },
            { name: "Navy", hex: "#1E3A8A" },
            { name: "Beige", hex: "#F5F5DC" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        fabrics: [
            { name: "Wool Blend", price: 0 },
            { name: "Cotton Blend", price: 15 }
        ],
        description: "Sophisticated high-waist trousers with a flattering cut and premium fabric for the modern woman.",
        features: [
            "High-waist design",
            "Premium wool blend",
            "Flattering cut",
            "Side pockets",
            "Back pocket"
        ],
        specifications: {
            "Material": "70% Wool, 30% Polyester",
            "Weight": "280 GSM",
            "Fit": "High-waist",
            "Pockets": "2 side, 1 back",
            "Care": "Dry clean only"
        },
        relatedProducts: ["5", "7", "8"],
        tags: ["high-waist", "sophisticated", "business"]
    },
    {
        id: "7",
        name: "Power Suit",
        category: "women",
        subcategory: "suits",
        price: 699.99,
        originalPrice: 899.99,
        images: ["/images/products/power-suit-1.jpg", "/images/products/power-suit-2.jpg"],
        rating: 4.9,
        reviews: 89,
        inStock: true,
        isLimited: true,
        isNew: false,
        colors: [
            { name: "Navy", hex: "#1E3A8A" },
            { name: "Charcoal", hex: "#374151" },
            { name: "Blush", hex: "#FCE7F3" }
        ],
        sizes: ["XS", "S", "M", "L"],
        fabrics: [
            { name: "Wool", price: 0 },
            { name: "Silk Blend", price: 75 }
        ],
        description: "A powerful suit designed for the confident woman, featuring impeccable tailoring and sophisticated styling.",
        features: [
            "Impeccable tailoring",
            "Premium wool fabric",
            "Notched lapel",
            "Single breasted",
            "Two-button closure"
        ],
        specifications: {
            "Material": "100% Wool",
            "Weight": "320 GSM",
            "Fit": "Regular",
            "Lapel": "Notched",
            "Buttons": "2",
            "Care": "Dry clean only"
        },
        relatedProducts: ["5", "6", "8"],
        tags: ["power", "business", "sophisticated"]
    },
    {
        id: "8",
        name: "Silk Scarf",
        category: "women",
        subcategory: "accessories",
        price: 39.99,
        images: ["/images/products/silk-scarf-1.jpg", "/images/products/silk-scarf-2.jpg"],
        rating: 4.6,
        reviews: 234,
        inStock: true,
        isLimited: false,
        isNew: false,
        colors: [
            { name: "Red", hex: "#DC2626" },
            { name: "Blue", hex: "#1E40AF" },
            { name: "Green", hex: "#059669" },
            { name: "Purple", hex: "#7C3AED" },
            { name: "Pink", hex: "#EC4899" }
        ],
        sizes: ["Standard"],
        fabrics: [
            { name: "Silk", price: 0 },
            { name: "Premium Silk", price: 15 }
        ],
        description: "Luxurious silk scarf with elegant patterns, perfect for adding a touch of sophistication to any outfit.",
        features: [
            "100% Silk",
            "Elegant patterns",
            "Perfect size",
            "Versatile styling",
            "Easy care"
        ],
        specifications: {
            "Material": "100% Silk",
            "Size": "35 x 35 inches",
            "Weight": "Light",
            "Care": "Dry clean only"
        },
        relatedProducts: ["5", "6", "7"],
        tags: ["accessories", "silk", "elegant"]
    },

    // Kids Products
    {
        id: "9",
        name: "Kids Formal Shirt",
        category: "kids",
        subcategory: "shirts",
        price: 39.99,
        images: ["/images/products/kids-formal-1.jpg", "/images/products/kids-formal-2.jpg"],
        rating: 4.5,
        reviews: 78,
        inStock: true,
        isLimited: false,
        isNew: false,
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Blue", hex: "#1E40AF" }
        ],
        sizes: ["2T", "3T", "4T", "5T"],
        fabrics: [
            { name: "Cotton", price: 0 },
            { name: "Cotton Blend", price: 5 }
        ],
        description: "Comfortable and stylish formal shirt designed specifically for children, perfect for special occasions.",
        features: [
            "Comfortable cotton",
            "Easy to wear",
            "Durable construction",
            "Machine washable",
            "Child-friendly design"
        ],
        specifications: {
            "Material": "100% Cotton",
            "Weight": "Light",
            "Fit": "Regular",
            "Care": "Machine washable",
            "Age Range": "2-5 years"
        },
        relatedProducts: ["10", "11", "12"],
        tags: ["kids", "formal", "comfortable"]
    },
    {
        id: "10",
        name: "Kids Trousers",
        category: "kids",
        subcategory: "trousers",
        price: 29.99,
        images: ["/images/products/kids-trousers-1.jpg", "/images/products/kids-trousers-2.jpg"],
        rating: 4.4,
        reviews: 45,
        inStock: true,
        isLimited: false,
        isNew: false,
        colors: [
            { name: "Navy", hex: "#1E3A8A" },
            { name: "Khaki", hex: "#F4F3F1" }
        ],
        sizes: ["2T", "3T", "4T", "5T"],
        fabrics: [
            { name: "Cotton", price: 0 },
            { name: "Cotton Blend", price: 3 }
        ],
        description: "Comfortable and durable trousers designed for active children, perfect for everyday wear.",
        features: [
            "Comfortable cotton",
            "Elastic waist",
            "Durable construction",
            "Machine washable",
            "Child-friendly design"
        ],
        specifications: {
            "Material": "100% Cotton",
            "Weight": "Light",
            "Fit": "Regular",
            "Waist": "Elastic",
            "Care": "Machine washable",
            "Age Range": "2-5 years"
        },
        relatedProducts: ["9", "11", "12"],
        tags: ["kids", "comfortable", "durable"]
    }
]

export const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category)
}

export const getProductsBySubcategory = (subcategory: string) => {
    return products.filter(product => product.subcategory === subcategory)
}

export const getProductById = (id: string) => {
    return products.find(product => product.id === id)
}

export const getRelatedProducts = (productId: string) => {
    const product = getProductById(productId)
    if (!product) return []

    return products.filter(p =>
        product.relatedProducts.includes(p.id) && p.id !== productId
    )
}

export const searchProducts = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    return products.filter(product =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
} 