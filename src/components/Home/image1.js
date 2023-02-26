import { Parallax } from 'react-parallax';
import './image.css'
import woman1 from '../images/wo3.jpg'
const Image1 = () => (
    <Parallax className='image' bgImage= {woman1} strength={800}>
        <div className= "content">
            <span className='img-text'>Welcome to Sakhi</span>
        </div>
    </Parallax>
);

export default Image1;