
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  DropdownMenu,
  DropdownItem,
  Media,
  UncontrolledDropdown,
  DropdownToggle
} from "reactstrap";

const AdminNavbar = () => {
  const storedid = localStorage.getItem('userid');
  const storedtoken = localStorage.getItem('usertoken');
  const [user, setUser] = useState(null);
  const history = useHistory();

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
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [storedid, storedtoken]);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/user" tag={Link}>
          <h3>
                    Flex
                    <small><span className="font-weight-light">STAFF</span></small>
                  </h3>
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
          
            <Nav className="ml-auto" navbar>
           
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/jobs"
                  tag={Link}
                >
                  <i cl assName="fas fa-search" />
                  <span className="nav-link-inner--text">Find Jobs</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/companies" tag={Link}>
                  <i className="ni ni-bullet-list-67 " />
                  <span className="nav-link-inner--text">Browse Companies</span>
                </NavLink>
              </NavItem>
              <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                {user && (
                  <Media className="align-items-center">
                     <i className="ni ni-circle-08" />
                    <Media className="ml-0 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        {user.firstName} {user.lastName}
                      </span>
                    </Media>
                  </Media>
                )  
                 
                }
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/userprofile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>

                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
