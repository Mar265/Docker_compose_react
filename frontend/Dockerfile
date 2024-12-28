# Użyj stabilnej wersji Node.js
FROM node:16

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json, aby zainstalować zależności
COPY package*.json ./
RUN npm install

# Skopiuj resztę plików aplikacji
COPY . .

# Eksportuj port 3000
EXPOSE 3000

# Uruchom aplikację React
CMD ["npm", "start"]
