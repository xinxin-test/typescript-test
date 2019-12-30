import React from 'react';
import { Card } from 'antd';
import { ProgressPlugin } from 'webpack';

export default function(props) {
  return (
    <Card title="测试layout">
      {props.children}
    </Card>
  )
}
