## Table of Contents

1. [Introduction](#introduction)
2. [Project Setup](#project-setup)
3. [Questions & Suggestions](#questions--suggestions)
4. [Env Variables](#env-variables)

## Introduction

This is a Node.js starter template with TypeScript to easily get started on a production ready app. Included are:

- Express: most popular framework for Node.js.
- Nodemon: to automatically update and refresh the server when you make changes.
- Knex: to communicate with a db easily without having to manually type query strings.
- Joi: to make pre-controller validations easily.
- An example model/route/controller/validation for a generic 'Role' model which can be used to create other models.
- An API Handling middleware to clean up routes.
- ESlint + Prettier + Husky Git Hooks: to format the code and ensure that no matter who works on the code, it will stay formatted the same way.

## Project Setup

- To run the app, run `yarn install` and `yarn dev`.
- The lint and function is `yarn lint`.
- The lint function will auto-run when you try to commit to a git repo along with prettier to auto-format the code, set up in the .husky folder.

Note: This app was designed to only be used with yarn to prevent a `package-lock.json` from being created which can cause conflicts - change the `engines` in `package.json` if you want to use npm instead.

## Questions & Suggestions

If you have any questions, feel free to reach out at nickderaj@gmail.com or message me on Discord at NickD#1188<br/>
If there's something you think should be added, branch out and make a PR! :)

## Env Variables

```
NODE_ENV= local/development/etc.

DB_PORT= 5432
DB_ENGINE= postgresql
DB_HOST= localhost / heroku
DB_NAME= sample_backend
DB_USER_NAME= nick
DB_USER_PASSWORD= password12345

JWT_SECRET= superSecretString (for jason web tokens)
```
