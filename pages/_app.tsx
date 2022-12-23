import { IntlProvider } from "react-intl";

import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale="en">
      <Component {...pageProps} />
    </IntlProvider>
  );
}
