# express-ts-starter
A template for starting your Express apps with TS or JS, Mongoose (MongoDB) and a few basic services

The template repo can be found here: https://github.com/iambenkay/express-ts-starter and you can use it to start your own projects directly from there.
## Setup
So, a quick rundown of what each portion of this template offers:
- An ideal typescript configuration (tsconfig.json and tslint.json)
- A nodemon configuration for hot reload during development
- A database service that works with MongoDB out of the box
- A mailing service
- A hashing service for sensitive data like passwords
- A token service for creating JWT tokens (in case you do need it)
- A mail templating service using MJML

As soon as you initialize your project the first things to do is to change `.env.example` to `.env` and set the necessary environment configurations; 
`MONGO_URI`, PORT, `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_USE_TLS`, `JWT_SECRET`. 

Once you set these configuration parameters you are good to go.

`src/@types` is meant to hold your custom TS declarations. TSConfig will pick them up during compilation.

You can define your routers in `src/interfaces/rest` for a Rest API or `src/interfaces/web` for MVC based applications. 

Good luck on your journey to completing that great app! Cheers!! 🥳🥳
