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
import { Button, Container, Row, Col } from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";

const UserHeader = () => {
  const storedid = localStorage.getItem('companyid');
  const storedtoken = localStorage.getItem('partnertoken');
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/v1/partners/${storedid}`, {
          headers: { 
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
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
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          // backgroundImage:
          //   "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>{user &&(
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello {user.firstName}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see your profile information
                and updated your profile
              </p>
           
            </Col>)}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
