import React from 'react';
import MatchingSlot from './MatchingSlot';
import MismatchingSlot from './MismatchSlot';

const SlotM = (props)=>{
    let x = props.x;
    let y = props.y;
    let z = props.z;

    return(

        (x===y) && (y===z) ? <MatchingSlot x={props.x} y={props.y} z={props.z}/> : <MismatchingSlot x={props.x} y={props.y} z={props.z}/>
    )
}

export default SlotM;