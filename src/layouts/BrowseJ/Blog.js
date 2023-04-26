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
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
const Blog = (props) => {
  return (
    <Card style={{margin:"5%"}}>
      <CardImg alt="Card image cap" src="assets/images/coverPhoto.jpg" top
      width="100%" />
      <Image alt="Card image cap" src={props.image} boxSize='150px'
    objectFit='cover' style={{zIndex:"1", position:"absolute", margin:"35% 7%"}}/>
      <CardBody className="p-4" style={{zIndex:"2", marginTop:"20%"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      
          
        <CardText className="mt-3"> <HomeRepairServiceIcon />{props.service}</CardText>
        
        <CardText className="mt-3"> <LocationOnSharpIcon />{props.location}</CardText>
        </div>
        <Flex style={{marginTop:"15%", alignItems:"center"}}>
          <a>3 Available jobs</a>
          <Spacer />
          <Button >Follow</Button>
        </Flex>
        
      </CardBody>
    </Card>
  );
};

export default Blog;
