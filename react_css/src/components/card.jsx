import '../assets/css/card.css';

const schema = {
    'sadness':{
        'dark':'--sadness-darkblue',
        'light':'--sadness-lightblue',
        'position':{
            'top':'-40%',
            'right': '-25%',
            'width': '55%'
        }
    },
    'anger':{
        'dark':'--anger-darkred',
        'light':'--anger-lightred',
        'position':{
            'top':'-65%',
            'right': '-40%',
            'width': '80%'
        }
    },
    'joy':{
        'dark':'--joy-darkgreen',
        'light':'--joy-lightgreen',
        'position':{
            'top':'-60%',
            'right': '-20%',
            'width': '45%'
        }
    },
    'fear':{
        'dark':'--fear-darkpurple',
        'light':'--fear-lightpurple',
        'position':{
            'top':'-40%',
            'right': '-20%',
            'width': '45%'
        }
    },
    'disgust':{
        'dark':'--disgust-darkgreen',
        'light':'--disgust-lightgreen',
        'position':{
            'top':'-55%',
            'right': '-30%',
            'width': '55%'
        }
    },
}


function Card(props){
    return (
        <div className="card" style={{
            backgroundColor:`var(${schema[props.name].light})`,
            color:`var(${schema[props.name].dark})`
        }}>
            <h2>{props.name}</h2>
            <p dangerouslySetInnerHTML={{__html: props.content}}></p>
            <img 
                src={`imgs/${props.image}`} 
                alt={props.name}
                style={{
                    top: schema[props.name].position.top,
                    right: schema[props.name].position.right,
                    width: schema[props.name].position.width
                }}
            />
        </div>
    );
}

export default Card;