import { FC, ReactNode } from 'react';

export const Header: FC = () => {
  return (
    <div>
      <header className='flex w-screen h-[65px] items-center justify-center font-bold'>
        <li className="list-none"><a href="/"><h1 className='ml-5'>Shimabu IT University</h1></a></li>
        <ul className='flex ml-auto mr-5'>
            <li className='ml-2'><a href='/about'>About</a></li>
            <li className='ml-2'><a href='#'>Blog</a></li>
            <li className='ml-2'><a href='#'>Portfolio</a></li>
            <li className='ml-2'><a href='/contact'>Contact</a></li>
        </ul>
      </header>
    </div>
  );
};