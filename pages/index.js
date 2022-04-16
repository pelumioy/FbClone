import { useSession, signIn, signOut } from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'
import Login from "../components/Login"
import Header from '../components/Header'
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"

export default function Home() {
  const { data: session } = useSession()
  if (!session) {
    return <Login />
  }
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
      </main>
    </div>
  )
}


