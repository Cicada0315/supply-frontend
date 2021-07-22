import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Categories=()=>{
    return (
        <Row xs={8} sm={8} lg={8} className="text-center">
            <Col>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/plumbing.jpg" alt="P" width="100%"/>
            <strong>Plumbing ></strong>
            </Col>
            <Col>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/heating.jpg" alt="P" width="100%"/>
            <strong>Heating ></strong>
            </Col>
            <Col>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/hvac.jpg" alt="P" width="100%"/>
            <strong>HVAC ></strong>
            </Col>
            <Col>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/pex.jpg" alt="P" width="100%"/>
            <strong>PEX ></strong>
            </Col>
            <Col>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/fittings.jpg" alt="P" width="100%"/>
            <strong>Fittings ></strong>
            </Col>
            <Col>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/phone/category/valves.jpg" alt="P" width="100%"/>
            <strong>Valves ></strong>
            </Col>
            <Col>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/icons/thermostats.jpg" alt="P" width="100%"/>
            <strong>Thermostats ></strong>
            </Col>
            <Col>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/img/supplyhouse/icons/electric.jpg" alt="P" width="100%"/>
            <strong>Electrical ></strong>
            </Col>
        </Row>
    );
}

export default Categories;