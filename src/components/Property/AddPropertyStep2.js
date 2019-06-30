import React, { Component } from 'react'
import {CustomInput, Row,Col, Button, Form, FormGroup, Label, Input, FormText ,Card,InputGroup,InputGroupAddon} from 'reactstrap';


import step1 from '../../img/step1.png'

export default class PropertyDetail1 extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    Previous = e => {
        e.preventDefault()
        this.props.prevStep()
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
                            <h5>Days To Visit</h5>
                            <FormGroup>
                            <CustomInput type="select" id="exampleCustomSelect" value={value.DaysToVisit} name="DaysToVisit" onChange={onHandleChange}>
                                <option value="none">none</option>
                                <option value="1Rk">Mon-Fri</option>
                                <option value="1Bhk">Sat-Sun</option>
                            </CustomInput>
                            </FormGroup>
                            <h5>Time To Visit</h5>
                            <FormGroup >
                            <CustomInput type="select" id="exampleCustomSelect" value={value.TimeToVisit} name="TimeToVisit" onChange={onHandleChange}>
                                <option value="none">none</option>
                                <option value="10:00am-12:00pm">10:00am-12:00pm</option>
                                <option value="12:30pm-1:30pm">12:30pm-1:30pm</option>
                                <option value="2:00pm-6:00pm">2:00pm-6:00pm</option>
                            </CustomInput>
                            </FormGroup>
                            <FormGroup>
                            <h5>Negotiable</h5>
                            <CustomInput type="select" id="exampleCustomSelect" value={value.negotiable} name="negotiable" onChange={onHandleChange}>
                                <option value="none">none</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </CustomInput>
                            </FormGroup>
                            <FormGroup>
                            </FormGroup>
                            <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">₹</InputGroupAddon>
                                <Input type="number" placeholder="Price" name="PriceOfProperty" value={value.PriceOfProperty} onChange={onHandleChange} />
                            </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.continue}>Continue</Button>{' '}
                                <Button onClick={this.Previous}>Back</Button>
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
