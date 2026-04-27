const express = require('express');
const app = express();
// Railway는 환경 변수로 PORT를 주입해주므로, 이를 우선적으로 사용합니다.
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Railway 배포 성공!",
        status: "Running",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});