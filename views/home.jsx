const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
          <div>
            <img src="/images/healthy_breakfast.avif" alt = "healthy breakfast"/>
              <div>
                Photo by <a href="https://unsplash.com/@brookelark">Brook Lark</a> on <a href="https://unsplash.com/">Unsplash</a>
              </div>
          </div>
          <div>
              <a href="/places"><button className="btn btn-primary">Places Page</button></a>
          </div>
      </Def>
    )
  }
  

module.exports = home
