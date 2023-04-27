import React, { useEffect, useState } from 'react'
import Search from './Search'
import { Row, Col, Container, Card, CardHeader,CardFooter, CardTitle,CardBody, CardText, Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'


import CardeJ from './CardeJ';
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import UserNavbar from "components/Navbars/UserNavbar.js";
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


function BrowseJ(props) {
  const mainContent = React.useRef(null);
    const location = useLocation();
    const storedid = localStorage.getItem('userid');
 const storedtoken = localStorage.getItem('usertoken');
 
 
  // const [jobDetails, setJobDetails] = useState([{
  //   PartnerName :"",
  //   jobId: "",
  //   jobTitle : "",
  //   jobDescription : "",
  //   jobLocation : "",
  //   jobType : "",
  //   jobSalary : "",
  //   jobStartDate : "",
  // }]);
  const [jobDetails, setJobDetails] = useState(null);
  const [partners, setPartners] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
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

      const [selectedJob, setSelectedJob] = useState({
        PartnerName :"",
        PartnerEmail : "",
        PartnerDescription :"", 
        jobTitle : "",
        jobId: "",
        jobLocation : "",
        jobDescription : "",
        jobSalary : "",
        jobType : "",
        jobStartDate : "",
      });

      const handleCardClick = (job) => {
        console.log(job);
        setSelectedJob({
          PartnerName : job.PartnerName,
          PartnerEmail : job.PartnerEmail,
          PartnerDescription : job.PartnerDescription, 
          jobTitle : job.jobTitle,
          jobId : job.jobId,
          jobLocation : job.jobLocation,
          jobDescription : job.jobDescription,
          jobLocation : job.jobLocation,
          jobSalary : job.jobSalary,
          jobType : job.jobType,
          jobStartDate : job.jobStartDate,
        });
       
      }
      const handleApplyClick = async (clientId,jobId) => {
        // post request with axios to this endpoint api/v1/candidats/client/{clientId}/job/{jobId} with stored token in headers, and make it inside try catch block
        try {
          const response = await axios.post(`/api/v1/candidats/client/${clientId}/job/${jobId}`,{
            
          } ,{
            headers: { 
              Authorization: `Bearer ${storedtoken}`
            },
           
           })
          
          setIsSuccess(true);
        } catch (error) {
          console.error(error);
         
        }

      }



      

      useEffect(() => {
        const fetchJobs = async () => {
          try {
              const response = await axios.get(`/api/v1/partners`, {
                headers: { 
                  Authorization: `Bearer ${storedtoken}`
                },
                data: {}
               });
               
    const partnerss = response.data;
    const newJobDetails = [];

    await Promise.all(partnerss.map(async (partner) => {
      const jobs = partner.jobs;
      const jobDetails = await Promise.all(jobs.map(async (job) => {
        return {
          PartnerName: partner.businessName,
          PartnerEmail : partner.email,
          PartnerDescription : partner.description,
          jobId: job.idJ,
          jobTitle: job.title,
          jobDescription: job.description,
          jobLocation: job.location,
          jobType: job.sector,
          jobSalary: job.salary,
          jobStartDate: job.workTime,
        };
      }));

      newJobDetails.push(...jobDetails);
    }));
    console.log(newJobDetails);

    setJobDetails(newJobDetails);
    setPartners(partnerss);

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
          fetchJobs();
}, []);

const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    
   
      setIsSuccess(false);

    
  };

  useEffect(() => {
    if (isSuccess === true) {
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
    }
  })
  return (
    <div className="main-content" ref={mainContent} >
  
      
       <UserNavbar />
      <div className="header bg-gradient-info py-7 py-lg-8">
      {isSuccess && <div
          style={{
            backgroundColor: '#d1f3c7',
            color: '#12793d',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '5px',
            marginBottom: '20px',
            boxShadow: '0px 0px 5px 1px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
      top: 60,
      left: 0,
      zIndex: 999,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaCheck size={25} style={{ marginRight: '10px' }} />
            <span style={{ fontSize: '18px' }}>Applied successfuly</span>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleClose}>
            <AiOutlineClose size={25} />
          </div>
        </div>}
      <Container className="mt--7 " fluid>
          <Row className="justify-content-center" ><br/><br/><br/><br/><br/><br/><br/></Row></Container>
          <Container >
          <div className="" >
          <Row className="justify-content-center" style={{}}>
          
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
        <div className='Layouts' style={{margin:"5%", display:"flex"}}>
        <Container>
        <Row style={{display:"flex"}}>
        <Col xs="6" className='cardsC' style={{display:"flex", flexDirection:"column"}} >
        {jobDetails && jobDetails.map((job, index) => (
          
            <CardeJ
              key={index}
              
              title={job.jobTitle}
              subtitle={job.jobDescription}
              sector={job.jobType}
              location={job.jobLocation}
              salary={job.jobSalary}
              workTime={job.jobStartDate}
              onClick = {() => handleCardClick(job)}
              onApply = {() => handleApplyClick(storedid,job.jobId)}
              
            />
            
          
        ))}
        </Col>
        
         <div style={{width:20}}></div>
        {/* <Col className="bg-light border" xs="5" style={{height: "50%"}}> */}
            <Row>
            {selectedJob.jobTitle!== ""  && 
              <Card className='descriptionCard' style={{minWidth:450}}>
                
                <CardHeader>
                  
                  {selectedJob.jobTitle}
                </CardHeader>
                <CardBody style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                <CardTitle tag="h5">
                    Job Details 
                  </CardTitle>
                  <CardText>
                    {selectedJob.jobDescription }
                  </CardText>
                  <CardTitle tag="h5">
                    Job Sector
                  </CardTitle>
                  <CardText>
                    {selectedJob.jobType }
                  </CardText>
                  <CardTitle tag="h5">
                    Job Location
                  </CardTitle>
                  <CardText>
                    {selectedJob.jobLocation }
                  </CardText>
                  <CardTitle tag="h5">
                    Company information
                  </CardTitle>
                  <CardText>
                    company's name : {selectedJob.PartnerName}
                  </CardText>
                  <br/>
                  <CardText>
                    company's email : {selectedJob.PartnerEmail} 
                  </CardText>
                  <br/>
                  <CardText>
                    company's Descrition : {selectedJob.PartnerDescription} 
                  </CardText>
                </CardBody>
              </Card>
}
            </Row>
          {/* </Col> */}
        </Row>
        </Container>    
      
      </div>
      
      </div>
    
  )
}


const BlogData = [
    {
      image: "assets/images/dailymotion.png",
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      service:
        "Livraison",
      location:"Tunis",
      btnbg: "primary",
    },
    {
    image: "assets/images/dailymotion.png",
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      service:
        "Livraison",
      location:"Tunis",
      btnbg: "primary",
    },
    {
    image: "assets/images/dailymotion.png",
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      service:
        "Livraison",
      location:"Tunis",
      btnbg: "primary",
    },
    {
      image: "assets/images/dailymotion.png",
        title: "This is simple blog",
        subtitle: "2 comments, 1 Like",
        service:
          "Livraison",
        location:"Tunis",
        btnbg: "primary",
      },
      {
        image: "assets/images/dailymotion.png",
          title: "This is simple blog",
          subtitle: "2 comments, 1 Like",
          service:
            "Livraison",
          location:"Tunis",
          btnbg: "primary",
        }
];
export default BrowseJ