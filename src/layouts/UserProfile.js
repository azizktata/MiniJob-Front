
import React, { useEffect, useState } from "react";
import { useLocation, Route, useHistory, Redirect } from "react-router-dom";
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
    Col,
    Table,
    Badge
  } from "reactstrap";
// core components
import UserNavbar from "components/Navbars/UserNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";

const UserProfile = (props) => {

  const mainContent = React.useRef(null);
  const location = useLocation();
  const storedid = localStorage.getItem('userid');
  const storedtoken = localStorage.getItem('usertoken');
  const [user, setUser] = useState("");
  const [jobs, setJobs] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const history = useHistory();
  
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

    const fetchJob = async (idJ) => {
      try {
        const response = await axios.get(`/api/v1/jobs/${idJ}`, {
          headers: { 
            
            Authorization: `Bearer ${storedtoken}`
          },
          data: {}
        })
        return response.data;
        
       
          } catch (error) {
        console.error(error);
      }
    };

    const deleteUser = async () => {
      try {
        const response = await axios.delete(`/api/v1/clients/${storedid}`, {
          headers: { 
            
            Authorization: `Bearer ${storedtoken}`
          },
          data: {}
        }).then(history.push("/auth"))
        
        
       
          } catch (error) {
           console.error(error);
      }
    };


    

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`/api/v1/clients/${storedid}`, {
            headers: { 
              Authorization: `Bearer ${storedtoken}`
            },
          data: {}
        });
        setUser(response.data);
        // const user = response.data;
         const newJobDetails = [];
        const appliedJobs = response.data.appliedJobs;
        // console.log(appliedJobs)
       const JobDetails = await Promise.all(appliedJobs.map(async appliedJob =>{
          const job = await fetchJob(appliedJob.id.jobId)
          // console.log(job)
          
          return {
            id: appliedJob.id.jobId,
            title: job.title,
            salary: job.salary,
            sector: job.sector,
            location: job.location,
            status : appliedJob.status
          };
          // console.log(jobDetails)
          
        }));
        newJobDetails.push(...JobDetails);
        
        console.log(newJobDetails)
        setJobs(newJobDetails);

        // setJobs(response.data[0].appliedJobs);
        setFavorites(response.data.favorites);
        console.log(response.data.favorites)
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const [updatedUser, setUpdatedUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    birth: "",
    city: "",
    password: "",
  });
    

  const updateUser = (event) => {
    event.preventDefault();
   
     axios.put(`/api/v1/clients/${storedid}`, updatedUser, {
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

  const handleJobDelete = async (idJ) => {
    try{
      
      const endpointUrl = `/api/v1/candidats/client/${storedid}/job/${idJ}`;
      const response = await axios.delete(endpointUrl, {
        headers: {  
          Authorization: `Bearer ${storedtoken}`
        }
      });
      window.location.reload();
      
      console.log(response.data);
    }
   catch (error) {
    console.error(error);
  }   
  }
  

  const [rating, setRating] = useState(1);

  const handleRatingChange = (idP, nextValue) => {
    console.log({stars:nextValue})
    //PUT axios request to api/v1/clients/1/partner/1 endpoint with Header that has bearer token
    axios.post(`/api/v1/ratings/client/${storedid}/partner/${idP}`, {stars:nextValue}, {
      headers: { 
           
        Authorization: `Bearer ${storedtoken}`
    }}
    ).then(response => { 
        console.log(response);
        
      }).catch(error => {
        console.log(error);
       
      });
   

    setRating(nextValue);
  }

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
           
       
         </div>
       </div>
     </Row>
     <div className="text-center">
       <h3>
         {user.firstName} {user.lastName}

       </h3>
       <div className="h5 font-weight-300">
         <i className="ni location_pin mr-2" />
         {user.region} {user.city}
       </div>
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
       <Col className="text-right" xs="2">
         <Button
           color="warning"
           href="#pablo"
           onClick={deleteUser}
           size="sm"
         >
           Delete
         </Button>
       </Col>
       <Col className="text-right" xs="2">
         <Button
           color="primary"
           href="#pablo"
           onClick={updateUser}
           size="sm"
         >
           Update
         </Button>
       </Col>
     </Row>
   </CardHeader>
   <CardBody>
     <Form>
       
       <div className="pl-lg-4">
        
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
                 id="input-first-name"
                 placeholder={user.firstName}
                 defaultValue={user.firstName}
                 value={updatedUser.businessName}
                 onChange={(e) => {
                  setUpdatedUser({ ...updatedUser, firstName: e.target.value });
                }}
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
                 id="input-last-name"
                 placeholder={user.lastName}
                 defaultValue={user.lastName}
                 value={updatedUser.lastName}
                 onChange={(e) => {
                  setUpdatedUser({ ...updatedUser, lastName: e.target.value });
                }}
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
                 placeholder={user.email}
                 defaultValue={user.email}
                 value={updatedUser.email}
                 onChange={(e) => {
                  setUpdatedUser({ ...updatedUser, email: e.target.value });
                }}
                 type="email"
               />
             </FormGroup>
           </Col>
           <Col lg="6">
             <FormGroup>
               <label
                 className="form-control-label"
                 htmlFor="input-birth"
               >
                 Birth
               </label>
               <Input
                 className="form-control-alternative"
                 id="input-birth"
                 placeholder={user.birth}
                 defaultValue={user.birth}
                 value={updatedUser.birth}
                 onChange={(e) => {
                  setUpdatedUser({ ...updatedUser, birth: e.target.value });
                }}
                 type="birth"
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
           <Col lg="6">
             <FormGroup>
               <label
                 className="form-control-label"
                 htmlFor="input-city"
               >
                 City
               </label>
               <Input
                 className="form-control-alternative"
                 id="input-city"
                 placeholder={user.city}
                 defaultValue={user.city}
                 value={updatedUser.city}
                 onChange={(e) => {
                  setUpdatedUser({ ...updatedUser, city: e.target.value });
                }}
                 type="text"
               />
             </FormGroup>
           </Col>
           <Col lg="6">
             <FormGroup>
               <label
                 className="form-control-label"
                 htmlFor="input-country"
               >
                 Region
               </label>
               <Input
                 className="form-control-alternative"
                 id="input-region"
                 placeholder={user.region}
                 defaultValue={user.region}
                 value={updatedUser.region}
                 onChange={(e) => {
                  setUpdatedUser({ ...updatedUser, region: e.target.value });
                }}
                 type="text"
               />
             </FormGroup>
           </Col>
           
         </Row>
         <Row>
         <Col lg="6">
             <FormGroup>
               <label
                 className="form-control-label"
                 htmlFor="input-city"
               >
                 Password
               </label>
               <Input
                 className="form-control-alternative"
                
                 id="input-password"
                 placeholder="password"
                 value={updatedUser.password}
                 onChange={(e) => {
                   setUpdatedUser({ ...updatedUser, password: e.target.value });
                 }}
                 type="password"
               />
             </FormGroup>
           </Col>
           <Col lg="6">
             <FormGroup>
               <label
                 className="form-control-label"
                 htmlFor="input-country"
               >
                 Confirm password
               </label>
               <Input
                 className="form-control-alternative"
                 
                 id="input-password-confirm"
                 placeholder="confirm password"
                 type="password"
               />
             </FormGroup>
           </Col>
         </Row>
       </div>
       {/* <hr className="my-4" /> */}
       {/* Description */}
       {/* <h6 className="heading-small text-muted mb-4">My Applications</h6>
       <div className="pl-lg-4">
        
       </div>
       <hr className="my-4" /> */}
       {/* Description */}
       {/* <h6 className="heading-small text-muted mb-4">My favorites</h6>
       <div className="pl-lg-4">
        
       </div> */}
     </Form>
   </CardBody>
 </Card>
</Col>
</Row>
  <Row style={{marginTop:10, maxWidth:"68%"}}>
    <div className="col" >
      <Card className="shadow">
      <CardHeader className="border-0">
          <h3 className="mb-0">Job Offers</h3>
        </CardHeader>
         <CardBody>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
           
              <th scope="col">Title</th>
              <th scope="col">Salary</th>
              <th scope="col">Sector</th>
              <th scope="col">Status</th>
              <th scope="col">Settings</th>
             
         
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
          {jobs && jobs.map((job, index) => (
            <tr key={job.id}>
              <th scope="row">
                <Media className="align-items-center">
  
                  <Media>
                    <span className="mb-0 text-sm">
                    {job.title}
                    </span>
                  </Media>
                </Media>
              </th>
              <td>{job.salary}</td>
              <td>{job.sector}</td>
              <td>
                <Badge color="" className="badge-dot mr-4">
                  <i className="bg-warning" />
                  {job.status}
                </Badge>
              </td>
             
              <td>
                <div className="d-flex align-items-center">
                <span className="text-success mr-2">
                    <big><i className="fas fa-edit" /></big> 
                  </span>
                  <span className="text-success mr-2"></span>
                  <span className="text-success mr-2"></span>
                  <span className="text-danger mr-2">
                    <big onClick={()=> handleJobDelete(job.id)}><i className="fas fa-trash" /></big> 
                  </span>
                </div>
              </td>
           
            </tr>))}
            </tbody></Table></CardBody>
        </Card>
      </div>
    </Row>

    <Row style={{marginTop:10, maxWidth:"68%"}}>
    <div className="col" >
      <Card className="shadow">
      <CardHeader className="border-0">
          <h3 className="mb-0">My Favorites</h3>
        </CardHeader>
         <CardBody>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
           
              <th scope="col">Companie Name</th>
              <th scope="col">Companie Email</th>
              <th scope="col">Sector</th>
              <th scope="col">Ratings</th>
              
             
         
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
          {favorites && favorites.map((fav, index) => (
            <tr key={fav.idP}>
              <th scope="row">
                <Media className="align-items-center">
  
                  <Media>
                    <span className="mb-0 text-sm">
                    {fav.businessName}
                    </span>
                  </Media>
                </Media>
              </th>
              <td>{fav.email}</td>
              <td>{fav.sector}</td>
              <td>
              
              <StarRatingComponent
                name={String} /* name of the radio input, it is required */
                value={rating} /* number of selected icon (`0` - none, `1` - first) */
                starCount= {5} /* number of icons in rating, default `5` */
                onStarClick={(nextValue)=>handleRatingChange(fav.idP,nextValue)}
                
              />
              </td>
             
              
           
            </tr>))}
            </tbody></Table></CardBody>
        </Card>
      </div>
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