import React from 'react'

class Next extends React.Component{

    getScrollPos = (percentaje) => {
        const slider = document.getElementById("main__slider");
        const container_with = slider.offsetWidth;
        const scroll_full = slider.scrollWidth;
        const scroll_width = scroll_full-container_with;

        if(percentaje > 1) return scroll_width;
        if(percentaje < 0) return 0;
        return percentaje*scroll_width;
    }

    getScrollPercentaje = () => {
        const slider = document.getElementById("main__slider");
        const container_with = slider.offsetWidth;
        const scroll_amount = slider.scrollLeft;
        const scroll_full = slider.scrollWidth;
        const scroll_width = scroll_full-container_with;
        const percentaje = scroll_amount/scroll_width;

        return percentaje;
    }



    moveTo = position => {
        const slider = document.getElementById("main__slider");
        slider.scrollTo({
            left: position,
            top: 0,
            behavior: 'smooth'
        });
    }

    onClick = () => {
        let percentaje = Math.round(this.getScrollPercentaje()*4)/4;
        percentaje+=this.props.percentaje;
        const nextPosition = this.getScrollPos(percentaje);
        this.moveTo(nextPosition);

    }

    render(){
        return (
            <div onClick={this.onClick}>
                {this.props.children}
            </div>
        )
    }
}

export default Next