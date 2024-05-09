import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import AddProducts from '@/Components/AddProducts/AddProducts'
import SearchProducts from '@/Components/SearchProducts/SearchProducts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <AddProducts />
      <SearchProducts />
    </>
  )
}
