#nginx/Dockerfile
FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d

#RUN mkdir /var/www/html -p && touch /var/www/html/index.html

#EXPOSE 8080