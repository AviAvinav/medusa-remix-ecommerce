import { ProductVariant } from '@medusajs/medusa';
import { formatVariantPrice, useCart } from 'medusa-react';

export const formatPrice = (variant: ProductVariant) => {
  const { cart } = useCart();

  if (cart)
    return formatVariantPrice({
      variant: variant,
      region: cart.region,
    });
};
