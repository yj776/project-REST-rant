const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
          <div>
              <a href="/places"><button className="btn btn-primary">Places Page</button></a>
          </div>
      </Def>
    )
  }
  

module.exports = home
