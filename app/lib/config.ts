import Medusa from '@medusajs/medusa-js';
import { QueryClient } from 'react-query';

const MEDUSA_BACKEND_URL = 'http://localhost:9000';

const STRAPI_API_URL = 'http://127.0.0.1:1337/api';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      retry: 1,
    },
  },
});

const medusaClient = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 });

export { MEDUSA_BACKEND_URL, STRAPI_API_URL, queryClient, medusaClient };
