import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component{
    constructor() {
        super()
        this.state = {
            input: '',
            checkbox: true,
            posts: ''
        }
    }

    handleChange(prop, val){
        this.setState({[prop]: val})
    }

    render(){
        return (
            <div>
                Dashboard
                <input className="My Posts" type='checkbox'/>
                <input onChange={(e) => this.handleChange('username', e.target.value)}/>
                <button>Search</button>
                <button>Reset</button>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        id: state.id
    }
}

export default connect(mapStateToProps)(Dashboard);