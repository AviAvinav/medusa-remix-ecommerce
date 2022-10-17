import { useState, useEffect } from "react";
import { medusaClient } from "~/lib/config";

import type { Cart as CartType } from "medusa-react/dist/types";

export default function Cart() {
  const [cart, setCart] = useState<CartType>();

  useEffect(() => {
    medusaClient.carts
      .retrieve(localStorage.getItem("cart_id")!)
      .then(({ cart }) => {
        setCart(cart);
      });
  }, [cart]);

  if (cart)
    return (
      <div className="px-10 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen">
        {cart.items.map((variant) => (
          <div
            key={variant.id}
            className="flex flex-col xl:flex-row h-64 my-10 space-x-8 space-y-4 items-center"
          >
            <img className="h-full" src={variant.thumbnail!} />
            <div>
              <h3 className="pt-2 text-white text-xl">{variant.title}</h3>
              <p className="text-slate-400">{variant.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    );
}
