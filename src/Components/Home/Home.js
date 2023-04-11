// import React from 'react'
// import { Button,Card,Row,Col} from 'antd';
// import './Home.css';
// import watch from '../Images/watch.jpg';
// import Watch2 from '../Images/Watch2.jpg';
// import Watch3 from '../Images/Watch3.jpg';
// import Watch4 from '../Images/Watch4.jpg';
// import Shoes1 from '../Images/Shoes1.jpg';
// import Shoes2 from '../Images/shoes2.jpg';
// import Shoes3 from '../Images/shoes3.jpg';
// import Shoes4 from '../Images/shoes4.jpg';
// import { useDispatch } from 'react-redux';

// function Home() {
//     const dispatch = useDispatch();
//     const send=(e)=>{
//         console.log("harish",e)
//     }
//     return (
//         <>
//         <Row>
//             <Col>
//             <a href='/product'>
//             <Card className='Home_main_card'>
//                 <div className='Home_main_div'>
//                 <img src={watch} className='Home_watch_image'></img>
//                 </div>
//                 <h4>Wall Watch</h4>
//                 <h5>Printend Bollywood</h5>
//                 <p>₹499 &nbsp; <del>₹1499</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></p>
//                 <Button style={{backgroundColor:'brown',color:'white'}} onClick={()=>send()} >
//                     Add to Cart
//                 </Button>
//             </Card>
//             </a>
//             </Col>
//             <Col>
//             <Card className='Home_main_card'>
//                 <div className='Home_main_div'>
//                 <img src={Watch2} className='Home_watch_image'></img>
//                 </div>
//                 <h4>Wall Watch</h4>
//                 <h5>Printend Bollywood</h5>
//                 <p>₹399 &nbsp; <del>₹1399</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></p>
//                 <Button style={{backgroundColor:'brown',color:'white'}} >
//                     Add to Cart
//                 </Button>
//             </Card>
//             </Col>
//             <Col>
//             <Card className='Home_main_card'>
//                 <div className='Home_main_div'>
//                 <img src={Watch3} className='Home_watch_image'></img>
//                 </div>
//                 <h4>Wall Watch</h4>
//                 <h5>Printend Bollywood</h5>
//                 <p>₹559 &nbsp; <del>₹1599</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></p>
//                 <Button style={{backgroundColor:'brown',color:'white'}} >
//                     Add to Cart
//                 </Button>
//             </Card>
//             </Col>
//             <Col>
//             <Card className='Home_main_card'>
//                 <div className='Home_main_div'>
//                 <img src={Watch4} className='Home_watch_image'></img>
//                 </div>
//                 <h4>Wall Watch</h4>
//                 <h5>Printend Bollywood</h5>
//                 <p>₹659 &nbsp; <del>₹1699</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></p>
//                 <Button style={{backgroundColor:'brown',color:'white'}} >
//                     Add to Cart
//                 </Button>
//             </Card>
//             </Col>
//             </Row>

//             <Row>
//             <Col>
//             <Card className='Home_main_card'>
//                 <div className='Home_main_div'>
//                 <img src={Shoes4} className='Home_watch_image'></img>
//                 </div>
//                 <h4>Men Shoes</h4>
//                 <h5>Printend Bollywood</h5>
//                 <p>₹499 &nbsp; <del>₹1499</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></p>
//                 <Button style={{backgroundColor:'brown',color:'white'}} >
//                     Add to Cart
//                 </Button>
//             </Card>
//             </Col>
//             <Col>
//             <Card className='Home_main_card'>
//                 <div className='Home_main_div'>
//                 <img src={Shoes1} className='Home_watch_image'></img>
//                 </div>
//                 <h4>Men Shoes</h4>
//                 <h5>Printend Bollywood</h5>
//                 <p>₹399 &nbsp; <del>₹1399</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></p>
//                 <Button style={{backgroundColor:'brown',color:'white'}} >
//                     Add to Cart
//                 </Button>
//             </Card>
//             </Col>
//             <Col>
//             <Card className='Home_main_card'>
//                 <div className='Home_main_div'>
//                 <img src={Shoes2} className='Home_watch_image'></img>
//                 </div>
//                 <h4>Men Shoes</h4>
//                 <h5>Printend Bollywood</h5>
//                 <p>₹559 &nbsp; <del>₹1599</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></p>
//                 <Button style={{backgroundColor:'brown',color:'white'}} >
//                     Add to Cart
//                 </Button>
//             </Card>
//             </Col>
//             <Col>
//             <Card className='Home_main_card'>
//                 <div className='Home_main_div'>
//                 <img src={Shoes3} className='Home_watch_image'></img>
//                 </div>
//                 <h4>Men Shoes</h4>
//                 <h5>Printend Bollywood</h5>
//                 <p>₹659 &nbsp; <del>₹1699</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>76% off</span></p>
//                 <Button style={{backgroundColor:'brown',color:'white'}} >
//                     Add to Cart
//                 </Button>
//             </Card>
//             </Col>
//             </Row>
//         </>
//     )
// }

// export default Home;

import React, { useState } from 'react'
import { Button, Card, Row, Col, message } from 'antd';
import './Home.css';
import CartApi from './Cart';
import { useDispatch } from 'react-redux';
import { Add } from '../../actions/index';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState(CartApi)
    const dispatch = useDispatch();
    const send = (e) => {
        message.success('Item Add in Your Cart');
        dispatch(Add(e));
    }
    return (
        <>
            <Row>
                {data.map((items) => (
                    <Col>
                        <Card className='Home_main_card'>
                            <Link to={`/product/${items.id}`}>
                                <div className='Home_main_div'>
                                    <img src={items.image} className='Home_watch_image' alt='wall'></img>
                                    <h4>{items.title}</h4>
                                    <h5>{items.headline}</h5>
                                    <p>₹{items.price} &nbsp; <del>₹{items.delPrice}</del>&nbsp;&nbsp;&nbsp;<span style={{ color: 'darkgreen' }}>{items.offer}% off</span></p>
                                </div>
                            </Link>
                            <Button style={{ backgroundColor: 'brown', color: 'white' }} onClick={() => send(items)} >
                                Add to Cart
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default Home;