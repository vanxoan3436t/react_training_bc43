import React, { Component } from 'react'

export default class DemoLogin extends Component {
//state: là thuộc tính của component để quản lý các biến thay đổi trên giao diện của 1 component 
state = {
result: 'default value giá trị thay đổi'
}




    handleSumbmit = (event) => {
        event.preventDefault();
        // document.getElementById('result').innerHTML = 'đăng nhập thành công'; hạn chế hoặc sử dụng dom thông thường khi sử dụng code dự án băng react

        // this.state.result = 'đăng nhập thành công ' //tuyệt đối không dc thay đổi state trực tiếp vì giao diện sẽ không thay đổi k render lại
        
        let newState = {
            result :'đăng nhập thành công !'
        }
        this.setState(newState);// phương thức có săn của component hàm này có 2 chức năng 1 là thay đổi giá trị hàm ,2 là render lại giao diện với giá trị state mới
    }

    render() {
        return (
            <div className='container'>
                <form className='card w-25 mx-auto' onSubmit={this.handleSumbmit}>
                    <div className='card-header bg-dark text-white text-center'>Login</div>
                    <div className="card-body">
                        <p>UserName</p>
                        <input className='form-control' id='username' />

                        <p>Password</p>
                        <input className='form-control' id='username' />
                    </div>
                    <div className="card-footer text-center">
                        <button type='submit' className='btn btn-success'>Login</button>
                    </div>
                </form>

                <div className='alert alert-success mt-2 mx-auto w-25' id='result'>
{this.state.result}

                </div>
                <p className='alert alert-danger mt-2 mx-auto w-25'>sử dụng data banding : là hiện state trong 2 dấu ngoặc nhọn </p>

            </div>
        )
    }
}

