import '../assets/css/slider.css';

function Slider(props){
    return (
        <div className='slider' >
            <div className='slide' id='main__slider'>
                {props.children}
            </div>
        </div>
    )
}

export default Slider;