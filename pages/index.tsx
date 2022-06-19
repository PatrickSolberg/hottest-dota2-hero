import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center'>Which Dota 2 Hero is Hottest?</div>
      <div className='p-2'/>
      {/* Vote Comp */}
      <div className='border rounded p-8 flex items-center justify-between max-w-2xl'>
        <div className="w-16 h-16 bg-red-200" />
        <div className='p-8'>Vs</div>
        <div className="w-16 h-16 bg-red-200" />
        <div />
      </div>
      {/* Vote Comp */}

    </div>
  )
}

export default Home
