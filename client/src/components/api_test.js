import React, { Component } from 'react';
import axios from 'axios';

class ApiTest extends Component {
    render() {
        return (
            <div>
                <h1>API Testing Ground</h1>
                <button onClick={this.getUserData}>Get User Info</button>
                <br />
                <button onClick={this.getArticleData}>Get Article Data</button>
            </div>
        )
    }
    getUserData() {
        axios.get('/api/get-user')
            .then(res => {
                console.log('Response from get-user: ', res);
            })
            .catch(err => {
                console.log("There was an error from get-user: ", err.message);
            });
    }

    getArticleData() {
        axios.get('/api/get-articles')
            .then(res => {
                console.log('Response from get-articles:', res);
            })
            .catch(err => {
                console.log('Error from get-articles:', err.message);
            });
    }
}

export default ApiTest;