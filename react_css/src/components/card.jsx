import '../assets/css/card.css';

function Card(props){
    return (
        <div className={`card ${props.name}`}>
            <h2>{props.name}</h2>
            <p>{props.content}</p>
            <img 
                src={`imgs/${props.image}`} 
                alt={props.name}
            />
        </div>
    );
}

export default Card;