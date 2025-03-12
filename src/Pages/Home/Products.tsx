import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function Products() {
  return (
    <>
      <TitlePage title='Home' />
      <div className="container-2xl px-5 sm:px-10">
        <Header />

        <main className='mt-12 sm:mt-16 mb-24'>
          <div className='flex justify-center'>
            <h2 className='inline-block text-2xl sm:text-3xl text-center bg-white dark:bg-zinc-700 p-6 sm:p-8 rounded-full'> All Products </h2>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ipad:grid-cols-4 gap-3 mt-12 sm:mt-16">
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
              <button className='border-[1px] border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded-md p-2 transition-colors'> Add To Basket </button>
            </div>
          </div>
        </main>
      </div>
      <footer className='fixed bottom-0 right-0 left-0 bg-gray-100 dark:bg-gray-700 text-center p-4 border-t-[1px] border-t-sky-600'>
        <p> Made with <span className='text-rose-600 dark:text-rose-500'>❤</span> by Hadi Heidariazar </p>
      </footer>
    </>
  )
}