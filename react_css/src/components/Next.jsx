import React from 'react'

class Next extends React.Component{

    getScrollPos = (percentaje,direction) => {
        const slider = document.getElementById("main__slider");
        let container_with;
        let scroll_full;
        let scroll_width;
        if(direction === 'h'){
            container_with = slider.offsetWidth;
            scroll_full = slider.scrollWidth;
            scroll_width = scroll_full-container_with;
        }else if(direction === 'v'){
            container_with = slider.offsetHeight;
            scroll_full = slider.scrollHeight;
            scroll_width = scroll_full-container_with;
        }

        if(percentaje > 1) return scroll_width;
        if(percentaje < 0) return 0;
        return percentaje*scroll_width;
    }

    getScrollPercentaje = (direction) => {
        const slider = document.getElementById("main__slider");
        let percentaje;
        if(direction === 'h'){
            const container_with = slider.offsetWidth;
            const scroll_amount = slider.scrollLeft;
            const scroll_full = slider.scrollWidth;
            const scroll_width = scroll_full-container_with;
            percentaje = scroll_amount/scroll_width;
        }else if(direction === 'v'){
            const container_with = slider.offsetHeight;
            const scroll_amount = slider.scrollTop;
            const scroll_full = slider.scrollHeight;
            const scroll_width = scroll_full-container_with;
            percentaje = scroll_amount/scroll_width;
        }
        return percentaje;
    }



    moveTo = (position,direction) => {
        const slider = document.getElementById("main__slider");
        if(direction === 'v'){
            slider.scrollTo({
                left: 0,
                top: position,
                behavior: 'smooth'
            });
        }else if(direction === 'h'){
            slider.scrollTo({
                left: position,
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    onClick = () => {
        let percentaje;
        const width = window.innerWidth;
        if(width < 550){
            percentaje = Math.round(this.getScrollPercentaje('v')*4)/4;
            percentaje+=this.props.percentaje;
            const nextPosition = this.getScrollPos(percentaje,'v');
            this.moveTo(nextPosition,'v'); // scroll vertical
        }else{
            percentaje = Math.round(this.getScrollPercentaje('h')*4)/4;
            percentaje+=this.props.percentaje;
            const nextPosition = this.getScrollPos(percentaje,'h');
            this.moveTo(nextPosition,'h'); // scroll horizontal
            console.log("Move");
        }
        
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