import React, { Component } from 'react'
import {CustomInput, Row,Col, Button, Form, FormGroup, Label, Input, FormText ,Card,InputGroup,InputGroupAddon,Modal,ModalBody,ModalHeader,ModalFooter,ListGroup,ListGroupItem} from 'reactstrap';  
import {connect} from 'react-redux'



import PropertyDetail1 from './AddPropertyStep1'
import PropertDetail2 from './AddPropertyStep2'
import PropertDetail3 from './AddPropertyStep3'
import Navbar from '../common/Navbar'
import step1 from '../../img/step1.png'

import {addProperty} from '../../Actions/propertyAction'

 class AddProperty extends Component {
  constructor(props) {
      super(props);
      this.state = {
        step:1,
        Name:'',
        mobileNumber:'',
        alternateNumber:'',
        Address:'',
        pincode:'',
        DaysToVisit:'',
        TimeToVisit:'',
        negotiable:'',
        PriceOfProperty:'',
        rooms:'',
        masterbedroom:'',
        parking:'',
        area:'',
        image:null,
        modal:false
    }
    this.onHandleChange = this.onHandleChange.bind(this)
    this.toggle = this.toggle.bind(this);
    this.fileInput = React.createRef();
    
  }
  
 
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
    nextStep = (e) => {
        const {step} = this.state;
        this.setState({
            step:step + 1
        })
    }
    prevStep = (e) => {
        const {step} = this.state;
        this.setState({
            step:step - 1
        })
        console.log(step)
    }
    onHandleChange(event) {
        const target = event.target;
        const value = target.type === 'file' ? URL.createObjectURL(target.files[0]) : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value || URL.createObjectURL(target.files[0])
            
        });
      }
     
    onSubmit = e => {
        e.preventDefault();
        const {name} = this.props.auth
        const {Name,mobileNumber,alternateNumber,Address,pincode,DaysToVisit,TimeToVisit,negotiable,PriceOfProperty,rooms,masterbedroom,parking,area,image} = this.state
        const formData = new FormData();
        formData.append('file', this.state.file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const newProperty = {
            Name,
            mobileNumber,
            alternateNumber,
            Address,pincode,
            DaysToVisit,
            TimeToVisit,
            negotiable,
            PriceOfProperty,
            rooms,
            masterbedroom,
            parking,
            area,
            image
        }
        
        this.props.addProperty(newProperty,config)
        console.log(newProperty)
    }
    onRender = () => {
        const {step } = this.state;
        const {Name,mobileNumber,alternateNumber,Address,pincode,DaysToVisit,TimeToVisit,negotiable,PriceOfProperty,nearbyThings,rooms,masterbedroom,parking,area} = this.state
        const image = this.props.image
        const values = {
            Name,mobileNumber,alternateNumber,Address,pincode,DaysToVisit,TimeToVisit,negotiable,PriceOfProperty,nearbyThings,image,rooms,masterbedroom,parking,area
        }
        switch(step) {
            case 1:
                return (
                    <PropertyDetail1 
                        value={values}
                        nextStep={this.nextStep}
                        onHandleChange={this.onHandleChange }
                        />
                )
            case 2: 
                return (
              <PropertDetail2 
              value={values}
              nextStep={this.nextStep}
              onHandleChange={this.onHandleChange }
              prevStep={this.prevStep}
              />
                )
            case 3:
                return (
                    <React.Fragment> 
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <Form onSubmit={this.onSubmit}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                      
                        <ListGroup>
                            <ListGroupItem>Name:{values.Name}</ListGroupItem>
                            <ListGroupItem>MobileNumber:{values.mobileNumber}</ListGroupItem>
                            <ListGroupItem>Alternate Number:{values.alternateNumber}</ListGroupItem>
                            <ListGroupItem>Address:{values.Address}</ListGroupItem>
                            <ListGroupItem>Pincode:{values.pincode}</ListGroupItem>
                            <ListGroupItem>Image:{values.image}</ListGroupItem>
                            <ListGroupItem>DaysToVisit:{values.DaysToVisit}</ListGroupItem>
                            <ListGroupItem>Negotialble{values.negotiable}</ListGroupItem>
                            <ListGroupItem>TimeToVisit{values.TimeToVisit}</ListGroupItem>
                            <ListGroupItem>Price Of Property:{values.PriceOfProperty}</ListGroupItem>
                            <ListGroupItem>Master Bedroom:{values.masterbedroom}</ListGroupItem>
                            <ListGroupItem>Rooms:{values.rooms}</ListGroupItem>
                            <ListGroupItem>Parking:{values.parking}</ListGroupItem>
                            <ListGroupItem>Area{values.area}</ListGroupItem>
                        </ListGroup>
                    
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary">Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                        </Form>
                        </Modal>
                  <img src={step1} style={{ width: '68%',height: '56px',marginBottom:'5%',marginTop:'2%',marginLeft:'15%'}} alt="hello" />
                    <Row>
                        <Col md="4">
                        </Col>
                        <Col md="4">
                        <Card style={{marginBottom:'5%'}} >
                            <Form style={{marginLeft:'3%',marginTop:'3%',marginRight:'3%'}} encType="multipart/form-data">
                                <h4 className="text-center">Add PropertyDetails </h4>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                       
                                        <Input type="file"  onChange={this.onHandleChange} name="image"   />
                                    </InputGroup>
                                </FormGroup>
                               <FormGroup>
                                   <InputGroup>
                                    <InputGroupAddon>Sq.Ft</InputGroupAddon>
                                    <Input type="text" value={values.area} name="area" onChange={this.onHandleChange} />
                                   </InputGroup>
    
                               </FormGroup>
                               <FormGroup>
                                   <InputGroup>
                                    <InputGroupAddon>Name</InputGroupAddon>
                                    <Input type="text" value={values.Name} name="Name" onChange={this.onHandleChange} />
                                   </InputGroup>
    
                               </FormGroup>
                               <FormGroup>
                                   <InputGroup>
                                    <Input type="number" value={values.mobileNumber} placeholder="Mobile Number" name="mobileNumber" onChange={this.onHandleChange} />
                                   </InputGroup>
    
                               </FormGroup>
                               <FormGroup>
                                   <InputGroup>
                                    <Input type="number" placeholder="alternate Mobile Number" value={values.alternateNumber} name="alternateNumber" onChange={this.onHandleChange} />
                                   </InputGroup>
    
                               </FormGroup>
                               <FormGroup>
                                   <InputGroup>
                                    <Input type="textarea"  placeholder="Address" value={values.Address} name="Address" onChange={this.onHandleChange} />
                                   </InputGroup>
    
                               </FormGroup>
                               <h5>Pincode</h5>
                               <FormGroup>
                               <CustomInput type="select" id="exampleCustomSelect" value={values.pincode} name="pincode" onChange={this.onHandleChange} >
                                    <option value="none">none</option>
                                    <option value="401305">401305</option>
                                    <option value="401303">401303</option>
                                    <option value="401203">401203</option>
                                    <option value="401209">401209</option>
                                    <option value="401208">401208</option>
                                    <option value="401202">401202</option>
                                </CustomInput>
    
                               </FormGroup>
                               <FormGroup>
                                   <Button onClick={this.prevStep}>
                                       Back
                                   </Button>
    
                                   <Button onClick={this.toggle}>
                                       Continue
                                   </Button>
                               </FormGroup>
    
                            </Form>
                    </Card>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </React.Fragment>
                )
        }
      
    }
    render() {
        
        return (
           <React.Fragment>
               <Navbar />
               {this.onRender()}
           </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{addProperty})(AddProperty)
