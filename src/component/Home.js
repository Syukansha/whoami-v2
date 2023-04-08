// @flow
import React, {Component, useState }  from 'react';
import axios from 'axios';
import Modal from "../Modal/Modal";
import Map from "./Map";
import { GoogleMap,useLoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import imageLogo from '../img/iOS_logo-remove.png';


export default class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
        os:"",
        browser:'',
        device:'',
        show: false,
        imageUrl:'',
        ipV4addr:'',
        ipV6addr:'',
        
        
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        // this.onChangeImage = this.onChangeImage.bind(this);

        
    
    }


    componentDidMount(){
        // document.body.style.overflow = "hidden"
        axios.get('https://detect-device-nodejs.syukriishak.repl.co/api/deviceDetect')
        .then((response) =>{
            this.setState({
                os: response.data.software.os.name +" "+ response.data.software.os.version,
                browser: response.data.software.client.name +" "+ response.data.software.client.version,
                device: response.data.software.device.brand +" "+ response.data.software.device.model,
            })
            if(response.data.software.os.name == "Android"){
                this.setState({
                    imageUrl:'../img/android-logo.png'
                })
            }
            else if(response.data.software.os.name == "iOS"){
                this.setState({
                    imageUrl:'../img/iOS_logo-remove.png'
                })
            }
            else if(response.data.software.os.name == "Windows"){
                this.setState({
                    imageUrl:'../img/windows-logo.png'
                })
            }
            else{
                this.setState({
                    imageUrl:'../img/device-logo-removebg.png'
                })
            }
        })

    }
    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    // onChangeImage = () =>{
    //     this.setState({
    //         typeOfDevice: android
    //     })
    // };
    
    render() {
    
        return (
        <div className='ml-11 p-8 h-screen w-screen bg-gray-900'>
            <div className='m-auto bg-gray-900 w-[100%] '>
                
                <h1 className='text-3xl text-gray-400 m-5'><b>Welcome to WhoAmI</b></h1>
                <h2 className='text-lg text-gray-400 m-5'>A website to know your device</h2>
                
                <button className='btn-detect' type="button" onClick={this.showModal}>
                    Click Me 
                </button>
               
                <Map/>
                
                <Modal show={this.state.show} handleClose={this.hideModal} className='m-auto'>
                    <div className="mt-4 font-semibold">
                        <p className='p-1'>OS : {this.state.os}</p>
                        <p className='p-1'>Browser : {this.state.browser}</p>
                        <p className='p-1'>Device : {this.state.device}</p>
                    </div>
                    <div className='float-right'>
                        <img src={this.state.imageUrl} width='150' height='200'/>
                    </div>
                    
                </Modal>
                
            </div>
                       
        </div>
        )
    }
};