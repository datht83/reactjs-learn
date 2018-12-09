import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// khai bao component c1
function One(props) {
   return (
      <div className="col-6">
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={props.url} alt="" />
            <div className="card-body">
              <h4 className="card-title">{ props.title }</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div> 
   )
}
// khai bao component voi ooclass
class ClassComponent extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
            <img className="card-img-top" src={this.props.url} alt="" />
            <div className="card-body">
              <h4 className="card-title">{ this.props.title }</h4>
              <p className="card-text">Text2</p>
            </div>
          </div>
        
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <div className="row">
            <One title="sp 1" url="https://znews-photo.zadn.vn/w660/Uploaded/BzcwvoBL/2018_12_09/hai.jpg" />
            <One title="sp 2" url="https://znews-photo.zadn.vn/w660/Uploaded/jaegtn/2018_12_09/huawei_off_thumb.jpg" />
            <ClassComponent title="class 1" url="https://znews-photo.zadn.vn/w660/Uploaded/jgtnrz/2018_12_09/giang_sinh_3_thumb.jpg" />
            <ClassComponent title="class 2" url="https://znews-photo.zadn.vn/w660/Uploaded/pgi_dhbpgunat/2018_12_08/merlin_147864855_85db36cf450f4b8ca0c63c04bccbf578superJumbo_thumb.jpg" />
            <ClassComponent title="class 3" url="https://znews-photo.zadn.vn/w480/Uploaded/bpivpjbp/2018_12_08/ZuWThpinryc7490313ava.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
