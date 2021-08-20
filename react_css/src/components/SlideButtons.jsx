import '../assets/css/slide__buttons.css';

function SlideButtons(props){
    return (
        <div className="SliderButtons">
            {props.children}
        </div>
    )
}

export default SlideButtons;