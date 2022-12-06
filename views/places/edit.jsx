const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name = "name" value={data.place.name}/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic" name = "pic" value={data.place.pic}/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input id="city" name = "city" value={data.place.city}/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input id="state" name = "state" value={data.place.state} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name = "cuisine" value={data.place.cuisines}/>
                    </div>
                    <div>
                    <input
                        className='btn btn-primary'
                        type='submit'
                        value='Update Place'
                        />
                    </div>
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
