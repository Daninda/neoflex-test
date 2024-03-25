import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import GlobalStyles, { AppWrapper, PageWrapper } from './styles/global';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
