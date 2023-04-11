import { Button, Card, Col, Drawer,Row} from 'antd';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const CartDrawer = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const getData = useSelector((state) => state.ProductReducer.carts)
    console.log(getData, "Monu")

    return (
        <>
            <Button onClick={showDrawer}>
                <ShoppingCartOutlined />
            </Button>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
           
                {getData.map((items) => (
             
                    <Card>
                         <Link to ={`/product/${items.id}`}>
                    <Row style={{color:'black'}}>
                        <Col>
                        <img src={items.image} style={{height:"100px" , padding:'9px',width:"100px"}} alt='wall'></img>
                        </Col>&nbsp;&nbsp;&nbsp;
                        <Col><h4>{items.title}</h4>Quantity:{items.qnty}</Col>&nbsp;&nbsp;&nbsp;
                        <Col><p>₹{items.price*items.qnty} <span style={{ color: 'darkgreen' }}>{items.offer}% off</span></p></Col>
                    </Row>
                    </Link>
                    </Card>
                    
                ))}
                
                 <Row><h4>Total:400</h4></Row>

            </Drawer>
        </>
    );
};
export default CartDrawer;