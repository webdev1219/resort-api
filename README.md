# Resorts API

## Motivation

Just a litle API for educational purposes.

## Endpoints

| Method | Path           | description      | Body                            |
| :----: | -------------- | ---------------- | ------------------------------- |
|  GET   | `/resorts`     | list all resorts |                                 |
|  POST  | `/resorts`     | create a resort  | `{ name, latitude, longitude }` |
|  GET   | `/resorts/:id` | get a resort     |                                 |
|  PUT   | `/resorts/:id` | update a resort  | `{ name, latitude, longitude }` |
| DELETE | `/resorts/:id` | delete a resort  |                                 |

## Auth

| Method | Path      | description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/whoami` | who am i       |                          |
|  POST  | `/signup` | signup a user  | `{ username, password }` |
|  POST  | `/login`  | login a user   | `{ username, password }` |
|  GET   | `/logout` | logout session |                          |
