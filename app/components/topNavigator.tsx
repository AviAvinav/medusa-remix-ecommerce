import { Link } from '@remix-run/react';

export default function TopNavigator() {
  return (
    <nav className="flex w-screen fixed top-0 right-0 left-0 items-center py-4 flex-row justify-between px-10 sm:px-20 md:px-44 z-10 bg-black">
      <h1 className="text-xl">MRS</h1>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
