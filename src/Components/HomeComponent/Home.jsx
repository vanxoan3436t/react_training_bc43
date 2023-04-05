import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='d-flex'>
                    {/*không xét width ở bên trong nội dung component vì Component có thể sử dụng ở nhiều thẻ thuộc nhiều giao diện khác nhau */}
                    <div className='w-25'>
                        <Navigation />
                    </div>
                    <div className='w-75'>
                        <Content />
                    </div>

                </div>
                <Footer />

            </div>
        )
    }
}
