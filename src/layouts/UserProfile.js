
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

const UserProfile = (props) => {

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

   

     return (   <>
     <div className="main-content" ref={mainContent} >

        <UserNavbar />
          <div className="header bg-gradient-info py-7 py-lg-8">
          <Container className="mt--7 " fluid>
          <Row className="justify-content-center" ><br/><br/><br/><br/><br/><br/><br/><br/></Row></Container>

         <Row className="justify-content-center" ><br/><br/></Row>
          

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
     {/* Page content */}
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
             src={require("../assets/img/theme/team-4-800x800.jpg")}
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
         Jessica Jones

       </h3>
       <div className="h5 font-weight-300">
         <i className="ni location_pin mr-2" />
         Bucharest, Romania
       </div>
       <div className="h5 mt-4">
         <i className="ni business_briefcase-24 mr-2" />
         Solution Manager - Creative Tim Officer
       </div>
       <div>
         <i className="ni education_hat mr-2" />
         University of Computer Science
       </div>
       <hr className="my-4" />
       <p>
         Ryan — the name taken by Melbourne-raised, Brooklyn-based
         Nick Murphy — writes, performs and records all of his own
         music.
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
                 Username
               </label>
               <Input
                 className="form-control-alternative"
                 defaultValue="lucky.jesse"
                 id="input-username"
                 placeholder="Username"
                 type="text"
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
                 id="input-email"
                 placeholder="jesse@example.com"
                 type="email"
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
                 defaultValue="Lucky"
                 id="input-first-name"
                 placeholder="First name"
                 type="text"
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
                 defaultValue="Jesse"
                 id="input-last-name"
                 placeholder="Last name"
                 type="text"
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
                 defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                 id="input-address"
                 placeholder="Home Address"
                 type="text"
               />
             </FormGroup>
           </Col>
         </Row>
         <Row>
           <Col lg="4">
             <FormGroup>
               <label
                 className="form-control-label"
                 htmlFor="input-city"
               >
                 City
               </label>
               <Input
                 className="form-control-alternative"
                 defaultValue="New York"
                 id="input-city"
                 placeholder="City"
                 type="text"
               />
             </FormGroup>
           </Col>
           <Col lg="4">
             <FormGroup>
               <label
                 className="form-control-label"
                 htmlFor="input-country"
               >
                 Country
               </label>
               <Input
                 className="form-control-alternative"
                 defaultValue="United States"
                 id="input-country"
                 placeholder="Country"
                 type="text"
               />
             </FormGroup>
           </Col>
           <Col lg="4">
             <FormGroup>
               <label
                 className="form-control-label"
                 htmlFor="input-country"
               >
                 Postal code
               </label>
               <Input
                 className="form-control-alternative"
                 id="input-postal-code"
                 placeholder="Postal code"
                 type="number"
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
             placeholder="A few words about you ..."
             rows="4"
             defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
             Open Source."
             type="textarea"
           />
         </FormGroup>
       </div>
     </Form>
   </CardBody>
 </Card>
</Col>
</Row>
</Container>
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
          </Container>  
     <AuthFooter/>
     </>)
    };
    
    export default UserProfile;