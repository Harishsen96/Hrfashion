import React, { useState } from 'react'
import { Button, Card, Row, Col, message } from 'antd';
import '../Home/Home.css';
import CartApi from '../Home/Cart';
import { useDispatch } from 'react-redux';
import { Add } from '../../actions/index';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {Remove} from '../../actions/index';

function ProductDetails() {
    const [data, setData] = useState([])
    console.log(data, "hgfds")
    const dispatch = useDispatch();

const del =(id)=>{
    dispatch(Remove(id))
}

    const send = (e) => {
        message.success('Item Add in Your Cart');
        dispatch(Add(e));
    }
    const { id } = useParams();
    console.log("Vikas", id)

    const Compare = () => {
        let CompareData = CartApi.filter((e) => {
            return e.id == id

        });
        console.log("ankit", CompareData)
        setData(CompareData)
    }
    useEffect(() => {
        Compare()
    }, [id])
    return (
        <>

            {data.map((items) => (

                <Card>
                    <Row>
                        <Col>
                            <img src={items.image} alt='wall' style={{ width: '300px',height:'300px' }}></img> </Col>
                        <Col style={{ marginLeft: '50px' }}>
                            <h4>{items.title}</h4>
                            <h5>{items.headline}</h5>Quantity:{items.qnty}
                            <p>₹{items.price} &nbsp; <del>₹{items.delPrice}</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>{items.offer}% off</span></p>
                            <ul>
                                <li>
                                    <h3>Available offers</h3>  </li>
                                <li> <p>Special PriceGet at flat ₹299T&C</p></li>
                                <li><p>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p></li>
                                <li><p>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More</p></li>
                                <li><p>Partner OfferPurchase now & get 1 surprise cashback coupon till November 2023Know More</p></li>

                            </ul>
                        </Col>
                    </Row>

                    <Button style={{ backgroundColor: 'brown', color: 'white' }} onClick={() => send(items)} >
                        Add to Cart
                    </Button>&nbsp;&nbsp;&nbsp;
                    <Button style={{ backgroundColor: 'brown', color: 'white' }} onClick={() => del(items.id)} >
                        Remove Cart
                    </Button>
                </Card>
            ))}


        </>
    )
}

export default ProductDetails;