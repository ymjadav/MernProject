import { create, test, enforce } from "vest";
import { isEmail } from "validator";
enforce.extend({ isEmail });
const suit = create("signup_form", (data = {}) => {
  test("username", "Username is required", () => {
    enforce(data.username).isNotEmpty();
  });

  test("username", "Username must be at least 3 characters long", () => {
    enforce(data.username).longerThanOrEquals(3);
  });

  test("email", "Email is required", () => {
    enforce(data.email).isNotEmpty();
  });

  test("email", "Email address is not valid", () => {
    enforce(data.email).isEmail({
      blacklisted_chars: "!\"#$%&'()*+,/:;<=>?@[\\]^`{|}~",
      host_blacklist: ["example.com", "example.org"],
      host_whitelist: ["gmail.com", "yahoo.com", "mojaave.com"],
    });
  });

  test("password", "Password is required", () => {
    enforce(data.password).isNotEmpty();
  });

  test("password", "Password must be at least 6 characters long", () => {
    enforce(data.password).longerThanOrEquals(6);
  });
});

export default suit;
