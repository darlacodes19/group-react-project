


function Search (props) {

    

    return (
        <div>
            <h1> Search </h1> 
             <input 
             placeholder="City"
             className="city-search"
             type="search"
             input = "text"
             onChange= { (e) => props.setCity(e.target.value)}
            />
    {props.city}
        </div>
    )
} 

export default Search