import { useParams } from '@remix-run/react';

import { useCreateLineItem, useProducts } from 'medusa-react';

export default function ProductSlug() {
  const { slug } = useParams();

  const { products, isLoading } = useProducts(
    {
      handle: slug,
    },
    {}
  );

  if (isLoading) {
    return <div></div>; // you can use skeleton loader here instead.
  }

  if (products) {
    const product = products[0];
    return (
      <div className="flex flex-col lg:justify-between lg:flex-row px-10 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen">
        <img src={product.thumbnail!} className="h-96 w-auto" />
        <div>
          <h1 className="text-4xl pb-10 text-white">{product?.title}</h1>
          <p className="w-72">{product.description}</p>
          {isLoading ? (
            <></>
          ) : (
            <button
              className="p-5 w-full bg-slate-400 bg-opacity-25 mt-10 cursor-pointer active:scale-95 transition ease-in-out duration-75"
              // onClick={() => addItem()}
            >
              Add item
            </button>
          )}
        </div>
      </div>
    );
  }
}
