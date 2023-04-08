// // @flow
// import React, {Component }  from 'react';
// import axios from 'axios';
// import Modal from "../Modal/Modal";

// export default class Detect extends Component{

//   constructor(props){
//     super(props)

//     this.state = {
//       os:"",
//       browser:'',
//       device:'',
//       show: false,
      
//     }

//     this.showModal = this.showModal.bind(this);
//     this.hideModal = this.hideModal.bind(this);
    
//   }
//   componentDidMount(){
//     axios.get('https://detect-device-nodejs.syukriishak.repl.co/api/deviceDetect')
//       .then((response) =>{
//         this.setState({
//           os: response.data.software.os.name
//         })
//         console.log(response.data.software)
//         console.log(this.state.os)
//     })

//   }
//   showModal = () => {
//     this.setState({ show: true });
//   };

//   hideModal = () => {
//     this.setState({ show: false });
//   };

  
  
//   render() {
    
//     return (
//       <div className='detect ml-32 mt-11'>
//         <h1 className='text-3xl text-gray-400 mt-5'>Upcoming....</h1>
//       </div>
//     )
//   }
// }

// @flow
import React, {Component }  from 'react';
import axios from 'axios';



export default class Detect extends Component{
    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        
        this.state ={
          name:'',
          email:'',
          age:''
        }
    }

    // componentDidMount(e){
    //   axios.get("localhost:8080/api/v1/customers/search/2")
    //   .then((res) =>{
    //     this.setState({
    //       name: res.data.name,
    //       email: res.data.email,
    //       age: res.data.age
    //     })
    //   })

    // }

    onChangeName(e){
      this.setState({
        name: e.target.value
      })
    }
    onChangeEmail(e){
      this.setState({
        email: e.target.value
      })
    }
    onChangeAge(e){
      this.setState({
        age: e.target.value
      })
    }

    onSubmit(e){
      e.preventDefault();

      const customer = {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age
      }
      console.log(customer);
      axios.post('localhost:8080/api/v1/customers/register',customer)
        .then(res => {
            console.log(res.data)
            window.location = "/register"
            alert("SUCCESS: Data have been inserted")
        });

    }
    
  render() {
    return (
      <div className='h-screen'>
        <div className="grid grid-cols-3 absolute px-6 top-[2rem] w-full ">
            <div className="col-span-2 py-2 text-base font-bold text-left text-black">
            Register new account
            </div>
            <div className="z-20 col-span-1 text-right ">
                
            </div>
        </div>
        <div className="flex items-center justify-center mt-20 px-6 w-full ">
            <form className=' w-full md:w-7/12 lg:w-7/12' onSubmit={this.onSubmit}>
                <label className='mt-3 block text-sm text-black font-bold'>Name</label>
                <div class="mt-3 mb-6">
                    <input
                    type="text"
                    name="username"
                    className="eve-input h-10 "
                    placeholder="Your name"
                    onChange={this.onChangeName}
                    required
                    />
                </div>
                <label className='mt-3 block text-sm text-black font-bold'>Email</label>
                <div class="mt-3 mb-6">
                    <input
                    type="text"
                    name="email"
                    className="eve-input h-10 "
                    placeholder="example@gmail.com"
                    onChange={this.onChangeEmail}
                    required
                    />
                </div>
                <label className='mt-3 block text-sm text-black font-bold'>Age</label>
                <div class="mt-3 mb-6">
                    <input
                    type="number"
                    name="age"
                    className="eve-input h-10 "
                    placeholder="Insert your age"
                    onChange={this.onChangeAge}
                    required
                    />
                </div>
                {/* <label className='mt-3 block text-sm text-black font-bold'>Phone Number</label>
                <div class="mt-3 mb-6">
                    <input
                    type="number"
                    name="phone"
                    className="eve-input h-10 "
                    placeholder="0123456789"
                    required
                    />
                </div> */}
                {/* <label className='mt-3 block text-sm text-black font-bold'>Create Password for your account</label>
                <div class="mt-3 mb-6">
                    <input
                    type="password"
                    name="password"
                    className="eve-input h-10 "
                    required
                    />
                </div> */}
                <div class="mt-6 space-y-5">
                 <button
                   class="flex items-center justify-center w-full h-full px-6 py-3 mx-auto mt-4 mb-4 font-bold text-white bg-black rounded-full"
                   type="submit"> 
                 Submit 
                 </button>
               </div>
            </form>
        </div>
        </div>
    );
  };
};