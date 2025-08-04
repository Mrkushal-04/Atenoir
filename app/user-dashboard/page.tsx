"use client";
import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaAddressBook, FaHistory, FaHeart, FaStar, FaBell, FaSignOutAlt, FaCreditCard, FaGift, FaCrown, FaRegEdit, FaMapMarkerAlt, FaListAlt, FaRegCommentDots } from "react-icons/fa";
import { useCart } from "@/lib/hooks/useCart";
import { useUserData } from "@/lib/hooks/useUserData";
import { useSearchParams } from "next/navigation";
import EditProfilePage from "./edit-profile/page";
import ChangePasswordPage from "./change-password/page";
import AddressBookPage from "./address-book/page";
import AddAddressPage from "./add-address/page";
import OrderHistoryPage from "./order-history/page";
import OrderDetailsPage from "./order-details/page";
import WishlistPage from "./wishlist/page";
import SavedDesignsPage from "./saved-designs/page";
import ReferralsPage from "./referrals/page";
import LoyaltyPage from "./loyalty/page";
import SubscriptionPage from "./subscription/page";
import ReviewsPage from "./reviews/page";
import NotificationsPage from "./notifications/page";
import LogoutPage from "./logout/page";
import ProfilePage from "./profile/page";

const sections = [
    { key: "profile", label: "My Profile", icon: <FaUser /> },
    { key: "edit-profile", label: "Edit Profile", icon: <FaRegEdit /> },
    { key: "change-password", label: "Change Password", icon: <FaLock /> },
    { key: "address-book", label: "Address Book", icon: <FaAddressBook /> },
    { key: "add-address", label: "Add New Address", icon: <FaMapMarkerAlt /> },
    { key: "order-history", label: "Order History", icon: <FaHistory /> },
    { key: "order-details", label: "Order Details", icon: <FaListAlt /> },
    { key: "wishlist", label: "Wishlist", icon: <FaHeart /> },
    { key: "saved-designs", label: "Saved Designs", icon: <FaStar /> },
    { key: "referrals", label: "Referrals", icon: <FaGift /> },
    { key: "loyalty", label: "Loyalty Points / Rewards", icon: <FaCrown /> },
    { key: "subscription", label: "Subscription Management", icon: <FaCreditCard /> },
    { key: "reviews", label: "My Reviews", icon: <FaRegCommentDots /> },
    { key: "notifications", label: "Notifications", icon: <FaBell /> },
    { key: "logout", label: "Logout", icon: <FaSignOutAlt /> },
];

export default function UserDashboardPage() {
    const searchParams = useSearchParams();
    const [activeSection, setActiveSection] = useState("profile");
    const { cartItems, updateQuantity, removeFromCart, getCartTotal, isLoading } = useCart();
    const { userData, isLoading: userDataLoading } = useUserData();

    // Handle URL parameter for section
    useEffect(() => {
        const section = searchParams.get('section');
        if (section) {
            setActiveSection(section);
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10 flex flex-1 max-w-7xl mx-auto w-full pt-8 gap-8">
                {/* Sidebar - Redesigned */}

                <aside className="w-64 flex gap-1 flex-col items-center py-2 px-1 bg-lime-yellow-500 rounded-r-2xl shadow-2xl min-h-[95vh] mb-2">
                    {/* Branding (very compact) */}
                    <div className="w-full flex flex-col items-center pt-2 mb-2">
                        <h1 className="text-lg font-bold text-black mb-2 tracking-wide">Atenoir</h1>
                        <p className="text-black/80 text-xs mb-2">Luxury Fashion Dashboard</p>

                    </div>
                    <nav className="flex flex-col gap-1 w-full flex-1 px-2">
                        {sections.map((section) => (
                            <button
                                key={section.key}
                                onClick={() => setActiveSection(section.key)}
                                className={`flex items-center gap-2 text-left px-4 py-2 rounded-xl transition-all font-medium text-sm group relative
                                    ${activeSection === section.key
                                        ? "bg-white text-black shadow font-bold"
                                        : "bg-black/20 text-black/80 hover:bg-black/30 hover:text-black"}
                                `}
                                style={{ minHeight: 36 }}
                            >
                                <span className={`text-base ${activeSection === section.key ? "text-lime-yellow-500" : "text-black/70 group-hover:text-lime-yellow-700"}`}>{section.icon}</span>
                                <span className="flex-1 truncate">{section.label}</span>
                                {activeSection === section.key && (
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-lime-yellow-500 rounded-full shadow animate-pulse"></span>
                                )}
                            </button>
                        ))}
                    </nav>
                </aside>
                {/* Main Content */}
                <main className="flex-1 flex items-center justify-center">
                    {/* Dynamic Section Content */}
                    <div className="transition-all duration-300 ease-in-out h-[95vh] w-full">
                        {activeSection === "profile" && <ProfilePage userData={userData} />}

                        {activeSection === "edit-profile" && <EditProfilePage userData={userData} />}

                        {activeSection === "change-password" && <ChangePasswordPage />}

                        {activeSection === "address-book" && <AddressBookPage userData={userData} />}

                        {activeSection === "add-address" && <AddAddressPage />}

                        {activeSection === "order-history" && <OrderHistoryPage userData={userData} />}

                        {activeSection === "order-details" && <OrderDetailsPage userData={userData} />}

                        {activeSection === "wishlist" && <WishlistPage userData={userData} />}

                        {activeSection === "saved-designs" && <SavedDesignsPage userData={userData} />}

                        {activeSection === "referrals" && <ReferralsPage userData={userData} />}

                        {activeSection === "loyalty" && <LoyaltyPage userData={userData} />}

                        {activeSection === "subscription" && <SubscriptionPage userData={userData} />}

                        {activeSection === "reviews" && <ReviewsPage userData={userData} />}

                        {activeSection === "notifications" && <NotificationsPage userData={userData} />}

                        {activeSection === "logout" && <LogoutPage />}
                    </div>
                </main>

                {/* Cart Section - Right Sidebar */}
                <aside className="w-80 bg-white/5 rounded-2xl shadow-lg p-6 h-fit max-h-[95vh] sticky top-8">
                    <div className="text-lg font-semibold mb-4 text-lime-yellow-500">My Cart</div>
                    {isLoading ? (
                        <div className="text-gray-400">Loading cart...</div>
                    ) : cartItems.length === 0 ? (
                        <div className="text-gray-400">Your cart is empty.</div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center gap-3 bg-black/60 rounded-lg p-3">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover border border-lime-yellow-500" />
                                    <div className="flex-1">
                                        <div className="text-white font-semibold text-sm">{item.name}</div>
                                        <div className="text-gray-400 text-xs">Qty: {item.quantity}</div>
                                        <div className="text-lime-yellow-500 font-bold text-sm">₹{(item.price * item.quantity).toFixed(2)}</div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-400 hover:text-red-300 text-xs px-2 py-1 rounded hover:bg-red-900/20"
                                        title="Remove"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                            <div className="border-t border-gray-700 pt-3">
                                <div className="text-right text-lime-yellow-500 font-bold text-lg">Total: ₹{getCartTotal().toFixed(2)}</div>
                                <button className="w-full bg-lime-yellow-500 text-black font-bold py-2 rounded mt-3 hover:bg-lime-yellow-600 transition-colors">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
} 