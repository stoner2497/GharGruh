import React, { Component } from 'react'
import {CustomInput, Row,Col, Button, Form, FormGroup, Label, Input, FormText ,Card,InputGroup,InputGroupAddon,Modal,ModalBody,ModalHeader,ModalFooter,ListGroup,ListGroupItem} from 'reactstrap';


import step1 from '../../img/step1.png'

export default class PropertyDetail1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        };
    
        this.toggle = this.toggle.bind(this);
        this.fileInput = React.createRef();
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }



    Previous = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    submit = e => {
        // e.preventDefault()
        this.props.value.image = this.fileInput.current.value
        this.props.onSubmit()
    }
    
    render() {
        const  {value , onHandleChange} = this.props
        return (
           <React.Fragment> 
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                  <Form onSubmit={this.submit()}>
                    <ListGroup>
                        <ListGroupItem>Name:{value.Name}</ListGroupItem>
                        <ListGroupItem>MobileNumber:{value.mobileNumber}</ListGroupItem>
                        <ListGroupItem>Alternate Number:{value.alternateNumber}</ListGroupItem>
                        <ListGroupItem>Address:{value.Address}</ListGroupItem>
                        <ListGroupItem>Pincode:{value.pincode}</ListGroupItem>
                        <ListGroupItem>Image:{value.image}</ListGroupItem>
                        <ListGroupItem>DaysToVisit:{value.DaysToVisit}</ListGroupItem>
                        <ListGroupItem>Negotialble{value.negotiable}</ListGroupItem>
                        <ListGroupItem>TimeToVisit{value.TimeToVisit}</ListGroupItem>
                        <ListGroupItem>Price Of Property:{value.PriceOfProperty}</ListGroupItem>
                        <ListGroupItem>Master Bedroom:{value.masterbedroom}</ListGroupItem>
                        <ListGroupItem>Rooms:{value.rooms}</ListGroupItem>
                        <ListGroupItem>Parking:{value.parking}</ListGroupItem>
                        <ListGroupItem>Area{value.area}</ListGroupItem>
                    </ListGroup>
                    </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.submit}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
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
                                    <InputGroupAddon>
                                        <small>Image</small>
                                    </InputGroupAddon>
                                    <Input type="file" value={value.image} name="image" ref={this.fileInput}    />
                                </InputGroup>
                            </FormGroup>
                           <FormGroup>
                               <InputGroup>
                                <InputGroupAddon>Sq.Ft</InputGroupAddon>
                                <Input type="text" value={value.area} name="area" onChange={onHandleChange} />
                               </InputGroup>

                           </FormGroup>
                           <FormGroup>
                               <InputGroup>
                                <InputGroupAddon>Name</InputGroupAddon>
                                <Input type="text" value={value.Name} name="Name" onChange={onHandleChange} />
                               </InputGroup>

                           </FormGroup>
                           <FormGroup>
                               <InputGroup>
                                <Input type="number" value={value.mobileNumber} placeholder="Mobile Number" name="mobileNumber" onChange={onHandleChange} />
                               </InputGroup>

                           </FormGroup>
                           <FormGroup>
                               <InputGroup>
                                <Input type="number" placeholder="alternate Mobile Number" value={value.alternateNumber} name="alternateNumber" onChange={onHandleChange} />
                               </InputGroup>

                           </FormGroup>
                           <FormGroup>
                               <InputGroup>
                                <Input type="textarea"  placeholder="Address" value={value.Address} name="Address" onChange={onHandleChange} />
                               </InputGroup>

                           </FormGroup>
                           <h5>Pincode</h5>
                           <FormGroup>
                           <CustomInput type="select" id="exampleCustomSelect" value={value.pincode} name="pincode" onChange={onHandleChange} >
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
                               <Button onClick={this.Previous}>
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
