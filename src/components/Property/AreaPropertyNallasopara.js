import React, { Component } from 'react'
import {Jumbotron,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Button,} from 'reactstrap'
import Navbar from '../common/Navbar'
import Flat from '../../img/flat.jpg'


export default class AreaProperty extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : false
        }
    }

    onChangeEast = () => {
        const {value} = this.state;
        console.log(value)
        this.setState({
            value:false
        })
        
    }
    
    onChangeWest = () => {
        const {value} = this.state;
        console.log(value)
        this.setState({
            value:true
        })
        
    }
    
    render() {
        const {value} = this.state
        return (
            <React.Fragment>
                <Navbar />
                <Jumbotron className=" jumbo">
                <h1 className="display-3" style={{color:'black'}}><b>Nallasopara</b></h1>
                <hr />
                <div style={{float:'left'}}>
               <Row>
                   <Col md="6">
                   <p className="lead">
                     <Button color="info" onClick={this.onChangeEast}>East</Button> 
                   </p>
                   </Col>
                   <Col md="6">    
                    <p className="lead">
         <Button color="info" onClick={this.onChangeWest}>West</Button>
                    </p>   
                   </Col>
               </Row>

                
                </div>
                </Jumbotron>

                
                {value ? ( ( <React.Fragment>
                    <h3 style={{textAlign:'center'}}><u>Properties in west</u></h3>
                    <br/>
                     <section id="west">
                     <Row>
                       
                       <Col md="3">
                       <Card  >
                         <CardImg top width="100%" src={Flat} alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </Col>
          
                       <Col md="3">
                       <Card   >
                         <CardImg top width="100%" src={Flat} alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </Col>
          
          
          
                       <Col md="3">
                       <Card>
                         <CardImg top width="100%" src={Flat} alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </Col>
          
                       <Col md="3">
                       <Card>
                         <CardImg top width="100%" src={Flat} alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </Col>
                    
                     </Row>
                     </section>
                     </React.Fragment>)) : ( <React.Fragment>
                    <h3 style={{textAlign:'center'}}><u>Properties in East</u></h3>
                    <br/>
                     <section id="east">
                     <Row>
                       
                       <Col md="3">
                       <Card  >
                         <CardImg top width="100%" src={Flat} alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </Col>
          
                       <Col md="3">
                       <Card   >
                         <CardImg top width="100%" src={Flat} alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </Col>
          
          
          
                       <Col md="3">
                       <Card>
                         <CardImg top width="100%" src={Flat} alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </Col>
          
                       <Col md="3">
                       <Card>
                         <CardImg top width="100%" src={Flat} alt="Card image cap" />
                         <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                           <Button>Button</Button>
                         </CardBody>
                       </Card>
                       </Col>
                    
                     </Row>
                     </section>
                     </React.Fragment>) }
             
            </React.Fragment>
        )
    }
}
