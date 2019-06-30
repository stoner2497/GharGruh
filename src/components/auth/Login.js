import React, { Component } from 'react';
import Media from 'react-media'
import logo from '../../img/logo.png'
import {loginUser} from '../../Actions/authAction'
import Navbar from '../common/Navbar'
import {Card,CardBody,CardTitle,Form,FormGroup,Button,Input,Label,Row,Col} from 'reactstrap'
import {connect} from 'react-redux'

 class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      errors:{}
    }
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
      console.log('did')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }


  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }
  onSubmit = (e) => {
    e.preventDefault() 
      const {email,password} = this.state
     const currentUser = {
        email,
        password
      }
        this.props.loginUser(currentUser)
    }

  
    render() {
      const {email ,password} = this.state
        return (
          
          <React.Fragment>
            <Navbar />
            <div className="login-cover">
              <Media query="(max-width:767px)">
                {matches => 
                matches ? (
                  <img src={logo} className="login-image" alt="hello" />
                ) : null}
              </Media>
            <Row>
              <Col md="5"></Col>
              <Col md="3">
              <Card className="card1" style={{backgroundColor:'#04848D'}}>
              <CardBody>
                <CardTitle className="text-center"><h4 style={{color:'white'}}>Login</h4></CardTitle>
              </CardBody>
              <CardBody>
              <Form onSubmit={this.onSubmit} >
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                
                  <Input type="email" onChange={this.onChange} value={email} name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <br />
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
       
                  <Input type="password" name="password"  onChange={this.onChange} value={password} id="examplePassword" placeholder="don't tell!" />
                </FormGroup>
                <br />
                <small style={{color:'white'}}><b>FORGET PASSWORD..??</b></small>
                <br />
                <br />
                <FormGroup style={{justifyContent:'center'}}>
                <Button color="info">Submit</Button>
                </FormGroup>
              </Form>
              </CardBody>
             </Card>
              </Col>
              <Col md="4"></Col>
            </Row>
            </div>
          </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
  auth:state.auth,
  errors:state.errors
})
export default connect(mapStateToProps,{loginUser})(Login)