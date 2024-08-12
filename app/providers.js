"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaltOptions: {
        queries: {
          staleTime: 60 * 1000,
        },
      },
    });
  });
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" />
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default Providers;
