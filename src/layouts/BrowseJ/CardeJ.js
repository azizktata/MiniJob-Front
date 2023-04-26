import React, { useState } from 'react'
import { Flex, Image, Spacer, Stack } from "@chakra-ui/react";
import {
    Button,
    Card,
    CardHeader,
    Media,
    CardBody,
    CardTitle,
    Row,
    Col,
    CardSubtitle,
  } from "reactstrap";
import axios from 'axios';
function CardeJ(props) {
  const storedtoken = localStorage.getItem('usertoken');
  const [isSuccess, setIsSuccess] = useState(false);


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

  return (
    <div>
        <Card 
        className="card-profile shadow" 
        style={{marginBottom:"5%"}}
        onClick={props.onClick}

        >
         <CardBody>
             <Row>
                 <div className="col" style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                    <span className="h2 font-weight-bold mb-0">
                          {props.title}
                    </span>

                        <br/>
                        <br/>
                    <CardSubtitle>{props.sector}</CardSubtitle>
                    <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-map-pin" />{props.location}</span>
                        
                    <span className="mt-3 mb-0 text-muted text-sm" >
                        <i className="fa fa-calendar" />  {props.workTime} </span>
                        
                </div>
                <Col className="col-auto">
                 <Media className="align-items-center">
                     <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      {props.salary}
                    </Button>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      
                      <span className="text-success mr-2">
                        <i className="fa fa-usd" /> 5 dt/hr
                      </span>{" "}
                    </p>
                 </Media>
                </Col>
             </Row>
             <Flex style={{marginTop:"10%", alignItems:"center"}}>
              <p style={{color:"green"}}>Still available</p>
              <Spacer />
              <Button style={{width:"200px"}} onClick={props.onApply}>Apply</Button>
            </Flex>
            </CardBody>
        </Card>
        
    </div>
  )
}

export default CardeJ