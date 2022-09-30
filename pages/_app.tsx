import { AppProps } from "next/app";
import "../styles/global.css";

import { ContextProvider } from "../context/Context";

function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default App;
