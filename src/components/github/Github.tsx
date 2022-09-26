import { FC, ReactNode } from 'react';
import { GithubItem } from './GithubItem';

export const Github: FC = () => {
  return (
    <div>
        <div className='border-b border-[#E9ECEF] mt-[80px] mb-2'>
            <h1 className='font-bold mb-[20px]'>Github</h1>
        </div>
        <GithubItem />
        <div className="text-center">
            <button className="bg-[#25262B] text-white px-4 py-2 rounded-full mt-2 mb-2">View All</button>
        </div>
    </div>
  );
};