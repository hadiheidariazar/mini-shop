import React, { createContext, useEffect, useState } from "react"
import Product from "../Types/Product.types"

type ContextCartType = {
    userCart: Product[],
    addProduct: (id: number) => void,
    removeProduct: (id: number) => void,
    removeAll: () => void,
    shop: Product[],
    isPending: boolean,
    isError: boolean
}

type ContextCartChildrenProps = {
    children: React.ReactNode
}

export const ContextCart = createContext({} as ContextCartType)

export default function ContextCartProvider({ children }: ContextCartChildrenProps) {

    const [userCart, setUserCart] = useState<Product[]>([])
    const [shop, setShop] = useState<Product[]>([])
    const [isPending, setIsPending] = useState<boolean>(false as boolean)
    const [isError, setIsError] = useState<boolean>(false as boolean)

    const addProduct = (id: number) => {
        setUserCart(prevProducts => {
            const mainProductInCart = prevProducts.find(product => product.id === id) as Product

            if (mainProductInCart) {
                return prevProducts.map(product => {
                    if (product.id === id) {
                        return { ...product, count: product.count + 1 }
                    } else {
                        return product
                    }
                })
            } else {
                const mainProductInShop = shop.find(product => product.id === id) as Product
                return [...prevProducts, { ...mainProductInShop, count: 1 }]
            }
        })
    }

    const removeProduct = (id: number) => setUserCart(prevProducts => prevProducts.filter(product => product.id !== id))

    const removeAll = () => setUserCart([])

    useEffect(() => {
        (async () => {
            setIsPending(true)
            
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = (await res.json()) as Product[]

                setShop(data)
            } catch (error) {
                setIsError(true)
                setShop([])
            }

            setIsPending(false)
        })()
    }, [])

    return (
        <ContextCart value={{ userCart, shop, addProduct, removeProduct, removeAll, isPending, isError }}>
            {children}
        </ContextCart>
    )
}