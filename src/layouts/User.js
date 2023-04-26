
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Media,
    Container,
    Row,
    Col
  } from "reactstrap";
// core components
import UserNavbar from "components/Navbars/UserNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

const User = (props) => { 
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
          <Container className="mt--7" fluid>
          <Row className="justify-content-center" ><br/><br/><br/><br/><br/><br/><br/><br/></Row></Container>
          <Container className="d-flex align-items-center" fluid>
          <Row className="justify-content-center">
          <Col lg="7" md="10">
            <br></br>
          </Col>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">You decide when and Where you want to<big className="text-indigo"> earn money</big> </h1>
              <p className="text-white mt-0 mb-5">
              Quick shifts at local businesses at convenient times for you 
no CVs and no interviews
              </p>
              <Button
               
                onClick={(e) => e.preventDefault()}
              >
                Get Started
              </Button>
            </Col>
          </Row>
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


          <Container className="mt--7" fluid>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
          <Row className="justify-content-center" ><br/></Row>
      <Row className="justify-content-center" ><br/></Row>
        <Row className="justify-content-center" >
       
        <Col lg="5" md="6">
   
                  <h1 className="display-2 text-white"><big>Get started today !</big></h1>
                  <p className="text-white mt-0 mb-5">
                  <small>We designed it with simplicity in mind.</small>
                  </p>
                  <p className="text-white mt-0 mb-5">
                 <ul>
                   
                    <li>No experience needed — You’ll be doing work that’s basic</li>
                    <li>No application process — We don’t require a CV or interview. If you have a positive attitude and can follow instructions.</li>
                    <li>No special uniform required — you’ll only ever need the following: black t-shirt, black or white formal shirt, black trousers, black shoes.</li>

                 </ul>
                  </p>
                </Col>
              
                <Col className="order-lg-2" lg="3">
                    <span></span>
                <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../assets/img/brand/worker2.png")}
                      />
                </Col>
            
            </Row></Container>
            <br/>
            <br/>
            <hr></hr>
 <br/>

            <Container className="mt--7" fluid>
       <Row className="justify-content-center" ><br/><br/><br/><br/><br/></Row>
          <Row className="justify-content-center" ><br/>
          <h1 className="display-2 text-white"><big>What type of task fits you better ?</big></h1>
          </Row>
          <Row className="justify-content-center" ><br/><br/><br/><br/><br/></Row>

          <Row className="justify-content-center" >
          <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <br/>
                    <Row className="justify-content-center">
                   
                    <img
                        alt="..."
                      
                        src={require("../assets/img/theme/delivery.png")}
                      />  
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                      <div >
                      <span className="h2 font-weight-bold mb-0">
                          Delivery

                          </span>
                          <br/>
                        
                      </div>
                    
                    </Row>
                    <Row className="justify-content-center">
                        <br/>
                        <Col>  <p className="mt-3 mb-0 text-muted text-sm">
                      <span >Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</span>
                    </p></Col>
                  
                    </Row>
                    <Row className="justify-content-center"><br/></Row>
                  </CardBody>
                </Card>
              </Col>





              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <br/>
                    <Row className="justify-content-center">
                   
                    <img
                        alt="..."
                      
                        src={require("../assets/img/theme/staff.png")}
                      />  
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                      <div >
                      <span className="h2 font-weight-bold mb-0">
                          Staff

                          </span>
                          <br/>
                        
                      </div>
                    
                    </Row>
                    <Row className="justify-content-center">
                        <br/>
                        <Col>  <p className="mt-3 mb-0 text-muted text-sm">
                      <span >Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</span>
                    </p></Col>
                  
                    </Row>
                    <Row className="justify-content-center"><br/></Row>
                  </CardBody>
                </Card>
              </Col>




              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <br/>
                    <Row className="justify-content-center">
                   
                    <img
                        alt="..."
                      
                        src={require("../assets/img/theme/store.png")}
                      />  
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                      <div >
                      <span className="h2 font-weight-bold mb-0">
                          Store shopper

                          </span>
                          <br/>
                        
                      </div>
                    
                    </Row>
                    <Row className="justify-content-center">
                        <br/>
                        <Col>  <p className="mt-3 mb-0 text-muted text-sm">
                      <span >Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</span>
                    </p></Col>
                  
                    </Row>
                    <Row className="justify-content-center"><br/></Row>
                  </CardBody>
                </Card>
              </Col>
          </Row>
          </Container>

         
        </div>
        <br/>
        <br/>
        <hr/>
        <br/><br/>




        <Container className="mt--7" fluid>
       <Row className="justify-content-center" ><br/><br/><br/><br/><br/></Row>
          <Row className="justify-content-center" ><br/>
          <h1 className="display-2 text-white">Browse <big>Jobs</big></h1>
          </Row>
          <Row className="justify-content-center" ><br/><br/><br/><br/><br/></Row>

          <Row className="justify-content-center" >
          <Col lg="3" xl="3">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                        <br/>
                        <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-calendar" />  Lundi 27th Mar </span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                      <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Salary
                    </Button>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      
                      <span className="text-success mr-2">
                        <i className="fa fa-usd" /> 5 dt/hr
                      </span>{" "}
                    </p></Col>
                    <Col className="col-auto">
                      
                    <Media className="align-items-center">  
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      
                    >
                      Apply
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>






              <Col lg="3" xl="3">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                        <br/>
                        <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-calendar" />  Lundi 27th Mar </span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                      <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Salary
                    </Button>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      
                      <span className="text-success mr-2">
                        <i className="fa fa-usd" /> 5 dt/hr
                      </span>{" "}
                    </p></Col>
                    <Col className="col-auto">
                      
                    <Media className="align-items-center">  
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      
                    >
                      Apply
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>
              <Col lg="3" xl="3">
          <Row className="justify-content-center"><br/></Row>
              <Card className="card-profile shadow">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <span className="h2 font-weight-bold mb-0">
                          FlexStaff
                        </span>

                        <br/>
                        <br/>
                      <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />  Tunis</span>
                        <br/>
                        <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-calendar" />  Lundi 27th Mar </span>
                      </div>
                      <Col className="col-auto">
                      <Media className="align-items-center">
                      <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Salary
                    </Button>
              </Media>
                      </Col>
                    </Row>
                    <Row>
                      <Col ><p className="mt-3 mb-0 text-muted text-sm">
                      
                      <span className="text-success mr-2">
                        <i className="fa fa-usd" /> 5 dt/hr
                      </span>{" "}
                    </p></Col>
                    <Col className="col-auto">
                      
                    <Media className="align-items-center">  
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      
                    >
                      Apply
                    </Button>
              </Media>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
               
                <Row className="justify-content-center"><br/></Row>
              </Col>

          </Row>
          
          <br/><br/>
          <Row className="justify-content-center" >
            <br/><br/>
            
            <Button>View All</Button></Row>
          </Container>


         
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
      </>);
};

export default User;