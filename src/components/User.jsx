import React, { Component } from 'react'
import UserCard from './UserCard'

export default class User extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            loading: false
        }
    }

    loadData = async () => {
        let url = "https://reqres.in/api/users?page=1";
        let details = await fetch(url);
        let parsedData = await details.json();
        this.setState({
            data: parsedData.data
        })

    }
    render() {

        return (
            <div className='container my-3  '>
                <h2 className='center'>Task 3 </h2>
                <button type="button" className="btn btn-primary center-btn" onClick={this.loadData}>Get User</button>
                <div className='row my-3'>
                    {this.state.data.map((item) => {
                        return <div className='col md-3' key={item.id}>
                            <UserCard id={item.id} email={item.email} first_name={item.first_name} last_name={item.last_name} avatar={item.avatar} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}