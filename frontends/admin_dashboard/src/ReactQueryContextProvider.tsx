import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { DefaultOptions } from "react-query/types/core/types";

const config: {
  defaultOptions: DefaultOptions;
} = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
};

const queryClient = new QueryClient(config);
(window as any).queryClient = queryClient;
export const ReactQueryClientProvider: FC<any> = ({ children }) => (
  <QueryClientProvider client={queryClient} contextSharing={true}>
    {children}
  </QueryClientProvider>
);
