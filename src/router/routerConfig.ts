// 第三方
import React, { lazy } from 'react';

// 自定义
interface IRouterConfig {
  [propName: string]: React.LazyExoticComponent<() => JSX.Element>;
}

// 路由和组件的映射关系
export const routerConfig: IRouterConfig = {
  home: lazy(() => import('@/pages/home')), // 首页
  login: lazy(()=> import('@/pages/login')), // 登录页
  application: lazy(()=> import('@/pages/application')), // 应用
  hooks: lazy(() => import('@/pages/hooksDemo')), // hooksDemo
};
