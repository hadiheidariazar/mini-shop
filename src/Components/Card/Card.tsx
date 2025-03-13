import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Product from '../../Types/Product.types'

type CardProps = {
    product: Product
    children: React.ReactNode
}

export default function Card({ product, children }: CardProps) {
    return (
        <div className="card flex flex-col gap-5 bg-white dark:bg-zinc-700 p-5 border-[1px] border-sky-600 rounded-lg">
            <div className='flex items-center justify-center'>
                <img src={product.image} alt={product.title} className='aspect-poster w-auto max-w-44 rounded-md' />
            </div>
            <p className='line-clamp-2 h-12'>{product.title}</p>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <div className='flex items-center'>
                    {Array(Math.round(product.rating.rate)).fill(0).map(({}, index) => (
                        <AiFillStar className='text-yellow-500' key={index + 1} />
                    ))}
                    {Array(5 - Math.round(product.rating.rate)).fill(0).map(({}, index) => (
                    <AiOutlineStar className='text-yellow-500' key={index + 1} />
                    ))}
                </div>
                <p> {product.price.toLocaleString()}$ </p>
            </div>
            {children}
        </div>
    )
}