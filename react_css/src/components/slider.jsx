import '../assets/css/slider.css';

function Slider(props){
    return (
        <div className='slider'>
            {props.children}
        </div>
    )
}

export default Slider;