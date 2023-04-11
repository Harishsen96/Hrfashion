import React from 'react'
import { Card, Row, Col } from 'antd';
import './Header.css';
import { Avatar, Badge } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import {useSelector} from "react-redux";
import CartDrawer from '../CartDrawer';
import { Link } from 'react-router-dom';

function Header() {
    const getData = useSelector((state)=>state.ProductReducer.carts)
    console.log(getData,"sonu")
    return (
        <div className='grid-main-div'>
            <Card className='grid-container'>
                <Row>
                    <Col> <Link to='/'>Home</Link></Col>
                    <Col><Link to='/Contact'>Contact</Link></Col>
                    <Col><Link to='/About'>About</Link></Col>
                    <Col><Link to='/Services'>Services</Link></Col>
                    <Col className='cartbadge'>Add To Cart &nbsp; <Badge count={getData.length} offset={[8, -3]}>
                         <CartDrawer style={{ fontSize: '20px' }} />
                    </Badge></Col>
                    <Col><a href='/Registartion'><UserOutlined style={{ fontSize: '20px' }} /></a></Col>

                </Row>
            </Card>
        </div>
    )
}

export default Header;