// import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Component {...pageProps} />;
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
