import React, {Component} from 'react';
import {connect} from 'react-redux';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            image_url: '',
            content: ''
        }
    }

    handleChange(prop, val){
        this.setState({[prop]: val})
    }

    render(){
        return (
            <div>
                Form
                <input className="Title" placeholder="Title" onChange={(e) => this.handleChange('title', e.target.value)}/>
                <input className="Image_URL" placeholder="Image URL"onChange={(e) => this.handleChange('image_url', e.target.value)}/>
                <input className="Content" placeholder="Content"onChange={(e) => this.handleChange('content', e.target.value)}/>
                <button>Post</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        id: state.id
    }
}

export default connect(mapStateToProps)(Form);