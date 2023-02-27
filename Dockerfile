# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the application files into the container
COPY . /usr/share/nginx/html/

# Expose port 80 (the default HTTP port)
EXPOSE 80

# Define the command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

