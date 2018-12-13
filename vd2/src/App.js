import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="_vd2">
        <TopMenu />
        <Header/>
        <div className="container">
        <div className="row pt-5">
          <Content title="title 1" position_2="order-lg-2" image_url="01" des="noi dung so 1" />
          <Content title="title 2" position_2="order-lg-2" image_url="02" des="noi dung so 2" />
          <Content title="title 3" position_2="order-lg-2" image_url="03" des="noi dung so 3" />

          <Content title="title 4" position_2="order-lg-2" image_url="01" des="noi dung so 4" />
          <Content title="title 5" position_2="order-lg-2" image_url="02" des="noi dung so 5" />
          <Content title="title 6" position_2="order-lg-2" image_url="03" des="noi dung so 6" />

          <Content title="title 7" position_2="order-lg-2" image_url="01" des="noi dung so 7" />
          <Content title="title 8" position_2="order-lg-2" image_url="02" des="noi dung so 8" />
          <Content title="title 9" position_2="order-lg-2" image_url="03" des="noi dung so 9" />

          <Content title="title 10" position_2="order-lg-2" image_url="01" des="noi dung so 10" />
          <Content title="title 11" position_2="order-lg-2" image_url="02" des="noi dung so 11" />
          <Content title="title 12" position_2="order-lg-2" image_url="03" des="noi dung so 12" />
          
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
