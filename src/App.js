import React from 'react';
import { Button, Space,Progress, Input } from 'antd';
import './App.less';

const App = () => (
  <div className="App">
    <Space direction='vertical' size={30}>
    <Button type="primary">Button</Button>
    <Input placeholder='type here'></Input>
    <Progress percent={50} type='circle'></Progress>
    </Space>
  </div>
);

export default App;