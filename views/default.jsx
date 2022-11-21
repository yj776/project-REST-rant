const React = require('react')


function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href = ""/>
                <h2>
                    <a href="/places"><button className="btn-primary">Places Page</button>
                    </a>
                </h2>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def