# Use official Node.js image
FROM node:16-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose port 5000 (Backend API port)
EXPOSE 5000

# Start the backend server
CMD ["node", "app.js"]
