import React, { Component } from 'react';
import logo from '../../img/logo.png';
import Media from 'react-media'
import Navbar from '../common/Navbar'
import {Card,CardBody,CardTitle,Form,FormGroup,Button,Input,Label,Row,Col,Toast,ToastHeader,ToastBody} from 'reactstrap'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom' 

import {registerUser} from '../../Actions/authAction'
 class Register extends Component {
   constructor(props){
     super(props);
     this.state = {
       name:'',
       email:'',
       password:'',
       errors:{}
     }
   }

   onChange = (e) => {
     this.setState({
       [e.target.name]:e.target.value
     })
   }

   componentWillReceiveProps(nextProps) {
     if(nextProps.errors) {
       this.setState({
         errors:nextProps.errors
       })
     }
   }

   onSubmit = (e) => {
     e.preventDefault()
     const {name ,email,password} = this.state
    const newUser = {
       name ,
       email,
       password
     }
     this.props.registerUser(newUser,this.props.history)
   }

   onError = () => {
     const {errors} = this.state;
     if(errors.length > 0) {
       return (<Toast>
         <ToastBody>
           {errors}
         </ToastBody>
       </Toast>)
     }else {
      return null
     }
     console.log(errors)
   }
    render() {
      const {errors} = this.state;
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
                <CardTitle className="text-center"><h4 style={{color:'white'}}>Register</h4></CardTitle>
              </CardBody>
              <CardBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="name" value={this.state.name} onChange={this.onChange}  placeholder="Name " />
              </FormGroup>
              <br />
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                
                  <Input type="email" name="email" value={this.state.email} onChange={this.onChange} id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <br />
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
       
                  <Input type="password" name="password" value={this.state.password} onChange={this.onChange} id="examplePassword" placeholder="don't tell!" />
                </FormGroup>
               
   
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

export default connect(mapStateToProps, { registerUser })(withRouter(Register));