import type { ProductVariant } from '@medusajs/medusa';
import { formatVariantPrice } from 'medusa-react';
import type { Cart } from 'medusa-react/dist/types';

export const formatPrice = (variant: ProductVariant, cart: Cart) => {
  if (cart)
    return formatVariantPrice({
      variant: variant,
      region: cart.region,
    });
};
