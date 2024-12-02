# Use an official Node.js image as a base
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (if present) from your frontend directory
COPY ./101411341_comp3123_assignment2_reactjs/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY ./101411341_comp3123_assignment2_reactjs/ .

# Expose the port on which the frontend will run
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
