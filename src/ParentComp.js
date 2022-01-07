import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'



//SUMMARY
//We can createa  component by extending the PureComponent class.

//A PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component.

//if there is no difference, the component is not re-rendered-performance boost.

//It is a good idea to ensure that all the children components are also pure to avoid unexpected behavior.

//Never mutate the state. Always return a new object that reflects the new state.

export class ParentComp extends PureComponent {
    //Because we are choosing to extend from PureComponent, the components do not automatically re-render because it acknowledges that the props do not change and DOES NOT NEED to re-render

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Dionis'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Dionis'
            })
        }, 2000)
    }
    


    render() {
        console.log('**Parent Comp Render**')
        return (
            <div>
                Parent Comp
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>               
            </div>
        )
    }
}

export default ParentComp
