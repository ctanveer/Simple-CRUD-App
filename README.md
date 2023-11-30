## Notes and process

Create index.js, router.js, controller dir and controller.js, model dir with model.js and query.js

Write the initial logic for Koa router. Install dependencies:

`npm i koa koa-bodyparser koa-router mongoose`

Write the schema under `model.js` with Schema and model

Write the methods in `query.js` getAll, getOne, postOne, putOne, deleteOne

Import the methods to `controller.js` and write the methods with async/await and ctx

Import `controller.js` methods to router.js and create the routes with path

Write the logics for the skeleton methods created in `query.js`

Run --> `node index.js`
