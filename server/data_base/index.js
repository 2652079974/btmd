// 导入mysql
const mysql = require('mysql')

// 创建数据库连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'btmd'
})

module.exports = pool