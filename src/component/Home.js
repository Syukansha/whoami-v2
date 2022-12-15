// @flow
import React, {Component }  from 'react';
import axios from 'axios';
import Modal from "../Modal/Modal";
export default class Home extends Component{

  constructor(props){
    super(props)

    this.state = {
      os:"",
      browser:'',
      device:'',
      show: false,
      
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    
  }
  componentDidMount(){
    axios.get('https://detect-device-nodejs.syukriishak.repl.co/api/deviceDetect')
      .then((response) =>{
        this.setState({
          os: response.data.software.os.name
        })
        console.log(response.data.software)
        console.log(this.state.os)
    })

  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  
  
  render() {
    
    return (
      <div className='home'>
        {/* <button onClick={this.onClick}>Try</button> */}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <table>
            <tr>
              <td>OS: </td>
              <td>{this.state.os}</td>
            </tr>
          </table>
        </Modal>
        <button className='btn-detect' type="button" onClick={this.showModal}>
          Open
        </button>
        <h2>{this.state.os}</h2>
      </div>
    )
  }
}