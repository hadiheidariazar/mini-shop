import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'

export default function Products() {
  return (
    <>
        <TitlePage title='Home' />
        <div className="container-2xl px-5 sm:px-10">
            <Header />
        </div>
        <footer className='fixed bottom-0 right-0 left-0 bg-gray-100 dark:bg-gray-700 text-center p-4 border-t-[1px] border-t-green-600'>
            <p> Made with <span className='text-rose-600 dark:text-rose-500'>❤</span> by Hadi Heidariazar </p>
        </footer>
    </>
  )
}