import { Carousel } from 'antd';
import watch from '../Images/Watch2.jpg'
const App = () => (
  <Carousel autoplay>
    <div>
      <img src={watch} style={{height:"400px"}}></img>
    </div>
    <div>
      <img src={watch} style={{height:"200px"}}></img>
    </div>
    <div>
      <img src={watch} style={{height:"200px"}}></img>
    </div>
    <div>
      <img src={watch} style={{height:"200px"}}></img>
    </div>
  </Carousel>
);
export default App;
