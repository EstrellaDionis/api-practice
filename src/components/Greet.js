import React from 'react';

const Greet = ({name, heroName}) => {
    //we are destructuring in the parameter with curly braces here instead of props
    //you can also do:
    //const {name, heroName} = props and it would work the exact same.
    return (
        <div>
            <h1>
                Hello {name} A.K.A {heroName}
            </h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet;