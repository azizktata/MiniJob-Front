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
import { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts

// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components


import Header from "components/Headers/Header.js";
import axios from "axios";



const Index = (props) => {
 const storedid = localStorage.getItem('companyid');
 const storedtoken = localStorage.getItem('partnertoken');
 const [user, setUser] = useState(null);
 const [jobs, setJobs] = useState([]);
 
 const [jobSeekers, setJobSeekers] = useState([]);

 const candidats = [{
  clientId :"",
  clientFirstName: "",
  clientLastName: "",
  clientEmail: "",
  status:""
}];
 const [applyers, setApplyers] = useState([{
  jobId : "",
  jobTitle : "",
  candidats : candidats
  

 }]);


 
 
 useEffect(() => {
   const fetchJobs = async () => {
     try {
         const response = await axios.get(`/api/v1/partners/${storedid}/jobs`, {
           headers: { 
             
             Authorization: `Bearer ${storedtoken}`
           },
           data: {}
          });
         setJobs(response.data);
        //  console.log(response.data)
        
           } catch (error) {
             console.error(error);
            }
          };
     fetchJobs();
    }, []);

    const fetchCandidats = async (jobId) => {
      try {
        const response = await axios.get(`/api/v1/candidats/job/${jobId}`, {
             headers: { 
               Authorization: `Bearer ${storedtoken}`
             },
             data: {}
           })
           return response.data;
           //console.log(response.data)
     
         } catch (error) {
           console.error(error);
         }
         
       };

       useEffect(() => {
        const fetchApplies = async () => {
          
          jobs.map(async (job) => {
            try {
              const res = await fetchCandidats(job.idJ);
              const newCandidats = res.map((c,index) => ({
                clientId : c.idC,
                clientFirstName: c.firstName,
                clientLastName: c.lastName,
                clientEmail: c.email,
                status: job.appliedClients.length!==0 ? job.appliedClients[index].status : job.appliedClients.status,

              }));
              const newApplyer = {
                jobId : job.idJ,
                jobTitle: job.title,
                candidats: newCandidats,
              };
              setApplyers((prevApplyers) => [
                ...prevApplyers,
                newApplyer
              ]);
               console.log(applyers);
            } catch (error) {
              console.error(error);
            }
          });
        };
        fetchApplies();
      }, [jobs]);

   // PUT api/v1/candidats/client/1/job/1/A
   const acceptCandidat = async (clientId, jobId) =>{
    try {
      const response = await axios.put(`/api/v1/candidats/client/${clientId}/job/${jobId}/A`, {}, {
        headers: { 
          Authorization: `Bearer ${storedtoken}`
        },
        data: {}
      });
      // console.log(response.data);
      window.location.reload()
     
    } catch (error) {
      console.error(error);
    }
   }
 
   // PUT api/v1/candidats/client/1/job/1/D
   const refuseCandidat = async (clientId, jobId) =>{
    try {
      const response = await axios.put(`/api/v1/candidats/client/${clientId}/job/${jobId}/D`, {}, {
        headers: { 
          Authorization: `Bearer ${storedtoken}`
        },
        data: {}
      });
    // console.log(response.data)
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
   }

  //  // GET api/v1/candidats and set state
  //  useEffect(() => {
  //   const fetchJobSeekers = async () => {
  //     try {
  //       const response = await axios.get(`/api/v1/candidats`, {
  //          headers: { 
  //            Authorization: `Bearer ${storedtoken}`
  //          },
  //          data: {}
  //         });
  //         // console.log(response.data);
  //         setJobSeekers(response.data);
  //         //console.log(response.data)
  //         // console.log(response.data[0].status)
  //         // console.log(jobSeekers.length)
         
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       };
  //   fetchJobSeekers();
  //   }, []);
 
  return (
    <>
     
      {jobSeekers && <Header jobsOffered = {jobs}  jobDemands = {jobSeekers} />}
     
     {jobs && applyers.slice(1).map((candidat) =>(
      <div style={{padding:50}}>
      <Container className="mt--7" fluid key={candidat.jobId}>
      
      <Row >
      <Col lg="6" xl="2"></Col>
        <Col className="mb-5 mb-xl-3" xl="8">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">{candidat.jobTitle}</h3>
                </div>
                {/* <div className="col text-right">
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    See all
                  </Button>
                </div> */}
              </Row>
            </CardHeader>
            
              <Table className="align-items-center table-flush" responsive >
              <thead className="thead-light">
                <tr>
                  <th scope="col">Job seeker name</th>
                  <th scope="col">Job seeker email</th>
                  <th scope="col">Accept</th>
                  <th scope="col">Refuse</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
              {jobs && candidat.candidats.map((C,index)=>(
                <tr key={C.clientId}>
                  <th scope="row">{C.clientFirstName}{C.clientLastName}</th>
                  <td>
                    {C.clientEmail}
                  </td>
                  
                  <td>
                  
                  <Button
                    color="info"
                    href="#pablo"
                    onClick={() => acceptCandidat(C.clientId,candidat.jobId )}
                    size="sm"
                  >
                    Confirm
                  </Button>
               
                  </td>
                  <td>
                  <Button
                    color="default"
                    href="#pablo"
                    onClick={(e) => refuseCandidat(C.clientId,candidat.jobId )}
                    size="sm"
                  >
                    Refuse
                  </Button>
                  </td>
                  <td>
                    {C.status}
                  {/* <span className="text-warning mr-2">
                      <i className="fas fa-star" />  
                       <i className="fas fa-star" /> 
                       <i className="fas fa-star" /> 
                       <i className="fas fa-star" /> 
                       <i className="fas fa-star" /> 
                    </span>{" "} */}
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
           
            
          </Card>
        </Col>
        
      </Row>
    </Container>
    </div>
     ))}
      {/* Page content */}
      
    </>
  );
};

export default Index;
