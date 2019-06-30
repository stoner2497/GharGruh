import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import Logo from '../../img/logo.png';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {logoutUser} from '../../Actions/authAction'

 class Navbars extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  onLogoutClick (e)  {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const {isAuthenticated,user} = this.props.auth
    let guestLinks = (
      <Navbar color="" style={{backgroundColor:'#6BE5F8',marginBottom:'2%'}} light>
      <NavbarBrand href="/" className="mr-auto">
          <img src={Logo} />
      </NavbarBrand>
      <Nav navbar style={{marginRight:10}}>
      <UncontrolledDropdown nav >
            <DropdownToggle nav caret>
                Languages
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>    
      </Nav>
      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      <Collapse isOpen={!this.state.collapsed} navbar>
      <Nav >
  <NavItem>
  <Link to="/Login">
    <h6 className="nav-link">
      Login
    </h6>
  </Link>
</NavItem>
<NavItem>
  <Link to="Register">
    <h6 className="nav-link">Register</h6>
  </Link>
</NavItem>
<NavItem>
            <Link to="/">
              <h6 className="nav-link">Home</h6>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/AreaProperty/Vasai">
              <h6 className="nav-link">Vasai</h6>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/AreaProperty/Virar">
              <h6 className="nav-link">Virar</h6>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/AreaProperty/Nallasopara">
              <h6 className="nav-link">Nallasopara</h6>
            </Link>
          </NavItem>
</Nav>
      </Collapse>
    </Navbar>
    );
    let authLinks = (
      <Navbar color="" style={{backgroundColor:'#6BE5F8',marginBottom:'2%'}} light>
      <NavbarBrand href="/" className="mr-auto">
          <img src={Logo} />
      </NavbarBrand>
      <Nav navbar style={{marginRight:10}}>
      <UncontrolledDropdown nav >
            <DropdownToggle nav caret>
                Languages
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>    
      </Nav>
      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      <Collapse isOpen={!this.state.collapsed} navbar>
      <Nav >
        
        <NavItem>
            <Link to="/">
              <h6 className="nav-link">Home</h6>
            </Link>
          </NavItem>
          <NavItem>
          <Link to="AddProperty">
            <h6 className="nav-link">AddProperty</h6>
          </Link>
        </NavItem>
          <NavItem>
            <Link to="/AreaProperty/Vasai">
              <h6 className="nav-link">Vasai</h6>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/AreaProperty/Virar">
              <h6 className="nav-link">Virar</h6>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/AreaProperty/Nallasopara">
              <h6 className="nav-link">Nallasopara</h6>
            </Link>
          </NavItem>
          <NavItem>
             <NavLink href="">
               <h6  onClick={this.onLogoutClick.bind(this)}>Logout</h6>
               </NavLink>
            </NavItem>
 </Nav>
      </Collapse>
    </Navbar>
    );

    return (
      <div >
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth:state.auth
})

export default  connect(mapStateToProps,{logoutUser})(Navbars)