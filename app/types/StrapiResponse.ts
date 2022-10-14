export type StrapiResponseType = {
  data: {
    id: number;
    attributes: {
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      hero_text: {
        id: number;
        start_text: string;
        mid_text: string;
        end_text: string;
      };
      products_list: {
        data: Array<StrapiProductData>;
      };
      heading_2: string;
    };
  };
  meta: {};
};

export type StrapiProductData = {
  id: number;
  attributes: {
    medusa_id: string;
    title: string;
    subtitle: string | null;
    description: string;
    handle: string;
    is_giftcard: boolean;
    status: 'draft' | 'proposed' | 'published' | 'rejected';
    thumbnail: string;
    discountable: boolean;
    weight: number;
    product_length: null;
    width: null;
    height: null;
    hs_code: null;
    origin_country: null;
    mid_code: null;
    material: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
};
