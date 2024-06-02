"use client";

    import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
    import React from "react";
    import { useState } from "react";
    import { Toaster } from "react-hot-toast";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

    const Providers = ({ children }) => {
    const [queryClient] = useState(() => 
        new QueryClient({
        defaultOptions: {
            queries: {
            stalemate: 1000 * 60 ,
            },
        },
        }),
    );
    return (
        <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" />
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
    };

export default Providers;
