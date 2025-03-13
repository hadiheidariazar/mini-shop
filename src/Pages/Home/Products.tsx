import Header from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'
import { use } from 'react'
import { ContextCart } from '../../Context/ContextCart'
import Loading from '../../Components/Loading/Loading'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

export default function Products() {

  const context = use(ContextCart)
  const navigate = useNavigate()

  const addProductToCart = (productId: number): void => {
    context.addProduct(productId)
    
    swal({
      text: 'The product has been successfully added to your cart',
      icon: 'success',
      buttons: ['Got it', 'Go to cart']
    }).then(res => {
      if (res) {
        navigate('/cart')
      }
    })
  }

  const swalButtons = document.querySelector('.swal-modal .swal-footer') as HTMLButtonElement
  if (swalButtons) {
    swalButtons.classList.add('text-center')
  }

  return (
    <>
      <title>Mini Shop - Home</title>
      <div className="container-2xl px-5 sm:px-10">
        <Header />

        <main className='mt-12 sm:mt-16 mb-24'>
          <div className='flex justify-center'>
            <h2 className='inline-block text-2xl sm:text-3xl text-center bg-white dark:bg-zinc-700 p-6 sm:p-8 rounded-full'> All Products </h2>
          </div>
          <div className={`${(!context.isPending && !context.isError) && "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ipad:grid-cols-4 gap-3"} mt-12 sm:mt-16`}>
            {context.isPending ? <Loading /> : (
              context.shop.map(product => (
                <Card key={product.id} product={product}>
                  <button className='border-[1px] border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded-md p-2 transition-colors' onClick={() => addProductToCart(product.id)}> Add To Basket </button>
                </Card>
              ))
            )}
            {context.isError && <h2 className='text-xl text-center w-full'>Please check your internet :(</h2>}
          </div>
        </main>
      </div>
      <footer className='fixed bottom-0 right-0 left-0 bg-gray-100 dark:bg-gray-700 text-center p-4 border-t-[1px] border-t-sky-600'>
        <p> Made with <span className='text-rose-600 dark:text-rose-500'>❤</span> by Hadi Heidariazar </p>
      </footer>
    </>
  )
}