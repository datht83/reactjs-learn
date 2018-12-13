import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            trangThai: 0
        }
    }
    thongbao  = () => {alert('cach xu li tuong tac trong reactjs')}
    thongbao2 = (thongbao) => {alert(thongbao)}

    renderButton = () => {
        return(
            <div className="row">
            <div className="btn btn-group">
                <div className="btn btn btn-info" onClick={() => this.editClick()}>Edit</div>
                <div className="btn btn btn-warning" >Remove</div>
            </div>
            </div>
        )
    }
    
    renderForm = () => {
        return (
            <div className="row">
            <div className="form-group">
                <input defaultValue={this.props.title} type="text" name="ten" className="form-control" />
                <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}>Save</div>
            </div>
            </div>
        )
    }

    displayCheck = () => {
        if(this.state.trangThai === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({trangThai: 1});
    }

    saveClick = () => {
        this.setState({trangThai: 0});
    }
    render() {
        return (
            <div className="col-lg-4">
            <div className="row">    
                <div className={"col-lg-5 " + this.props.position_2} >
                <div className="p-1">
                    <img className="img-fluid rounded-circle" src={"img/" + this.props.image_url + ".jpg"} alt />
                </div>
                </div>
                <div className="col-lg-7">
                <div className="p-1">
                    <h2 className="display-6">{this.props.title}</h2>
                    <p>{this.props.des}</p>
                    {this.displayCheck()}
                    <hr/>
                </div>
                </div>
            </div>    
            </div>
        );
    }
} 

export default Content;