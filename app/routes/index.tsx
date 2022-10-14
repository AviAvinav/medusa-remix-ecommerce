import { useLoaderData } from '@remix-run/react';

import { getHomePageData, homePageDataType } from '~/models/home.server';
import ProductCard from '~/components/productCard';

export const loader = async () => {
  const homePageData = await getHomePageData();

  return homePageData;
};

export default function Index() {
  const { heroText, products, smallHeading } =
    useLoaderData<homePageDataType>();

  return (
    <div className="px-10 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen">
      {/* Hero Section */}
      <div>
        <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-8xl relative font-medium lg:leading-[1.15] xl:leading-[1.2]">
          {heroText.start_text}{' '}
          {heroText.mid_text.split(' ').map((text) => (
            <>
              <span className="relative text-gray-50">
                {text}
                <div className="h-1 bg-emerald-200 w-full absolute bottom-0 left-0 inline-block" />
              </span>{' '}
            </>
          ))}
          {heroText.end_text}
        </h1>
      </div>

      <div className="flex flex-col items-center pt-40 pb-44">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl pb-10 text-white">
          {smallHeading}
        </h2>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-6">
          {products.map(({ attributes }) => (
            <ProductCard
              key={attributes.medusa_id}
              image={attributes.thumbnail}
              handle={attributes.handle}
              title={attributes.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
