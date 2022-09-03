import { FC, ReactNode } from 'react';
import { BlogData } from './BlogData';
import { useViewportSize } from "../../lib/mantine/useViewportSize";
import { useRouter } from "next/router";
import { ContentsPortion } from './BlogItem';


export const Blog: FC = () => {
  const router = useRouter();
  const root = router.asPath === "/";
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;
  const numberToShow = root ? (isMobile ? 2 : 5) : BlogData.length;
  let filteredData = BlogData.slice(0, numberToShow);

  return (
    <div>
        <div className='border-b border-[#E9ECEF] mt-[80px]'>
            <h1 className='font-bold mb-[20px]'>Blog</h1>
        </div>
        <div>
          {/* コンテンツ表示部分 */}
          {filteredData.map((item) => {
            return (
              <ContentsPortion
                key={item.id}
                title={item.title}
                description={item.description}
                createdAt={item.createdAt}
              />
            );
          })}
        </div>
        <div className="text-center">
          <button className="bg-[#25262B] text-white px-4 py-2 rounded-full mt-2">View All</button>
        </div>
    </div>
  );
};