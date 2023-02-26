import { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartContext {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

interface ShoppingCartProviderProps {
    children: ReactNode
}

interface CartItem {
    id: number
    quantity: number
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, {id, quantity: 1}]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {... item, quantity: item.quantity ++}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {... item, quantity: item.quantity --}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}