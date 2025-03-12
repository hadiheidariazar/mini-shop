import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'

export default function Cart() {
    return (
        <>
            <TitlePage title='Cart' />
            <div className="container-2xl px-5 sm:px-10">
                <Header />

                <main className='mt-10 sm:mt-14 mb-24'>
                    <div className='flex flex-col gap-5 items-center'>
                        <img src="/images/empty.png" alt="Null Basket" className='w-60 xs:w-72' />
                        <p className='text-xl xs:text-2xl'>Your Basket Is Empty :((</p>
                    </div>
                </main>
            </div>
            <footer className='fixed bottom-0 right-0 left-0 bg-gray-100 dark:bg-gray-700 text-center p-4 border-t-[1px] border-t-sky-600'>
                <p> Made with <span className='text-rose-600 dark:text-rose-500'>❤</span> by Hadi Heidariazar </p>
            </footer>
        </>
    )
}