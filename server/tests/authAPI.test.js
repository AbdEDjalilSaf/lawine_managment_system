import * as chaiModule from "chai";
import chaiHttp from "chai-http";
import { suite, test, suiteSetup, suiteTeardown } from "mocha";
import { app } from "../app.js";
import connectDatabase, { connectionInstance } from "../config/db.js";
let assert = chaiModule.assert;
const chai = chaiModule.use(chaiHttp);

const registerTestRecord = {
  fullName: "ahmed benkortbi",
  email: "ahmed@gmail.com",
  password: "Reda6aboob#",
};
const loginTestRecord = {
  email: registerTestRecord.email,
  password: registerTestRecord.password,
};

suite("Authentication API test:", () => {
  suiteSetup(async () => {
    await connectDatabase();
  });
  suiteTeardown(async () => {
    await connectionInstance.close();
  });
  //registeration
  suite("User Registration", () => {
    test("Register with no body", (done) => {
      chai.request
        .execute(app)
        .post("/auth/register")
        .send({})
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 400, "Empty body returns 400");
          assert.propertyVal(
            res.body,
            "message",
            "All fields are required.",
            "message prop is present in res body and has the correct value"
          );
          done();
        });
    });
    //##
    test("Register with invalid email", (done) => {
      chai.request
        .execute(app)
        .post("/auth/register")
        .send({
          fullName: registerTestRecord.fullName,
          email: "emai@lom",
          password: registerTestRecord.password,
        })
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 400, "invalid email status returns 400");
          assert.containsAllKeys(
            res.body,
            ["type", "message"],
            "body should have both props"
          );
          assert.propertyVal(res.body, "type", "email", "type should be email");
          done();
        });
    });
    //##
    test("Register with invalid password", (done) => {
      chai.request
        .execute(app)
        .post("/auth/register")
        .send({
          fullName: registerTestRecord.fullName,
          email: registerTestRecord.email,
          password: "password",
        })
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 400, "invalid password status return 400");
          assert.containsAllKeys(
            res.body,
            ["type", "message"],
            "body should have both props"
          );
          assert.propertyVal(
            res.body,
            "type",
            "password",
            "type should be password"
          );
          done();
        });
    });
    //##
    test("Register with already signed user", (done) => {
      chai.request
        .execute(app)
        .post("/auth/register")
        .send({
          fullName: "test test",
          email: "test@gmail.com",
          password: "Reda6aboob#",
        })
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 200, "signed user status returns 200");
          assert.propertyVal(
            res.body,
            "message",
            "User Already Exist, Login instead",
            "message should valid and have the right value"
          );
          done();
        });
    });
    //##
    test("Register new and valid user", (done) => {
      chai.request
        .execute(app)
        .post("/auth/register")
        .send(registerTestRecord)
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 201, "new user status returns 201");
          assert.notEqual(
            res.body.password,
            registerTestRecord.password,
            "password should be hashed"
          );
          assert.containsAllKeys(
            res.body,
            ["message", "user"],
            "body should have message and user props"
          );
          done();
        });
    });
  });
  //login
  suite("User Login", () => {
    test("No account found case", (done) => {
      chai.request
        .execute(app)
        .post("/auth/login")
        .send({
          email: "random@notfound.com",
          password: "Reda6aboob#",
        })
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 401, "No account status returns 400");
          assert.propertyVal(
            res.body,
            "message",
            "No account found, create one",
            "message prop is present in res body and has the correct value"
          );
          done();
        });
    });
    test("Wrong password case", (done) => {
      chai.request
        .execute(app)
        .post("/auth/login")
        .send({
          email: "test@gmail.com",
          password: "Reda5aboob#",
        })
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 401, "wrong password returns 400");
          assert.propertyVal(
            res.body,
            "message",
            "Password is wrong, try again",
            "message prop is present in res body and has the correct value"
          );
          done();
        });
    });
    test("check no authenticated users", (done) => {
      chai.request
        .execute(app)
        .get("/auth/check-auth")
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 401, "unauth users response return 401");
          done();
        });
    });
    test("valid user trying to loggin", (done) => {
      chai.request
        .execute(app)
        .post("/auth/login")
        .send(loginTestRecord)
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 200, "valid logged user return 200");
          assert.containsAllKeys(
            res.body,
            ["message", "user"],
            "body should have message and user props"
          );
          done();
        });
    });
  });
  //logout
  suite("User Logout", () => {
    test("should successfully log out the user", (done) => {
      chai.request
        .execute(app)
        .post("/auth/logout")
        .set("Cookie", "sessionID=validSessionID") // Mock the session cookie
        .end((err, res) => {
          assert.isNull(err, "No internal errors");
          assert.equal(res.status, 200, "Logout should return 200");
          assert.propertyVal(
            res.body,
            "message",
            "Logout successful",
            "Should return success message"
          );
          done();
        });
    });
  });
});
