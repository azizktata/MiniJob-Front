
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import {
    Button,
    Card,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    CardHeader,
    Media,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Row,
    Col
  } from "reactstrap";
// core components
import UserNavbar from "components/Navbars/UserNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

const Companies = (props) => {

    const mainContent = React.useRef(null);
    const location = useLocation();
  
    React.useEffect(() => {
      document.body.classList.add("bg-default");
      return () => {
        document.body.classList.remove("bg-default");
      };
    }, []);
    React.useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
          if (prop.layout === "/user") {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      };

     return (   <>
        <div className="main-content" ref={mainContent} >
          <UserNavbar />
          <div className="header bg-gradient-info py-7 py-lg-8">
          <Container className="mt--7 " fluid>
          <Row className="justify-content-center" ><br/><br/><br/><br/><br/><br/><br/></Row></Container>
          <Container>
          <div className="header-body text-center mb-7">
          <Row className="justify-content-center">
     <Col><br/></Col>
            <Col >


            <Form className="navbar-search navbar-search-dark form-inline  ">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative ">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>

            </Col>
            <Col><br/></Col>
          </Row>
          </div>
        </Container>
            <div className="separator separator-bottom separator-skew zindex-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          

          
          <Container className="justify-content-center"  fluid>
          <Row className="justify-content-center">



          <Col lg="6" xl="4">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      3
                      </span>{" "}
                      <span className="text-nowrap">Available jobs</span>
                    </p></Col>
                    <Col className="col-auto">
                      <br/>
                    <Media className="align-items-center">  
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      View
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>


              <Col lg="6" xl="4">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      3
                      </span>{" "}
                      <span className="text-nowrap">Available jobs</span>
                    </p></Col>
                    <Col className="col-auto">
                      <br/>
                    <Media className="align-items-center">  
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      View
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>
              <Col lg="6" xl="4">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      3
                      </span>{" "}
                      <span className="text-nowrap">Available jobs</span>
                    </p></Col>
                    <Col className="col-auto">
                      <br/>
                    <Media className="align-items-center">  
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      View
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>
              <Col lg="6" xl="4">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      3
                      </span>{" "}
                      <span className="text-nowrap">Available jobs</span>
                    </p></Col>
                    <Col className="col-auto">
                      <br/>
                    <Media className="align-items-center">  
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      View
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>
              <Col lg="6" xl="4">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      3
                      </span>{" "}
                      <span className="text-nowrap">Available jobs</span>
                    </p></Col>
                    <Col className="col-auto">
                      <br/>
                    <Media className="align-items-center">  
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      View
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>
              <Col lg="6" xl="4">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      3
                      </span>{" "}
                      <span className="text-nowrap">Available jobs</span>
                    </p></Col>
                    <Col className="col-auto">
                      <br/>
                    <Media className="align-items-center">  
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      View
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>
              <Col lg="6" xl="4">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      3
                      </span>{" "}
                      <span className="text-nowrap">Available jobs</span>
                    </p></Col>
                    <Col className="col-auto">
                      <br/>
                    <Media className="align-items-center">  
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      View
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>


















              </Row>
            </Container>
            

          </div>
          <Container className="mt--7" fluid>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          </Container>  
     <AuthFooter/>
          </>)
  };
  
  export default Companies;