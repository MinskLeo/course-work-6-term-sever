// Файл содержащий конфигурацию основных модулей сервера
module.exports = {
  
  // Конфигурация сервера
  server : {
    PORT: 8080,
    STATIC_FOLDERS: [
      'assets'
    ]
  },

  // Конфигурация подключения к БД
  db: {
    IP: 'localhost',
    PORT: 27017,
    DB_NAME: 'testingcenter'
  },

  // Конфигурация JWT токенов-ключей
  jwt: {
    SECRET: 'JWTBEST'
  }
}
