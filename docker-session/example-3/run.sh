docker run -d -p 8080:80 nginx:latest

CP /usr/share/nginx/html


docker run -d -p 8080:80 -v "$PWD/src":/usr/share/nginx/html nginx:latest