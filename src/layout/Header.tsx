import type { NextPage } from 'next'

export const Header: NextPage = () => {
  return (
    <div>
      <header className='flex w-screen h-[65px] bg-sky-400 items-center justify-center'>
        <h1 className='ml-5'>Shimabu IT University</h1>
        <ul className='flex ml-auto mr-5'>
            <li className='ml-2'><a href='#'>About</a></li>
            <li className='ml-2'><a href='#'>Blog</a></li>
            <li className='ml-2'><a href='#'>Portfolio</a></li>
            <li className='ml-2'><a href='#'>Contact</a></li>
        </ul>
      </header>
    </div>
  )
}