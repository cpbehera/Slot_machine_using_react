

const MismatchingSlot = (props)=>{
    return (
        <>
            <div className='slot_inner'>
                <h2>{props.x} {props.y} {props.z}</h2>
                <h2>This is Not Matching</h2>
                <hr style={{ marginTop: '10px' }} />
            </div>
        </>
    )
}

export default MismatchingSlot;