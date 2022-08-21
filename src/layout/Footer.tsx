import Image from 'next/image'
import { FC, ReactNode } from 'react';

export const Footer: FC = () => {
  return (
    <div>
      <footer className="absolute bottom-0 w-screen border-b border-[#E9ECEF]">
        <div className='flex items-center justify-center h-[65px] text-[10px] text-[#868E96]'>
          <div className='flex flex-col'>
            <p>© 2022 Shimabu IT University</p>
          </div>
        </div>
      </footer>
    </div>
  )
}