// 第三方
import React from 'react';

// 自定义
import Nav from '@/layouts/Nav';

// 菜单导航
const Main: React.FC = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

export default Main;
