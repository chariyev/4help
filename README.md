# 4help

IT monitoring and HelpDesk

## How to use this API?

-   install ubuntu
-   upgrate and update ubuntu:
    -   `sudo apt-get update`
    -   `sudo apt-get upgrade`
-   install [node.js](https://nodejs.org/). ([digitalocean.com: "How To Install Node.js on Ubuntu 20.04"](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04))
    -   add ppa node.js: `curl -sL https://deb.nodesource.com/setup_19.x | sudo -E bash -` (19 you can change lates version)
    -   install it: `sudo apt-get install nodejs`
    -   check version: `node -v`
-   install [PostgreSQL](https://www.postgresql.org/) ([digitalocean.com: "How To Install PostgreSQL on Ubuntu 20.04 [Quickstart]"](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart))

    -   Installing PostgreSQL

        -   `sudo apt install postgresql postgresql-contrib`
        -   `sudo systemctl start postgresql.service`

    -   Postgres set password
        -   `sudo -u postgres psql`
        -   `ALTER USER postgres PASSWORD 'your_password';`

-   clone repository.
    -   `git clone https://github.com/chariyev/4help.git`
-   Open directory timar-ecosystem
    -   `cd 4help`
-   install npm packages.

    -   `npm install`

-   set enviroments
    -   `nano ./config/.env`
        -   USER_JWT=xxxxxxx
        -   CLIENT_JWT=xxxxxxx
        -   POST=xxxx
-   set database configuration

    -   database configurations `nano ./config/database.json`

        ```
        {
            "production": {
                "username": "postgres",
                "password": "",
                "database": "4help",
                "host": "127.0.0.1",
                "dialect": "postgres",
                "loggin": false
            }
        }
        ```

-   create database `npx sequelize-cli db:create --env production`
-   set migrations `npx sequelize-cli db:migrate --env production`
-   set seeders `npx sequelize-cli db:seed:all --env production`
-   install [pm2](https://pm2.keymetrics.io/)
    -   `npm install pm2 -g`
    -   check pm2: `pm2 -v`
    -   set autostart enable: `pm2 startup`
-   run project with pm2: `npm run pm2-start`
-   defualt project username: admin admin
-   save pm2: `pm2 save`

# About documentation API

-   Documentation:
    -   Link: http://localhost:${port}/api-docs
    -   YAML: http://localhost:${port}/api-docs/toYAML
    -   JSON: http://localhost:${port}/api-docs/toJSON
