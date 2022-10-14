import { StrapiProductData, StrapiResponseType } from '~/types/StrapiResponse';

export const getHomePageData = async () => {
  const homePage: StrapiResponseType = await (
    await fetch('http://localhost:1337/api/home-page?populate=*')
  ).json();

  const { data } = homePage;

  const { attributes } = data;

  const heroText = attributes.hero_text;
  const products = attributes.products_list.data;
  const smallHeading = attributes.heading_2;

  const homePageData = { heroText, products, smallHeading };
  return homePageData;
};

export type homePageDataType = {
  heroText: {
    id: number;
    start_text: string;
    mid_text: string;
    end_text: string;
  };
  products: StrapiProductData[];
  smallHeading: string;
};
