import React, { Component } from 'react'
import {CustomInput, Row,Col, Button, Form, FormGroup, Label, Input, FormText ,Card} from 'reactstrap';


import step1 from '../../img/step1.png'

export default class PropertyDetail1 extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    
    render() {
       
        const  {value , onHandleChange} = this.props
        return (
           <React.Fragment> 
              <img src={step1} style={{ width: '68%',height: '56px',marginBottom:'5%',marginTop:'2%',marginLeft:'15%'}} alt="hello" />
                <Row>
                    <Col md="4">
                    </Col>
                    <Col md="4">
                    <Card style={{marginBottom:'5%'}} >
                        <Form style={{marginLeft:'3%',marginTop:'3%',marginRight:'3%'}}>
                            <h4 className="text-center">Add PropertyDetails </h4>
                            <hr />
                           
                            <h5>Rooms</h5>
                            <FormGroup>
                            <CustomInput type="select" id="exampleCustomSelect" value={value.rooms} name="rooms" onChange={onHandleChange}>
                                <option value="none">none</option>
                                <option value="1Rk">1RK</option>
                                <option value="1Bhk">1BHK</option>
                                <option value="2Bhk">2BHK</option>
                                <option value="3Bhk">3BHK</option>
                            </CustomInput>
                            </FormGroup>
                            {console.log(value.rooms)}
                            <h5>MasterBedroom</h5>
                            <FormGroup >
                            <CustomInput type="select" id="exampleCustomSelect" value={value.masterbedroom} name="masterbedroom" onChange={onHandleChange} >
                                <option value="No">No</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                            </CustomInput>
                            </FormGroup>
                            <FormGroup>
                            <h5>Parking</h5>
                            <CustomInput type="select" id="exampleCustomSelect" value={value.parking} name="parking" onChange={onHandleChange}>
                                <option value="none">none</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </CustomInput>
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.continue}>Next</Button>
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
