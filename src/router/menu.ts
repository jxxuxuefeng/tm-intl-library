interface IMenuData {
  name: string;
  icon: string;
  path: string;
  code: string;
  children?: IMenuData[];
}

export const menuData: IMenuData[] = [
  {
    name: '登录',
    icon: 'login',
    path: '/login',
    code: 'login'
  },
  {
    name: '应用',
    icon: 'application',
    path: '/application',
    code: 'application',
  },
  {
    name: 'Hooks',
    icon: 'hooks',
    path: '/hooks',
    code: 'hooks',
  },
];
