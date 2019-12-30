import React from 'react';
import { Card, Button } from 'antd';
import router from 'umi/router';

/**
 * title: test 我是扩展路由
 * Routes:
 * - ./src/routes/a1.tsx
 */

export default function() {
  const goToCodePage = () => {
    router.push('../Code/Class');
  }
  return (
    <Card title="m">
      <p>test 扩展路由</p>
      <Button onClick={goToCodePage}>goToCodePage</Button>
    </Card>
  )
}
