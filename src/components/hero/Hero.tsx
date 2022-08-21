import { FC, ReactNode } from 'react';

export const Hero: FC = () => {
  return (
    <div>
      <div className="w-screen bg-[#E64980] text-white">
        <div className="flex h-[248px] max-w-7xl flex-col justify-around p-4 sm:mx-auto sm:flex-row sm:items-center sm:justify-between md:pr-20 lg:pr-36">
          <div className='flex flex-col'>
            <h1 className='text-[36px] font-bold'>Shimabu IT University</h1>
            <p className='text-[16px]'>しまぶーのポートフォリオのためのページです</p>
          </div>
        </div>
      </div>
    </div>
  );
};