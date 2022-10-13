import Medusa from '@medusajs/medusa-js';
import { QueryClient } from 'react-query';

const MEDUSA_BACKEND_URL =
  process.env.MEDUSA_BACKEND_URL || 'http://localhost:9000';

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

export { MEDUSA_BACKEND_URL, queryClient, medusaClient };
