import { FC, ReactNode } from 'react';

export const Header: FC = () => {
  return (
    <div>
      <header className='flex w-screen h-[65px] items-center justify-center font-bold'>
        <h1 className='ml-5'>Shimabu IT University</h1>
        <ul className='flex ml-auto mr-5'>
            <li className='ml-2'><a href='#'>About</a></li>
            <li className='ml-2'><a href='#'>Blog</a></li>
            <li className='ml-2'><a href='#'>Portfolio</a></li>
            <li className='ml-2'><a href='#'>Contact</a></li>
        </ul>
      </header>
    </div>
  );
};