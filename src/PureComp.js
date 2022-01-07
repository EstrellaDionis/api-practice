import React, { PureComponent } from 'react'


//A pure component implements shouldComponentUpdate with a shallow props and state comparison

//Shallow Comparison
// https://www.youtube.com/watch?v=YCRuTT31qR0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=26
//6:56



export class PureComp extends PureComponent {
    render() {
        console.log('Pure Comp Render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
