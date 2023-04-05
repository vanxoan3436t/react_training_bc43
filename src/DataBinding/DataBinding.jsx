import React, { Component } from 'react'

const Title = 'Cybersoft';

const renderTnfo = (Name, age) => {
    //Nội dung của hàm trở về trong jsx là primitive value (string ,boolean, number, jsx(là 1 thẻ ),)k thể trả về dữ liệu object và arr
    return <span>{`Xin chào ${Name} - ${age} tuổi`}</span>
}


export default class DataBinding extends Component {//đây là 1 class nên có cả thuộc tính và phương thức

    user = {
        userName: 'Khai',
        password: 123
    }

    render() {//Data  Binding là cơ chế đưa dữ liệu lên giao diên 
        return (
            <div className='container'>
                <h3 id='title'>{Title}</h3>
                <p>{renderTnfo('Văn Xoạn', 22)}'</p>

                <div className='card w-25'>
                    <h3 className='card-header text-center bg-dark text-white'>User info</h3>
                    <div className='card-body'>
                    <p>UserName</p>
                    <input className='form-control' value={this.user.userName} />
                    <p>password</p>
                    <input className='form-control' value={this.user.password} />
                    </div>
                </div>

            </div>
        )
    }
}
