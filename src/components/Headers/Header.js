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
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";


const Header = ({jobsOffered, jobDemands}) => {

  const jobSeekersLength = jobDemands ? jobDemands.length : 0;
  const jobsOfferedLength = jobsOffered ? jobsOffered.length : 0;
  const storedid = localStorage.getItem('companyid');
  const storedtoken = localStorage.getItem('partnertoken');
  const [user, setUser] = useState(null);
  const [rating, setRating] = useState(0);

  const history = useHistory();

  // get api/v1/ratings/partner/1 and store them in rating state
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axios.get(`/api/v1/ratings/partner/${storedid}`, {
          headers: { 
            Authorization: `Bearer ${storedtoken}`
          },
        data: {}
      });
      setRating(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  fetchRating()
  }, [storedid]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i className="fas fa-star" key={i} />);
    }
    return stars;
  };
  


  const CardD = ({title ,length}) => {
    return (
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-muted mb-0"
            >
             {title}
            </CardTitle>
            
          </div>
          <Col className="col-auto">
            <div className="icon icon-shape bg-red text-white rounded-circle shadow">
              <i className="fas fa-users" />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-warning mr-2">
            <i className="fas fa-check" /> 
           
            <span className="h2 font-weight-bold mb-2">
              
              {length}
            </span>
          </span>{" "}
          
        </p>
      </CardBody>
    </Card>
    )
  }
  
  return (
    <>
      <div className=" header  bg-gradient-info pb-8 pt-5 pt-md-8">
      <Container className="d-flex align-items-center"  fluid>
          <Row >{user &&(
            <Col lg="7" md="10" >
              <h1 className="display-2 text-white">Hello {user.firstName}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. 
              </p>
            
            </Col>)}
          </Row>
          </Container>
        <Container fluid >
          <div className="header-body " style={{}}>
      
            {/* Card stats */}
            <Row>
            <Col lg="3" xl="4">
            <CardD title="Job Demands" length={jobSeekersLength} />
            </Col>
              
            <Col lg="3" xl="4">
            <CardD title="Job Offers" length={jobsOfferedLength} />
            </Col>
              
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Rating
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">Stars</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-star" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                      {renderStars(rating)}
                       
                      </span>{" "}
                      
                    </p>
                  </CardBody>
                </Card>
              </Col>
              
            </Row>
          </div>
        </Container>
        
      </div>
    </>
  );
};


export default Header;
