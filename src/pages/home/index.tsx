// 第三方
import React from 'react';
import { Input } from 'antd';

// 自定义
import Counter from '@/components/Counter';
import Nav from '@/layouts/Nav';

const Home: React.FC = () => {
  return (
    <div>
       <Nav/>
      <Input />
      <Counter />
    </div>
  );
};

export default Home;
