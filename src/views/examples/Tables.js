
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,Col,Button,CardBody,Form,FormGroup,Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect ,useState } from "react";
import axios from "axios";

const Tables = () => {

  const storedid = localStorage.getItem('companyid');
  const storedtoken = localStorage.getItem('partnertoken');
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sector, setSector] = useState("");
  const [salary, setSalary] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [location, setLocation] = useState("");

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
        console.log(response.data)
       
          } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, [storedid, storedtoken]);







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
  }, [storedid, storedtoken]);

  const handleFormSubmit = async() => {
  
  
    try {
      
      const endpointUrl = `/api/v1/jobs/addpartner/${storedid}`;
      const response = await axios.post(endpointUrl, {
        title,
        description,
        sector,
        salary,
        workTime,
        location
      }, {
        headers: {  
          Authorization: `Bearer ${storedtoken}`
        }
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }   
  };
  

  const handleJobDelete = async ( id) => {
    try{
      
      const endpointUrl = `/api/v1/jobs/${id}`;
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
  
          
        
  return (
    <>
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
     
      </div>
      
      <Container className="mt--7" fluid>
       
      <Row>
          <div className="col">
          <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add Job</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                     
                      onClick={handleFormSubmit}
                      size="sm"
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                 
                
                  <h6 className="heading-small text-muted mb-4">
                    Job information
                  </h6>
                  <div className="pl-lg-4">
                  <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Title
                          </label>
                          <Input
                            className="form-control-alternative"
                        
                          
                            placeholder="Title"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                          />
                        </FormGroup></Col>
                        <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Salary
                          </label>
                          <Input
                            className="form-control-alternative"
                           
                          
                            placeholder="300.00"
                            type="text"
                            value={salary}
                            onChange={(event) => {
                              const value = event.target.value;
                              const floatValue = parseFloat(value);
                              ;
                              setSalary(floatValue);
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
                            Sector
                          </label>
                          <Input
                            className="form-control-alternative"
                        
                           
                            placeholder="Sector"
                            type="text"
                            value={sector}
                            onChange={(event) => setSector(event.target.value)}
                          />
                        </FormGroup></Col>
                        <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            workTime
                          </label>
                          <Input
                            className="form-control-alternative"
                           
                         
                            placeholder="Lundi 5th Mar"
                            type="text"
                            value={workTime}
                            onChange={(event) => setWorkTime(event.target.value)}
                          />
                        </FormGroup>
                      </Col>
                        </Row>

                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Location
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                          
                            placeholder="Home Address"
                            type="text"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Description</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about the job ..."
                        rows="4"
                       
                        type="textarea"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
            </div></Row>



        {/* Offers list */}
       
        <Row>
          <div className="col">
            <Card className="shadow">
            <CardHeader className="border-0">
                <h3 className="mb-0">Job Offers</h3>
              </CardHeader>
               <CardBody>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Job</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Sector</th>
                    <th scope="col">Status</th>
                    <th scope="col">Settings</th>
                    
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {jobs && jobs.map((job) => (
                  <tr key={job.idJ}>
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
                        Open
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
                          <big onClick={()=> handleJobDelete(job.idJ)}><i className="fas fa-trash" /></big> 
                        </span>
                      </div>
                    </td>
                 
                  </tr>))}
                  </tbody></Table></CardBody>
              </Card>
          </div>
        </Row>
      </Container>
      </>
  );
};

export default Tables;
