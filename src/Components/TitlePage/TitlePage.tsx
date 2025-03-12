import React from 'react'
import { Helmet } from 'react-helmet'

export default function TitlePage({ title }: { title: string }) {
    return (
        <Helmet>
            <title> Mini Shop - {title} </title>
        </Helmet>
    )
}