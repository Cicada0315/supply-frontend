import React from 'react';
import { CardGroup, Card, Button} from 'react-bootstrap';

const Categories=()=>{
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/plumbing.jpg" />
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'center'}}>Plumbing</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/heating.jpg" />
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'center'}}>Heating</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/hvac.jpg" />
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'center'}}>HVAC</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/pex.jpg" />
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'center'}}>PEX</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/fittings.jpg" />
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'center'}}>Fittings</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/valves.jpg" />
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'center'}}>Valves</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/icons/thermostats.jpg" />
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'center'}}>Thermostats</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/icons/electric.jpg" />
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'center'}}>Electrical</Card.Title>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default Categories;