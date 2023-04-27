import React, { useEffect, useState } from 'react'

import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

import UserNavbar from "components/Navbars/UserNavbar.js";

import CardeC from "./CardeC"
import axios from 'axios';

function Browse() {

  const handleSearch = (event) => {
  //   var v = event.target.value
  //  setsearchTerm(v);
  //  BlogData.filter((item)=> item.includes(searchTerm))
  }
  const [searchTerm, setsearchTerm] = useState("")

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
   
  const storedtoken = localStorage.getItem('usertoken');
  const storedid = localStorage.getItem('userid');
  const [company,setCompanys] = useState(null)
  const [nbr,setNbr] = useState(null)
  const [rate,setRate] = useState(0)

  const fetchRate = async (idP) => {
    try {
      const response = await axios.get(`/api/v1/ratings/partner/${idP}`, {
        headers: { 
          Authorization: `Bearer ${storedtoken}`
        },
      data: {}
    });
    setRate(response.data)
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`/api/v1/partners`, {
          headers: { 
            Authorization: `Bearer ${storedtoken}`
          },
        data: {}
      });
      // console.log(response.data)
      setCompanys(response.data);
      await fetchRate(response.data[0].idP)
      setNbr(response.data[0].jobs.length)
    } catch (error) {
      console.error(error);
    }
  };
  fetchCompanies();
}, []);

const [isSuccess, setIsSuccess] = useState(false);

const followPartner = async (idP) => {
  try {
    const response = await axios.put(`/api/v1/clients/${storedid}/partner/${idP}`,{} ,{
      headers: { 
        Authorization: `Bearer ${storedtoken}`
      },
   
  });
   console.log(response.data)
   setIsSuccess(true);
} catch (error) {
  console.error(error);
}
};

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
    
    <div className='main-content' ref={mainContent}>
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


      <div className='Layouts' style={{margin:"5%", flexFlow:"row wrap"}}>
      <Row>
        {company && company.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <CardeC
              
              title={blg.businessName}
              subtitle={blg.description}
              service={blg.sector}
              location={blg.businessLocation}
              nbrJobs = {nbr}
              rate = {rate}
              onClick = {()=>followPartner(blg.idP)}
            />
          </Col>
        ))}
      </Row>
      </div>
    </div>
  
  )
}
const BlogData = [
  {
    image: "../../assets/img/theme/sketch.jpg",
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    service:
      "Livraison",
    location:"Tunis",
    btnbg: "primary",
  },
  {
  image: "../../assets/img/theme/sketch.jpg",
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    service:
      "Livraison",
    location:"Tunis",
    btnbg: "primary",
  },
  {
  image: "../../assets/img/theme/sketch.jpg",
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    service:
      "Livraison",
    location:"Tunis",
    btnbg: "primary",
  },
  {
    image: "../../assets/img/theme/sketch.jpg",
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      service:
        "Livraison",
      location:"Tunis",
      btnbg: "primary",
    },
    {
      image: "../../assets/img/theme/sketch.jpg",
        title: "This is simple blog",
        subtitle: "2 comments, 1 Like",
        service:
          "Livraison",
        location:"Tunis",
        btnbg: "primary",
      }
];

export default Browse