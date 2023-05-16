import { Flex, Image, Spacer, Stack } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
 // import from react icons
import { MdHomeRepairService } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaStar } from 'react-icons/fa';

const Blog = (props) => {
  return (
    <Card style={{margin:"3%"}}>
      <CardImg alt="Card image cap" src={require("../../assets/img/theme/"+props.imageP)} top
      width="100%" />
      <Image className="rounded-circle" alt="Card image cap" src={require("../../assets/img/theme/"+props.imageC)} boxSize='150px'
    objectFit='cover' style={{zIndex:"1", position:"absolute", margin:"55% 7%"}}/>
      <CardBody className="p-4" style={{zIndex:"2"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        
        <Flex style={{width:"100%"}}>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <Spacer />
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <FaStar color="gold"/>
          <span  style={{ marginLeft: '0.5rem' }}>{props.rate}</span>
        </span>
        </Flex>
        
        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <FaStar />
          <span  style={{ marginLeft: '0.5rem' }}>{props.rate}</span>
        </span> */}
       
        
        {/* <CardTitle tag="h5">{props.title}</CardTitle> */}
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      
          
        <CardText className="mt-3"> <MdHomeRepairService />{props.service}</CardText>
        
        <CardText className="mt-3"> <MdOutlineLocationOn />{props.location}</CardText>
        </div>
        <Flex style={{marginTop:"15%", alignItems:"center"}}>
          <a>{props.nbrJobs} Available jobs</a>
          <Spacer />
          <Button onClick={props.onClick}>Follow</Button>
        </Flex>
        
      </CardBody>
    </Card>
  );
};

export default Blog;
