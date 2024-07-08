import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
  Card,
} from "react-bootstrap";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const registerValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Login = ({ setIsLogged }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleLoginSubmit = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (user) {
      setIsLogged(true);
      localStorage.setItem("isLogged", "true");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRegisterSubmit = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === values.email);
    if (userExists) {
      alert("User already exists");
    } else {
      users.push({ email: values.email, password: values.password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("User registered successfully!");
      setIsRegistering(false);
    }
  };

  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto align-self-center">
        <Col className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                {isRegistering ? "Register" : "Login"}
              </Card.Title>
              <Formik
                initialValues={initialValues}
                validationSchema={
                  isRegistering
                    ? registerValidationSchema
                    : loginValidationSchema
                }
                onSubmit={
                  isRegistering ? handleRegisterSubmit : handleLoginSubmit
                }
              >
                {({ handleChange, handleBlur, values }) => (
                  <Form>
                    <BootstrapForm.Group controlId="formEmail">
                      <BootstrapForm.Label>Email address</BootstrapForm.Label>
                      <Field
                        type="email"
                        name="email"
                        as={BootstrapForm.Control}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group
                      controlId="formPassword"
                      className="mt-3"
                    >
                      <BootstrapForm.Label>Password</BootstrapForm.Label>
                      <Field
                        type="password"
                        name="password"
                        as={BootstrapForm.Control}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>

                    {isRegistering && (
                      <BootstrapForm.Group
                        controlId="formConfirmPassword"
                        className="mt-3"
                      >
                        <BootstrapForm.Label>
                          Confirm Password
                        </BootstrapForm.Label>
                        <Field
                          type="password"
                          name="confirmPassword"
                          as={BootstrapForm.Control}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="text-danger"
                        />
                      </BootstrapForm.Group>
                    )}

                    <Button
                      variant="primary"
                      type="submit"
                      className="mt-4 w-100"
                    >
                      {isRegistering ? "Register" : "Login"}
                    </Button>

                    <Button
                      variant="link"
                      className="mt-3 w-100"
                      onClick={() => setIsRegistering(!isRegistering)}
                    >
                      {isRegistering
                        ? "Already have an account? Login"
                        : "Don't have an account? Register"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
