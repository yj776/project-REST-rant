const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                    <p>Oops, sorry, we can't find this page!</p>
                    <div>
                        <img src="/images/Frowning-Face-Emoji.png" alt = "frowning face emoji"/>
                            <div>
                                Photo by <a href="https://similarpng.com/profile/ra20ga/">Ra20Ga</a> on <a href="https://similarpng.com/slightly-frowning-face-emoji-on-transparent-background-png/">Similarpng.com</a>
                            </div>
                    </div>
            </main>
        </Def>
    )
}

module.exports = error404