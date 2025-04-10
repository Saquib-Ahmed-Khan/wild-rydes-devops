# Use a basic Nginx image
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
