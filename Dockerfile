FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# CRA uses port 3000
EXPOSE 3000

# IMPORTANT: HOST=0.0.0.0 is required for Docker
CMD ["sh", "-c", "HOST=0.0.0.0 npm start"]
