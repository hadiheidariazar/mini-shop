import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TbMoon, TbSunHigh } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import toggleTheme from '../../Features/toggleTheme'
import { use } from 'react'
import { ContextCart } from '../../Context/ContextCart'

export default function Header() {

    const context = use(ContextCart)

    return (
        <header className='flex justify-between items-center gap-x-5 mt-5'>
            <Link to="/" className='brand text-3xl xs:text-4xl' translate="no"> Mini Shop </Link>
            <div className='flex items-center child:text-2xl child:xs:text-3xl gap-x-6 xs:gap-x-10'>
                <button onClick={toggleTheme}>
                    <TbMoon className='dark:hidden' />
                    <TbSunHigh className='hidden dark:block' />
                </button>
                <div className='w-px h-7 xs:h-8 bg-black/50 dark:bg-white/50'></div>
                <Link to="/cart" className='relative mr-1 xs:mr-1.5'>
                    <AiOutlineShoppingCart />
                    {context.userCart.length > 0 && (
                        <span className='absolute -bottom-0.5 -right-1 xs:-right-1.5 bg-green-600 text-xs xs:text-sm text-white size-4 xs:size-5 rounded-full flex justify-center items-center'>
                            {context.userCart.length > 9 ? "+9" : context.userCart.length.toLocaleString()}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    )
}