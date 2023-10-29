FROM node:20
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm i

COPY . /app

ENV PORT=3000
ENV POSTGRES_USER=git
ENV POSTGRES_PASSWORD=git
ENV POSTGRES_DB=git

RUN apt-get update && apt-get install -y postgresql-client

EXPOSE 3000
EXPOSE 5432

CMD ["sh", "-c", "service postgresql start && npm start"]