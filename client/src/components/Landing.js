import React, { Component } from 'react'
import Media from 'react-media';
import {ClimbingBoxLoader} from 'react-spinners'
import {connect} from 'react-redux'
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Button,Jumbotron,Container,Row,Col} from 'reactstrap'



import {getProperties} from '../Actions/propertyAction'
import Logo from '../img/logo.png';
import bld from '../img/bld.png'
import Navbar from './common/Navbar'
import Flat from '../img/flat.jpg'


class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
        user: '5d0c877d7ded3138ccf35789',
        Name:'sahil',
        
    }
  } 

    componentDidMount() {
      this.props.getProperties()
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

      const {user} = this.props.auth
      const {properties,loading} = this.props.property 

      let LandingContent
      if(loading) {
        LandingContent = (
          
            <React.Fragment>
              <Col md="3"></Col>
            <Col md="5">
            <div>
                  <ClimbingBoxLoader
              sizeUnit={"px"}
              size={30}
              color={'black'}
              />
            </div>
          </Col>
            <Col md="3"></Col>
            </React.Fragment>
          
        )
      }
      else if(properties === null){
        LandingContent = (
          <Jumbotron className="text-center">
            <h5>NO FLATS AVAILABLE!!!</h5>
          </Jumbotron>
        )
      }else {
        LandingContent = Object.values(properties).map(value => {
          console.log(value)
          return (
            <Col md="3">
              <Card style={Styles.Card}  >
                <CardImg top width="100%" src={value.image} alt="Image Might not be available" />
                <CardBody>
                  <CardTitle>{value.rooms}</CardTitle>
                  <CardSubtitle>{value.area}sq.ft.</CardSubtitle>
                  <CardText>
                    <h5>master bedroom: {value.masterbedroom}</h5>
                    <h5>parking: {value.parking}</h5>
                    <h5>negotiable: {value.negotiable}</h5>
                  </CardText>
                  <Button>READ MORE</Button>
                </CardBody>
              </Card>
              </Col>
          )
        })
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
             {LandingContent}
            </Row>
            </Container>
        </React.Fragment>
           
        )
    }
}
const mapStateToProps = state => ({
  auth:state.auth,
  property:state.property
})
export default connect(mapStateToProps,{getProperties})(Landing)