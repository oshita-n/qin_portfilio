import { FC, ReactNode } from 'react';
import { TwitterItem } from './TwitterItem';

export const Twitter: FC = () => {
  return (
    <div>
        <div className='border-b border-[#E9ECEF] mt-[80px] mb-2'>
            <h1 className='font-bold mb-[20px]'>Twitter</h1> 
        </div>
        <TwitterItem />
        <div className="text-center">
            <button className="bg-[#25262B] text-white px-4 py-2 rounded-full mt-2 mb-2">View All</button>
        </div>
    </div>
  );
};