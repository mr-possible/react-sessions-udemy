import './css/AnimalShow.css'
import { ReactElement, useState } from "react";
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

interface AnimalProps {
    type: string
}

interface SvgMap {
    [key: string]: string;
}

const svgMap: SvgMap = {
    bird,
    cat,
    cow,
    dog,
    alligator: gator,
    horse
}

function AnimalShow(props: AnimalProps): ReactElement {
    const [clicks, setClicks] = useState(0)

    function handleClick(): void {
        setClicks(clicks + 1)
    }

    const { type } = props
    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' src={svgMap[type]} alt="animal image" />
            <img className='heart' src={heart} alt="heart" style={{
                width: 10 + 10 * clicks
                    + 'px'
            }} />
        </div>
    )
}

export default AnimalShow