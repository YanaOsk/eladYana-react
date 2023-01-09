import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Exam from './Exam'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Exam></Exam>
    </>
  )
}
