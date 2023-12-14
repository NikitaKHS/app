# Используем образ Node.js
FROM node:14

WORKDIR /app
# Устанавливаем директорию приложения внутри контейнера
WORKDIR /usr/src/app

# Копируем зависимости приложения
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

EXPOSE 8080

CMD ["npm", "app.js"]
