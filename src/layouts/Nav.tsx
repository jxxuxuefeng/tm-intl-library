// 第三方
import React from 'react';
import { Link } from 'react-router-dom';

// 自定义
import { menuData } from '@/router';
import styles from './Nav.less';

// 菜单导航
const Nav: React.FC = () => {
  return (
    <ul className={styles.wrapper}>
       <li key={'home'}>
            <Link to={'/'}>首页</Link>
          </li>
      {menuData.map((item) => {
        return (
          <li key={item.code}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
