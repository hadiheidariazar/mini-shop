import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Card from '../../Components/Card/Card'

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
            <Card>
              <button className='border-[1px] border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded-md p-2 transition-colors'> Add To Basket </button>
            </Card>
          </div>
        </main>
      </div>
      <footer className='fixed bottom-0 right-0 left-0 bg-gray-100 dark:bg-gray-700 text-center p-4 border-t-[1px] border-t-sky-600'>
        <p> Made with <span className='text-rose-600 dark:text-rose-500'>❤</span> by Hadi Heidariazar </p>
      </footer>
    </>
  )
}