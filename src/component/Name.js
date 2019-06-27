import React, { Component } from 'react'

export default class Name extends Component {
    constructor(props){
        super(props)
        this.state={
            id:null
        }
    }
    componentDidMount(){
        let id = this.props.match.params.post_id
        this.setState({id})
        console.log(this.props,this.state)
    }
    render() {
        return (
            <div>
                <h2>Name {this.state.id}</h2>
            </div>
        )
    }
}
