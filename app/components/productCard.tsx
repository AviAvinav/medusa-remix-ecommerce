import { Link } from '@remix-run/react';

interface ProductCardType {
  image: string;
  title: string;
  handle: string;
}

export default function ProductCard({ image, title, handle }: ProductCardType) {
  return (
    <Link to={`/products/${handle}`}>
      <div className="flex flex-col space-y-1 p-2 hover:bg-slate-400 hover:bg-opacity-25 cursor-pointer active:scale-95 transition ease-in-out duration-75">
        <img src={image} alt="" />
        <h3 className="pt-2 text-white text-[1.15rem] sm:text-xl">{title}</h3>
      </div>
    </Link>
  );
}
