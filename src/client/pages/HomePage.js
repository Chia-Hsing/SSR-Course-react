import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>I'm the VERY BEST Home component.</h1>
            <button
                onClick={() => {
                    console.log('Hi there!')
                }}
            >
                Click
            </button>
        </div>
    )
}

export default { component: Home }
