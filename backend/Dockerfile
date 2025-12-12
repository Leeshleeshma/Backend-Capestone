FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of backend code
COPY . .

# Expose backend port
EXPOSE 8080

# Start command
CMD ["npm", "start"]
