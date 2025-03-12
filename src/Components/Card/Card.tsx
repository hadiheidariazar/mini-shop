import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

type CardProps = {
    children: React.ReactNode
}

export default function Card({ children }: CardProps) {
    return (
        <div className="card flex flex-col gap-5 bg-white dark:bg-zinc-700 p-5 border-[1px] border-sky-600 rounded-lg">
            <div className='flex items-center justify-center'>
                <img src="/images/1.jpg" alt="Product Image" className='aspect-poster w-auto max-w-48' />
            </div>
            <p className='line-clamp-2 h-12'>
                Mens Casual Pre Mens
                Mens Casual Pre Mens
                Mens Casual Pre Mens
            </p>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <div className='flex items-center'>
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                    <AiOutlineStar className='text-yellow-500' />
                    <AiOutlineStar className='text-yellow-500' />
                </div>
                <p> 99$ </p>
            </div>
            {children}
        </div>
    )
}