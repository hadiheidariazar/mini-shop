import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'

export default function Products() {
  return (
    <>
        <TitlePage title='Home' />
        <div className="container-2xl px-5 sm:px-10">
            <Header />
        </div>
    </>
  )
}