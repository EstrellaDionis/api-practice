import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: 'Hello!'
        }

        // this.clickHandler = this.clickHandler.bind(this)
        //3) .binding in the class constructor. 
        // Because the binding happens once in the constructor, this is better than binding in the render method
    }

    


    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye!'
    //     })
    //     console.log(this)
    // }

//4) Binding as a class property
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1)DONT DO! binding in render <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* 2) arrow function in render<button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Binding in class constructor</button>
            </div>
        )
    }
}

export default EventBind
