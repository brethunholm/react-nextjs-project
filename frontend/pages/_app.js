/* eslint-disable react/jsx-props-no-spreading */

import Page from '../components/Page';

/* eslint-disable react/prop-types */
export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
