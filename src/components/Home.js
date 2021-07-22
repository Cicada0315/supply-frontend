import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';

const Home=()=>{
    return(
        <>
        <Row>
            <Col xs={12} md={8}>
            <a target="_blank" href="https://apps.apple.com/us/app/id1531746247"><img src="https://s3.amazonaws.com/s3.supplyhouse.com/hero_banner_images/dt_hero_2020_12_app.jpg" alt="apple app" width="100%"/></a>
            </Col>
            
            <Col xs={6} md={4}>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.supplyhouse.mobile"><img src="https://s3.amazonaws.com/s3.supplyhouse.com/hero_banner_images/dt_smartbar_app.jpg" alt="google app" width="100%"/></a>
            </Col>
        </Row>
        <br/>
        </>
    );
};

export default Home;