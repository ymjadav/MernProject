const express = require("express");
const userRouter = require("./users");
const signupRouter = require("./signup");
const loginRouter = require("./login");

const router = express.Router();

const routes = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/signup",
    route: signupRouter,
  },
  {
    path: "/login",
    route: loginRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
