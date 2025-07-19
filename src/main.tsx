import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider> 
        <App />
        <ReactQueryDevtools initialIsOpen={false } />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);
