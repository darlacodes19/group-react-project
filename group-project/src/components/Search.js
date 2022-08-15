


function Search (props) {

    

    return (
        <div className={props.style} >
             <input 
             placeholder="City"
             className="city-search"
             type="search"
             input = "text"
             onChange= { (e) => props.setCity(e.target.value)}
            />
   
        </div>
    )
} 

export default Search