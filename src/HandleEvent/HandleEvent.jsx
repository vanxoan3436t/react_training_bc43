import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (event) => {//cách 2
        // alert('văn xoạn cách 2');
        event.target.className = 'btn btn-dark'// dom ngược lại đến thẻ button và thay đổi thuộc tính của thẻ đó 
    }

    render() {
        const handleClick = (event) => {//cách 3 gán vô biến sử const hàm ở đây sẽ là biến, nếu là biến thì không cần sử dụng con trỏ this
            alert('văn xoạn cách 3');
        }

        return (
            <div className='container'>
                <h3>Handle event</h3>
                <button className='btn btn-success' onClick={(event) => {//cách 1
                    //còn cách khác để thể hiện sự kiện onclick
                    alert('văn xoạn cách 1');
                }}>Click me 1</button>
                <br />
                <button className='btn btn-danger mt-2' onClick={this.handleClick}>Click me 2</button>

                <button className='btn btn-primary mt-2' onClick={handleClick}>Click me 3</button>
         

            </div>
        )
    }
}
