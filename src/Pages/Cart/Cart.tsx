import Header from '../../Components/Header/Header'
import { use } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import Card from '../../Components/Card/Card'
import { ContextCart } from '../../Context/ContextCart'

export default function Cart() {

    const context = use(ContextCart)

    return (
        <>
            <title>Mini Shop - Cart</title>
            <div className="container-2xl px-5 sm:px-10">
                <Header />

                <main className='mt-14 mb-24'>
                    {context.userCart.length === 0 ? (
                        <div className='flex flex-col gap-5 items-center'>
                            <img src="/images/empty.png" alt="Null Basket" className='w-60 xs:w-72' />
                            <p className='text-xl xs:text-2xl'>Your Basket Is Empty :((</p>
                        </div>
                    ) : (
                        <>
                            <div className='flex flex-col xs:flex-row items-center justify-between gap-x-3 gap-y-5'>
                                <h2 className='text-2xl xs:text-xl sm:text-2xl'> All Products In Basket </h2>
                                <button className='flex items-center justify-center gap-x-1 bg-sky-500 text-white py-2 px-4 w-max sm:w-60 rounded-md hover:bg-sky-600 transition-colors' onClick={context.removeAll}>
                                    <p>
                                        Remove All Product
                                    </p>
                                    <FaRegTrashCan />
                                </button>
                            </div>
                            <div className={`${(!context.isPending && !context.isError) && "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ipad:grid-cols-4 gap-3"} mt-16 sm:mt-20`}>
                                {context.userCart.map(product => (
                                    <Card key={product.id} product={product}>
                                        <p className='flex flex-wrap justify-center bg-gray-200/60 dark:bg-zinc-600 p-2 text-xl rounded-md'>
                                            count: {product.count.toLocaleString()}
                                        </p>
                                        <button className='border-[1px] border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded-md p-2 transition-colors' onClick={() => context.removeProduct(product.id)}> Remove From Basket </button>
                                    </Card>
                                ))}
                            </div>
                        </>
                    )}
                </main>
            </div>
            <footer className='fixed bottom-0 right-0 left-0 bg-gray-100 dark:bg-gray-700 text-center p-4 border-t-[1px] border-t-sky-600'>
                <a href='https://github.com/hadiheidariazar' target='_blank'> Made with <span className='text-rose-600 dark:text-rose-500'>❤</span> by Hadi Heidariazar </a>
            </footer>
        </>
    )
}