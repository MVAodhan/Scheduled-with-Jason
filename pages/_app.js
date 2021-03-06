import '../styles/globals.css';

import theme from '../styles/ChakraTheme.js';

import { ChakraProvider } from '@chakra-ui/react';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
