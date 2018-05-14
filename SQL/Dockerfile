FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl build-essential apt-transport-https
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

COPY . /var/www
WORKDIR /var/www

RUN npm install

ENV PORT=80
EXPOSE 80

CMD npm start
