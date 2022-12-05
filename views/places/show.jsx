const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
          <main>
            {/* <h1>Show Page</h1> */}
            <h1>{data.place.name}</h1>
              <img src={data.place.pic} alt={data.place.name} 
                width = "500"
                height = "400"/>
            <div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     
  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form> 
            </div>
              
            <h2>Rating</h2>
            <h3>Description</h3>
              <p>{data.place.city}</p>
              <p>{data.place.state}</p>
              <p>{data.place.cuisines}</p>
              <hr/>
            <footer>
                <h3>Comments</h3>
            </footer>
           

          </main>
        </Def>
    )
}

module.exports = show
