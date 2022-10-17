import { useParams } from '@remix-run/react';

import { useCart, useCreateLineItem, useProducts } from 'medusa-react';
import toast from 'react-hot-toast';
import { formatPrice } from '~/lib/formatPrice';

export default function ProductSlug() {
  const { slug } = useParams();

  const { products } = useProducts(
    {
      handle: slug,
    },
    {}
  );

  const { cart } = useCart();

  const { mutate, isLoading } = useCreateLineItem(cart?.id!);

  const addItem = () => {
    mutate(
      {
        variant_id: products?.slice(0, 1)[0].variants[0].id!,
        quantity: 1,
      },
      {
        onSuccess: () => {
          toast('Added to Cart!');
        },
      }
    );
  };

  if (!products || !cart) {
    return <div></div>; // you can use skeleton loader here instead.
  }

  const product = products[0];
  return (
    <div className="flex flex-col items-center lg:justify-between lg:flex-row px-10 pb-44 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen">
      <img src={product.thumbnail!} className="h-96 w-auto" />
      <div>
        <h1 className="text-4xl pt-5 lg:pt-0 pb-5 lg:pb-10 text-white">
          {product.title}
        </h1>
        <p className="w-72">{product.description}</p>
        <p className="text-xl text-white pt-5">
          {formatPrice(product.variants[0], cart)}
        </p>
        <button
          className="p-5 rounded-md w-full bg-slate-400 bg-opacity-25 mt-10 cursor-pointer active:scale-95 transition ease-in-out duration-75"
          onClick={() => addItem()}
        >
          Add item
        </button>
      </div>
    </div>
  );
}
