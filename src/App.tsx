import { Suspense, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer';
import Header from './components/Header';
import { useAppDispatch } from './hooks';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { fetchUser } from './store/slices/UserSlice';
import GlobalStyles, { AppWrapper, PageWrapper } from './styles/global';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

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
