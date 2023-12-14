import Image from 'next/image'

import Navbar from '@/components/_nav'
import Sidebar from '@/components/sidebar';
import Shape from '@/components/_shape';
import Divider from '@/components/_divider';
import Head from 'next/head';
import InfoComponent from '@/components/_info';
import SearchBar from '@/components/searchBar';
import ChatContainer from '@/components/_chatContainer';

export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <main className="min-h-screen relative">
        <Shape style='max-w-[20em] w-[100%] max-h-[15em] h-full rounded-full absolute bg-[#8b008b] left-[50%] top-[-10%] transform translate-x-[-50%]' />
        <div className='w-full h-[100vh] backdrop-blur-3xl relative'>
          <Navbar />
          <Divider style='mt-[0.2em] bg-[#95959552] h-[1px]' />

          <div className='main p-2 w-full h-full'>
            <InfoComponent />
            <SearchBar />
            <ChatContainer />
          </div>

        </div>
        <Sidebar />
      </main>
    </div>
  )
}
