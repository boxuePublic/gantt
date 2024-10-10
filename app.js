const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

// 提供当前文件夹下的静态文件（例如 HTML 文件）
app.use(express.static(path.join(__dirname)));

// 创建一个代理路由
app.get('/api/scheduling/solution/:id', async (req, res) => {
  const id = req.params.id;
  const apiUrl = `http://192.168.100.102:8080/api/scheduling/solution/${id}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // 设置 CORS 头部
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data); // 返回从目标 API 获取的数据
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});