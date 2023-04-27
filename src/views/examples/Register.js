import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Register = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCandidate, setIsCandidate] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "candidate") {
      setIsCandidate(checked);
    } else if (name === "company") {
      setIsCompany(checked);
    }
  };
  const history = useHistory()

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isCandidate) {
      axios
        .post("/api/v1/auth/register", {
          firstName,
          lastName,
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          if(response.data){
            localStorage.setItem('userid', response.data.id)
            localStorage.setItem('usertoken', response.data.token)
            history.push("/user");
            window.location.reload(false);
          }
          // Do something with the response
        })
        .catch((error) => {
          console.error(error);
          // Handle the error
        });
    } else if (isCompany) {
      axios
        .post("/api/v1/auth/register/partner", {
          firstName,
          lastName,
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          if(response.data){
            localStorage.setItem('companyid', response.data.id)
            localStorage.setItem('partnertoken', response.data.token)
            history.push("/admin");
            window.location.reload(false);
          }
          // Do something with the response
        })
        .catch((error) => {
          console.error(error);
          // Handle the error
        });
    }
  };

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-muted text-center mt-2 mb-3">
              <h3>Register</h3>
            </div>
            <Form role="form" onSubmit={handleFormSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Firstname"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstname(event.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Lastname"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    </InputGroup>
                    </FormGroup>

                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Confirm Password"
                          type="password"
                          autoComplete="new-password"
                          value={confirmPassword}
                          onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>
                      <Row>
                        <Col>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="candidate"
                              name="candidate"
                              type="checkbox"
                              checked={isCandidate}
                              onChange={handleCheckboxChange}
                            />
                            <label className="custom-control-label" htmlFor="candidate">
                              I'm a candidate
                            </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="company"
                              name="company"
                              type="checkbox"
                              checked={isCompany}
                              onChange={handleCheckboxChange}
                            />
                            <label className="custom-control-label" htmlFor="company">
                              I'm a company
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
                        Create account
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </>
          );
};

export default Register;
