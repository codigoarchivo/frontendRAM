import type { AppProps } from "next/app";
import { useApollo } from "@/apollo";
import { ApolloProvider } from "@apollo/client";
import { CounterProvider } from "@/src/context";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme";
import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <CounterProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CounterProvider>
    </ApolloProvider>
  );
}
