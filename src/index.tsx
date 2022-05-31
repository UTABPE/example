import React from 'react';
import { render } from 'react-dom';
import './index.less';
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from '@components/templates/GlobalStyle';
import { PageMetaContextProvider } from '@context/PageMetaContext';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './auth/keycloak';
import { notification, Spin } from 'antd';
import { appLocalStorage } from '@utils/appLocalStorage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { cacheTime: 0, refetchOnWindowFocus: false, retry: false },
  },
});

render(
  <React.StrictMode>
    <GlobalStyle />
    <PageMetaContextProvider>
      {/* <ReactKeycloakProvider
        authClient={keycloak}
        autoRefreshToken
        onTokens={appLocalStorage.persistTokens}
        initOptions={{
          token: appLocalStorage.getAuthToken(),
          refreshToken: appLocalStorage.getRefreshToken(),
        }}
        onEvent={(eventType) => {
          if (eventType === 'onInitError') {
            notification.error({
              message: 'Ошибка подключения к сервису аутентификации',
            });
          } else if (eventType === 'onAuthError') {
            console.log('nice', 'not nice');
            keycloak.updateToken(300);
          } else if (eventType === 'onAuthRefreshError') {
            keycloak.logout();
          }
        }}
        LoadingComponent={
          <div className="w-screen h-screen flex justify-center items-center">
            <Spin size="large" />
          </div>
        }
      > */}
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
      {/* </ReactKeycloakProvider> */}
    </PageMetaContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
