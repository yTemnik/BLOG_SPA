import React from 'react';
import { hot } from 'react-hot-loader/root';
import CardsList from './components/Content/CardsList/CardsList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import './../global.less';
import { useToken } from './hooks/useToken';

function AppComponent() {

  const [accessToken] = useToken();

  return (
    <>
      <Layout>
        <Header accessToken={accessToken} />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </>
  );
}

export const App = hot(() => <AppComponent />);
