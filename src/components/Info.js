import React from 'react'
import { CardGroup, Card, Button, Col, Row} from 'react-bootstrap';

const Info=()=>{
    return (
        <div style={{backgroundColor: '#f0ece8'}}>
        <br/>
        <br/>
        <h2 className="text-center" style={{fontWeight: 'bold', fontSize: '31px', fontFamily: 'Lucida Handwriting'}}> Real People. Real Service.</h2>
        <br/>
        <Row xs={1} md={3} style={{marginLeft: '10px', marginRight: '10px'}} >
            <Col>
                <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/bg/img_valuewidget_product2.png" alt="P" width="40%"/>
                Huge Selection of Products
                <br/>
                <br/>
                <Card className="text-center">
                    <Card.Body>
                        <Row>
                            <Col>
                            <Card.Title style={{fontWeight: 'bold', fontSize: '30px', textAlign: 'center'}}>Copper<br/>Fittings</Card.Title>
                            </Col>
                            <Col>
                            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/sidekick/copperfitting.jpg" alt="P" width="50%"/>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Text>
                                Low prices on our huge selection.
                            </Card.Text>
                            <Button style={{backgroundColor: '#40799a'}} >SHOP COPPER FITTINGS</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/bg/value-widget-resources.png" alt="P" width="40%"/>
                Helpful Resources
                <br/>
                <br/>
                <Card className="text-center">
                    <Card.Body>
                        <Row>
                            <Col>
                            <Card.Title style={{fontWeight: 'bold', fontSize: '30px', textAlign: 'center'}}>Honeywell<br/>Thermostats</Card.Title>
                            </Col>
                            <Col>
                            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/sidekick/thermostat.jpg" alt="P" width="50%"/>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Text>
                                Low prices on our huge selection.
                            </Card.Text>
                            <Button style={{backgroundColor: '#40799a'}} >SHOP COPPER FITTINGS</Button>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/bg/img_valuewidget_cs2_@1_5.png" alt="P" width="40%"/>
                Friendly Customer Service
                <br/>
                <br/>
                <Card className="text-center">
                    <Card.Body>
                        <Row>
                            <Col>
                            <Card.Title style={{fontWeight: 'bold', fontSize: '30px', textAlign: 'center'}}>Circulator<br/>Pumps</Card.Title>
                            </Col>
                            <Col>
                            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/sidekick/pump2.jpg" alt="P" width="50%"/>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Text>
                                Low prices on our huge selection.
                            </Card.Text>
                            <Button style={{backgroundColor: '#40799a'}} >SHOP COPPER FITTINGS</Button>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <br/>
        <br/>
        </div>
    );
};

export default Info;