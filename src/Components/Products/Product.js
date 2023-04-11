import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import InnerImageZoom from 'react-inner-image-zoom';
import watch from '../Images/watch.jpg';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import './Product.css';

function Product() {
    return (
        <>
            <Row>
                <Col style={{ width: '500px', height: "300px", paddingLeft: '20px', marginTop: '8px' }}>
                      <InnerImageZoom src={watch} zoomSrc={watch} /><br />
                    <div className='Product_button_div'>
                        <Button style={{height:'50px',width:'200px',backgroundColor:'brown',color:'white'}}>BUY NOW</Button>&nbsp;
                        <Button style={{height:'50px',width:'200px',backgroundColor:'brown',color:'white'}}>ADD TO CART</Button>
                    </div>
                </Col>
                <Col>
                    <div className='Product_Card'>
                        <h2>Sneakers For Men  (White)</h2>
                        <h3>Special price</h3>

                        <h2>₹499 &nbsp; <del>₹1499</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></h2>
                        <ul>
                            <li>
                                <h3>Available offers</h3>  </li>
                            <li> <p>Special PriceGet at flat ₹299T&C</p></li>
                            <li><p>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p></li>
                            <li><p>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More</p></li>
                            <li><p>Partner OfferPurchase now & get 1 surprise cashback coupon till November 2023Know More</p></li>
                            <li><p>Special PriceGet at flat ₹299T&C</p></li>
                            <li><p>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p></li>
                        </ul>

                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Product;

// import InnerImageZoom from 'react-inner-image-zoom';
// import watch from '../Images/watch.jpg';
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

// function Product() {
//   return (
//     <div style={{height:'500px',width:'300px'}}>
//       <InnerImageZoom src={watch} zoomSrc={watch} />
//     </div>
//   )
// }

// export default Product
