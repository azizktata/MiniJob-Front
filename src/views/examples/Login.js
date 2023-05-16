// reactstrap components
import React from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";


import axios from "axios";
import {useState} from "react";
import { Redirect, useHistory } from "react-router-dom";

const Login = () => {


  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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


  const handleSignIn = (event) => {
    event.preventDefault();

    if (isCandidate) {
      axios
        .post("/api/v1/auth/authenticate", {
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          // Do something with the response
          //alert("Go to user interface");
          if(response.data){
            localStorage.setItem('userid', response.data.id)
            localStorage.setItem('usertoken', response.data.token)
            history.push("/user");
            window.location.reload(false);
          }
        })
        .catch((error) => {
          console.error(error);
          // Handle the error
          setError('invalid email or password');
        });
    } else if (isCompany) {
      axios
        .post("/api/v1/auth/authenticate/partner", {
          
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          // Do something with the response
        
          if(response.data){
            localStorage.setItem('companyid', response.data.id)
            localStorage.setItem('partnertoken', response.data.token)
            
           
            history.push("/admin");
            window.location.reload(false);
            
          }
        
        })
        .catch((error) => {
          console.error(error);
          // Handle the error
          setError('invalid email or password');
          //alert('Invalid email or password');
        });
    }
  };
  const [error, setError] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
          <div className="text-muted text-center mt-2 mb-3">
              <h3>Sign in</h3>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
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
                    onChange={handleEmailChange}
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
                    onChange={handlePasswordChange}
                  />
                </InputGroup>
                {error !=="" && <p style={{color:"red"}}>{error}</p>}
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
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={handleSignIn}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
