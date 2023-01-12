# NEST ANGULAR APP 

https://medium.com/@chrischuck35/how-to-create-a-mysql-instance-with-docker-compose-1598f3cc1bee

```sh
docker-compose up -d
docker-compose down
```

https://buddy.works/tutorials/build-a-full-stack-web-application-with-angular-7-and-nest-js

The tutorial didn't work anymore, and the directory structure isn't very organized imho. I had to make a number of different updates to get it to work, and it didn't want to work again so easily. Maybe by the time you try to run this it won't work anymore, hahaha, that's just how it is.

Judge how you want to be judged.

```sh
npm install -g @angular/cli
ng new frontend
nest new backend

cd backend
yarn add @nestjs/typeorm typeorm mysql
nest g service contact
nest generate controller contacts
yarn start:dev

cd ../frontend
ng add @angular/material
ng generate class contact
ng generate service api
ng generate component contact
ng serve

```

