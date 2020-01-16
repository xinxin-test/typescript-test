import React, { useState } from 'react';
import { Card, Input, Button } from 'antd';

/**
 * 大文件上传，断点续传
 */
function Test() {
  const [file, setFile] = useState<any>()
  const changeUpload = (e: any) => {
    console.log(e.target.files)
    const [file] = e.target.files;
    if (!file) return;
    setFile(file);
  }
  const handelSubmit = () => {
    if(!file) return;
    // 生成切片的唯一标识，方便拼接
    const fileChunkList = createFileChunk(file);
    fileChunkList.map(({file}, index) => ({
      chunk: file,
      hash: file.name + "-" + index // 文件名 + 数组下标
    }))
    // 然后创建请求队列，promise.all并发请求
  }

  function createFileChunk(file: any, length = 10) {
    const fileChunkList = [];
    const chunkSize = Math.ceil(file.size / length);
    let cur = 0;
    while(cur < file.size) {
      fileChunkList.push({ file: file.slice(cur, cur + chunkSize) });
      cur += chunkSize;
    }
    
    return fileChunkList;
  }

  return (
    <Card>
      <Input type="file" onChange={changeUpload} />
      <Button onClick={handelSubmit}>提交</Button>
    </Card>
  )
}

export default Test;
