// 第三方
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// 自定义

// 登录页
const Login: React.FC<RouteComponentProps> = (props) => {
  const login = () => {
    localStorage.setItem('token', '8888');
    const from = props.location?.state?.from || '/';
    props.history.push(from);
  };

  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  };

  return (
    <div>
      <div>
        <label>用户名：</label>
        <input />
      </div>
      <div>
        <label>密码：</label>
        <input />
      </div>
      <div>
        <button onClick={login}>登录</button>
        <button onClick={logout}>登出</button>
      </div>
    </div>
  );
};

export default Login;
