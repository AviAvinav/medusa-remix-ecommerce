import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { MedusaProvider, CartProvider } from 'medusa-react';
import { Toaster } from 'react-hot-toast';
import OutletContainer from './components/outletContainer';
import { MEDUSA_BACKEND_URL, queryClient } from './lib/config';

import styles from './styles/app.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Medusa Storefront',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black text-slate-400 overflow-x-hidden justify-center flex">
        <MedusaProvider
          queryClientProviderProps={{ client: queryClient }}
          baseUrl={MEDUSA_BACKEND_URL}
        >
          <CartProvider>
            <OutletContainer>
              <Outlet />
            </OutletContainer>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <Toaster />
          </CartProvider>
        </MedusaProvider>
      </body>
    </html>
  );
}
