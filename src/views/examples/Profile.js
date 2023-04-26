/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import axios from "axios";
import { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";

const Profile = () => {
  const storedid = localStorage.getItem('companyid');
  const storedtoken = localStorage.getItem('partnertoken');
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/v1/partners/${storedid}`, {
          headers: { 
            Authorization: `Bearer ${storedtoken}`
          },
        data: {}
      });
      setUser(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  fetchUser();
}, []);


  const [updatedUser, setUpdatedUser] = useState({
    businessName: "",
    email: "",
    firstName: "",
    lastName: "",
    businessLocation: "",
    password: "",
    description:"",
    
  });
    

  const updateUser = (event) => {
    event.preventDefault();
   
     axios.put(`/api/v1/partners/${storedid}`, updatedUser, {
      headers: { 
           
        Authorization: `Bearer ${storedtoken}`
    }}
    ).then(response => { 
        console.log(response);
        alert("Profile updated successfully!");
      }).catch(error => {
        console.log(error);
        alert("Error updating Profile.");
      });
  };
     
      

  return (
    <>
       {/* User header */}
      <UserHeader />
      
      {/* Page content */}
      {user &&(
      <Container className="mt--7" fluid>

           {/* Profile description */}
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/angular.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                 
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">5</span>
                        <span className="description">Stars</span>
                      </div>
                  
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {user.firstName} {user.lastName}
        
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {user.businessLocation}, {user.region}
                  </div>
                 
                  <div>
                    <i className="ni education_hat mr-2" />
                    {user.sector}
                  </div>
                  <hr className="my-4" />
                  <p>
                   {user.description}
                  </p>
                  
                </div>
              </CardBody>
            </Card>
         </Col>

            {/* Profile Edit */}
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Company information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Business name 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="businessName"
                            placeholder={user.businessName}
                            type="text"
                            value={updatedUser.businessName}
                            onChange={(e) => {
                              setUpdatedUser({ ...updatedUser, businessName: e.target.value });
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="email"
                            placeholder={user.email}
                            type="email"
                            value={updatedUser.email}
                            onChange={(e) => {
                              setUpdatedUser({ ...updatedUser, email: e.target.value });
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="firstName"
                            placeholder={user.firstName}
                            type="text"
                            value={updatedUser.firstName}
                            onChange={(e) => {
                              setUpdatedUser({ ...updatedUser, firstName: e.target.value });
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="lastName"
                            placeholder={user.lastName}
                            type="text"
                            value={updatedUser.lastName}
                            onChange={(e) => {
                              setUpdatedUser({ ...updatedUser, lastName: e.target.value });
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Password
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="password"
                            placeholder="Password"
                            type="password"
                            value={updatedUser.password}
                            onChange={(e) => {
                              setUpdatedUser({ ...updatedUser, password: e.target.value });
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Confirm Password
                          </label>
                          <Input
                            className="form-control-alternative"
                           
                            placeholder="Confirm Password"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="businessLocation"
                            placeholder={user.businessLocation}
                            type="text"
                            value={updatedUser.businessLocation}
                            onChange={(e) => {
                              setUpdatedUser({ ...updatedUser, businessLocation: e.target.value });
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder={user.description}
                        rows="4"
                        id="description"
                        
                        type="textarea"
                        value={updatedUser.description}
                        onChange={(e) => {
                          setUpdatedUser({ ...updatedUser, description: e.target.value });
                        }}
                      />
                    </FormGroup>
                  </div>
                </Form>
                <Col className="text-right" >
                <Button
                color="info"
                href="#pablo"
                onClick={updateUser}
              >
                Edit profile
              </Button>
              </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      )}
    </>
  );
};

export default Profile;
