import React, { Component } from "react";


export default class DemoClass extends Component {




    //phương thức hiển thị giao diện của component
    render() {
        return <div>
            <button className="btn btn-success"> nội dung componet</button>

            <div className="card text-start">
                <img className="card-img-top" src="holder.js/100px180/" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>

        </div>
    }
}