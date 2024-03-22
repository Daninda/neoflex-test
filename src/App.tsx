import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { theme } from './styles';
import GlobalStyles, { AppWrapper, PageWrapper } from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HelmetProvider>
          <AppWrapper>
            <Header />
            <PageWrapper>
              <Suspense>
                <PublicRoutes />
                <PrivateRoutes />
              </Suspense>
            </PageWrapper>
            <Footer />
          </AppWrapper>
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
