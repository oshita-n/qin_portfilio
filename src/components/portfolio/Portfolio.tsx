import { FC, ReactNode } from 'react';
import { CardPortion } from './card';
import { data } from "./data";
import { useRouter } from "next/router"
import { useViewportSize } from "../../lib/mantine/useViewportSize";


export const Portfolio: FC = () => {
  const router = useRouter();
  const root = router.asPath === "/";
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;
  const numberToShow = root ? (isMobile ? 3 : 6) : data.length;
  let filteredData = data.slice(0, numberToShow);
  return (
    <div>
        <div className='border-b border-[#E9ECEF] mt-[80px]'>
            <h1 className='font-bold mb-[20px]'>Portfolio</h1>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => {
          return (
            <CardPortion
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          );
        })}
      </ul>
    </div>
  );
};