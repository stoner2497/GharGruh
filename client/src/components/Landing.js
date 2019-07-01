import React, { Component } from 'react'
import Media from 'react-media';
import Navbar from './common/Navbar'
import Logo from '../img/logo.png';
import bld from '../img/bld.png'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Button,Jumbotron,Container,Row,Col} from 'reactstrap'
import Flat from '../img/flat.jpg'
export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
        user: '5d0c877d7ded3138ccf35789',
        Name:'sahil',
        
    }
  } 

    render() {
      const Styles = {
        JumbotronMedium:{
          backgroundColor:'white'
        },
        HeadingContanetMedium:{
          marginLeft:10,
          marginTop:5

        },
        Card:{
          paddingTop:'5%'
        }
      }
        return (
        <React.Fragment >
          <Navbar />
          <Jumbotron fluid className="landing" style={Styles.JumbotronMedium}>
                    <br/>
                    <br/>
                    <br/>
                    <Media query="(min-width: 1025px)">
                      {matches => 
                      matches ? (
                        <div style={{float:'right' ,marginRight:"5%",marginTop:"5%"}}>
                          <img src={bld} alt="no image" style={{height:'310px'}} />
                        </div>
                      ): null}
                    </Media>
                      <div className="jumbotron-heading " style={Styles.HeadingContanetMedium} >
                     <h3 className="header-font" style={{color:'#04848D'}}> GharGruh Gives You Full Ability To Sell Or Buy Property <br/>  No Broker In Between <br /> At Afordable Low Rate Commision On <br />Every Property You Sell Or Buy </h3> 
                   
                    <p className="lead jumbotron-gaping"></p>
                    <hr style={{color:'white'}} className="my-2" />
                    <p style={{color:'#04848D'}}>Flat 30,000 INR. From One Side Buyer/Seller On Every Property .</p>
                   <div className="left-header">

                     <h4 style={{color:'#04848D'}}>We Are At</h4>
                   </div>
                    <p className="lead jumbotron-gaping left" >
                      <Button color="info">Vasai</Button>
                    </p>
                    <p className="lead jumbotron-gaping left" >
                      <Button color="info">Nallasopara</Button>
                    </p>
                    <p className="lead jumbotron-gaping left" >
                      <Button color="info">Virar</Button>
                    </p>
                    </div>
                  
                    </Jumbotron>
          <hr />
          <Container fluid>
          <h3 style={{textAlign:'center'}}><u>Recommended Property</u></h3>
          <br/>
            <Row>
             
              <Col md="3">
              <Card style={Styles.Card}  >
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
            </Container>
        </React.Fragment>
           
        )
    }
}
