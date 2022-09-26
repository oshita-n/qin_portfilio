import { FC, ReactNode } from 'react';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <div>
      <header className='flex w-screen h-[65px] items-center justify-center font-bold'>
        <li className="list-none"><Link href="/"><h1 className='ml-5'>Shimabu IT University</h1></Link></li>
        <ul className='flex ml-auto mr-5'>
            <li className='ml-2'><Link href='/about'>About</Link></li>
            <li className='ml-2'><Link href='#'>Blog</Link></li>
            <li className='ml-2'><Link href='#'>Portfolio</Link></li>
            <li className='ml-2'><Link href='/contact'>Contact</Link></li>
        </ul>
      </header>
    </div>
  );
};