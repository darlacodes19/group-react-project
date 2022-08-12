function NewMoon () {

    return (
        <div className='moon-phase-card'>
            <img src={require('../images/new_moon.jpg')} alt="New Moon" className='moon-phase-image'/> 
            <h3 className='moon-phase-title'> New Moon </h3> 
        </div>
    )


}

export default NewMoon