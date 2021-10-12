import React, { Component } from 'react'
import { Nav,NavItem, NavLink, Navbar ,NavDropdown ,Container,Carousel,Row,Col,Card,Button,ButtonGroup,Image,ToggleButton,ToggleButtonGroup} from "react-bootstrap";

export class Layout extends Component {
    render() {
        return (
            <div className="bgcolor">
            
           
        <Container fluid={true}>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./img/head1.png"
                alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./img/head2.png"
                alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./img/head3.png"
                alt="Third slide"
                />

                
            </Carousel.Item>
            </Carousel>
            </Container>
            <Container fluid={true} className="cardmargin">
            <Row className="cardmargin3">
                <Col> 
                <Card bg="primary" >
                <Card.Body>
                    <Card.Text style={{color: "white"}}><b><span class="fa fa-plane"> </span> FREE SHOPPING WORLDWIDE</b></Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card bg="danger" >
               <Card.Body>
                   <Card.Text style={{color: "white"}}><b><span class="fa fa-refresh"> </span> 100% MONEY BACK - 48 HOURS</b></Card.Text>
               </Card.Body>
               </Card >
               </Col>
                <Col>
                <Card bg="warning" >
               <Card.Body>
                   <Card.Text style={{color: "white"}}><b><span class="fa fa-bullseye"> </span>  24/7 ONLINE CUSTOMER SUPPORT</b></Card.Text>  
               </Card.Body>
               </Card></Col>
            </Row>
            </Container>
            <Container>
            <h4> FEATURED COLLECTIONS</h4>
            <hr style={{ align:"center"}}  />
            <p> NEW ARRIVAL  -  CLOTHING  -  HATS -  SHOES  -  BAGS  -  ACCESORIES</p>
            </Container>
            <Container fluid={true} >
            <Row className="cardmarg">
                <Col><Card className="border-0">
                <Card.Img variant="top" src="./img/1.png" height="200"/>
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text  className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/2.png" height="200" />
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/3.png" height="200" />
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/4.png" height="200" />
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/5.png" height="200" />
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/6.png" height="200"/>
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
            </Row>
            <Row className="cardmargin">
                <Col ><Card  > 
                <Card.Img variant="top" src="./img/7.png" height="200" />
                <Card.Body >
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text  className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/8.png" height="200" />
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/9.png" height="200"/>
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/10.png" height="200" />
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/11.png" height="200"/>
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
                <Col><Card>
                <Card.Img variant="top" src="./img/12.png" height="200"/>
                <Card.Body>
                    <Card.Title>Leatt pro jacket</Card.Title>
                    <Card.Text className="text-danger">
                    $200
                    </Card.Text>
                </Card.Body>
                </Card></Col>
            </Row>
            </Container>
            <Container fluid={true}>
            <Card >
            <Row>
                <Col sm={7}>
            <Card.Img variant="top" src="./img/cardimg.png" width="800" height="700" /></Col>
                <Col ><Card.Body>
                <Card.Title>HOT DEALS</Card.Title><br/><br/>
                <Card.Text>
                <h1 >Tulos Draey Skirts</h1>
                <span class="fa fa-star checked " data-rating="1"></span>
                <span class="fa fa-star checked" data-rating="2"></span>
                <span class="fa fa-star checked" data-rating="3"></span>
                <span class="fa fa-star checked" data-rating="4"></span>
                 <span class="fa fa-star " data-rating="5"></span>
                 <br/><br/>
                <h3 class="text-danger">$230.00</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae maxime error possimus necessitatibus nesciunt mollitia, debitis ab aliquam suscipit. Iusto aliquid quaerat mollitia perferendis, facilis provident quos numquam tempora?
                </p><br/>
                COLOR: &nbsp; <span className="dot1"> </span> <span className="dot2"> </span> <span className="dot3"> </span><br/><br/>
                SIZE: &nbsp;
                <ButtonGroup aria-label="Basic example">
                <Button variant="light">S</Button>
                <Button variant="light">M</Button>
                <Button variant="light">L</Button>
                <Button variant="light">XS</Button>
                </ButtonGroup>
                </Card.Text><br/>
                <Button variant="primary" size="lg" active>
                25 <br/>Days 
                </Button>{' '}
                <Button variant="primary" size="lg" active>
                14 <br/>Hour
                </Button>{' '}
                <Button variant="primary" size="lg" active>
                57 <br/>Mins
                </Button>{' '}
                <Button variant="primary" size="lg" active>
                43 <br/>Secs
                </Button>
            </Card.Body></Col>
            </Row>
            </Card>
            </Container>
            <Container  fluid={true} className="cardmargin">
                <h4>INSTAGRAM</h4>
                <hr className="container"/>
                <Row>
                <Col md={2}>
                <Image src="./img/i1.png" thumbnail />
                </Col>
                <Col md={2}>
                <Image src="./img/i2.png" thumbnail  />
                </Col>
                <Col md={2}>
                <Image src="./img/i3.png" thumbnail  />
                </Col>
                <Col md={2}>
                <Image src="./img/i4.png" thumbnail  />
                </Col>
                <Col md={2}>
                <Image src="./img/i5.png" thumbnail  />
                </Col>
                <Col md={2}>
                <Image src="./img/i6.png" thumbnail  />
                </Col>
            </Row>
            </Container>
            <Container fluid={true} className="cardmargin">
            <Row className="cardmargin3">
                <Col> 
                <Card >
                    <br/>
                <Card.Title>BEST SELLERS</Card.Title>
                <hr/>
                <Card.Body>
                    <Card className="border-0">
                    <Row>
                        <Col><Card.Img variant="top" src="./img/c1.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Leatt Pro Jacket</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span><br/>
                            <span class="text-danger">$99.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    <Card className="cardhorz border-0">
                    <Row>
                        
                    <Col>
                    <Card.Img variant="top" src="./img/c2.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Original Achilles Mid</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span>

                            <br/>
                            <span class="text-danger">$260.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    <Card className="cardhorz border-0">
                    <Row>
                        
                    <Col>
                    <Card.Img variant="top" src="./img/c3.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Vinperl Handbag</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span><br/>
                            <span class="text-danger">$220.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    
                </Card.Body>
                </Card>
                </Col>
                <Col> 
                <Card >
                    <br/>
                <Card.Title>TOP RATE</Card.Title>
                <hr/>
                <Card.Body>
                    <Card className="border-0">
                    <Row>
                        <Col><Card.Img variant="top" src="./img/c4.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Leatt Pro Jacket</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span><br/>
                            <span class="text-danger">$99.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    <Card className="cardhorz border-0">
                    <Row>
                        
                    <Col>
                    <Card.Img variant="top" src="./img/c5.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Original Achilles Mid</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span>

                            <br/>
                            <span class="text-danger">$260.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    <Card className="cardhorz border-0">
                    <Row>
                        
                    <Col>
                    <Card.Img variant="top" src="./img/c6.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Vinperl Handbag</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span><br/>
                            <span class="text-danger">$220.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    
                </Card.Body>
                </Card>
                </Col>
                
                <Col> 
                <Card >
                    <br/>
                <Card.Title>TOP SPECIAL</Card.Title>
                <hr/>
                <Card.Body>
                    <Card className="border-0">
                    <Row>
                        <Col><Card.Img variant="top" src="./img/c7.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Leatt Pro Jacket</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span><br/>
                            <span class="text-danger">$99.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    <Card className="cardhorz border-0">
                    <Row>
                        
                    <Col>
                    <Card.Img variant="top" src="./img/c8.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Original Achilles Mid</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span>

                            <br/>
                            <span class="text-danger">$260.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    <Card className="cardhorz border-0">
                    <Row>
                        
                    <Col>
                    <Card.Img variant="top" src="./img/c9.png" className="border"/></Col>
                        <Col><Card.Text>
                            <br/>
                            <b>Vinperl Handbag</b><br/>
                            <span class="fa fa-star checked " data-rating="1"></span>
                            <span class="fa fa-star checked" data-rating="2"></span>
                            <span class="fa fa-star checked" data-rating="3"></span>
                            <span class="fa fa-star checked" data-rating="4"></span>
                            <span class="fa fa-star " data-rating="5"></span><br/>
                            <span class="text-danger">$220.00</span><br/><br/>
                            <ButtonGroup aria-label="Basic example">
                            <Button variant="light fa fa-shopping-cart"></Button>
                            <Button variant="light fa fa-refresh"></Button>
                            <Button variant="light fa fa-heart"></Button>
                            <Button variant="light  fa fa-eye"></Button>
                            </ButtonGroup>
                
                            </Card.Text></Col>
                    </Row>
                    </Card>
                    
                </Card.Body>
                </Card>
                </Col>
                
            </Row>
            </Container>
            <Container fluid={true}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./img/foot1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./img/foot1.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./img/foot1.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                <Container fluid={true}>
                <Row>
                <Col className="bg-primary pt-3 pb-3 text-light"><span class="fa fa-facebook"></span> FACEBOOK</Col>
                <Col className="bg-info pt-3 pb-3 text-light"><span class="fa fa-twitter"></span> TWITTER</Col>
                <Col className="bg-danger pt-3 pb-3 text-light"><span class="fa fa-instagram"></span> INSTAGRAM</Col>
                <Col className="bg-warning pt-3 pb-3 text-light"><span class="fa fa-dribbble"></span> DRIBBBLE</Col>
                <Col className="bg-success pt-3 pb-3 text-light"><span class="fa fa-pinterest"></span> PINTEREST</Col>
                </Row>
                </Container>
                <Container fluid={true} className="foot" style={{backgroundColor: " rgba(26, 23, 23, 0.986)"}}>
                    <Image src="./img/logo.png" />
                    <p class="container text-light">
                  <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                  repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                  eum harum corrupti dicta, aliquam sequi voluptate quas.</i>
                </p>
                <span class="fa fa-cc-paypal text-light" style={{fontSize:"30px"}}>&nbsp;</span>
                  <span class="	fa fa-cc-visa text-light" style={{fontSize:"30px"}}>&nbsp;</span>
                  <span class="fa fa-cc-discover text-light" style={{fontSize:"30px"}}>&nbsp;</span>
                  <span class="fa fa-cc-amex text-light" style={{fontSize:"30px"}}>&nbsp;</span>
                  <span class="fa fa-cc-mastercard text-light" style={{fontSize:"30px"}}>&nbsp;</span>
                </Container>
                <Container className="text-center pt-3 pb-3 text-dark">
                © 2020 Copyright  All Rights Reserved
                </Container>
            </Container>
            
            </div>
        )
    }
}

export default Layout
