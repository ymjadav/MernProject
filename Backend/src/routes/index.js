const express = require("express");
const userRouter = require("./users");
const signupRouter = require("./signup");

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
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
