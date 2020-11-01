// 第三方
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// 自定义
import './global.less';
import styles from './App.less';
import { routerData } from '@/router';
import store from '@/store/store';
import Login from '@/pages/login';
import Home from './pages/home';
import Main from '@/layouts/Main';

interface IRouteProps {
  path: string;
  component: React.FC;
}

const PrivateRoute = (props: IRouteProps) => {
  if (localStorage.getItem('token')) {
    return <Route exact path={props.path} component={props.component} />;
  } else {
    return <Redirect to={{ pathname: '/login', state: { from: props.path } }} />;
  }
};

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router>
          <Suspense
            fallback={
              <div className={styles.loading}>
                <Spin />
              </div>
            }
          >
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path="/login" component={Login} />
              <Main>
                <Route>
                  <Switch>
                    {routerData.map((item) => {
                      return <PrivateRoute path={item.path} component={item.component} key={item.path} />;
                    })}
                  </Switch>
                </Route>
              </Main>
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
