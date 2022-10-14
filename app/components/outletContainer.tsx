import { useCart } from 'medusa-react';
import { ReactNode, useEffect } from 'react';
import { medusaClient } from '~/lib/config';

interface OutletContainerType {
  children: ReactNode;
}

export default function OutletContainer({ children }: OutletContainerType) {
  const { setCart } = useCart();

  useEffect(() => {
    const localCartId = localStorage.getItem('cart_id');
    localCartId
      ? medusaClient.carts.retrieve(localCartId).then(({ cart }) => {
          setCart(cart);
        })
      : medusaClient.carts.create().then(({ cart }) => {
          localStorage.setItem('cart_id', cart.id);
          setCart(cart);
        });
  }, []);

  return <div>{children}</div>;
}
