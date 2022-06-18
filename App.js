import React from 'react';
import Navigation from './component/Navigation/Navigation';
import Logo from './component/logo/logo'
import Imageform from './component/ImageForm/ImageForm'
import Rank from './component/Rank/Rank'
// import Particles from 'react-particles-js';
import './App.css';

// const particlesoption ={
//   particles: {
//     number : {
//       value:30,
//       density :{
//         enable : true,
//         value_area : 800

//       }
//     }
//   }
// }
function App() {
  // constructor () {
  //   super(props);
  //   this.state={
  //     input:' ',
  //   };
  // }
  // onInputChange=(event)=>{
  //   console.log(event);
  // }
    return (
    <div className="App">
      {/* <Particles className='particles'
              params={particlesoption}
                 /> */}
     <Navigation/>
     <Logo/>
     <Rank/>
     <Imageform onInputChange={this.onInputChange}/>
 {   /* 
     
 <faceRecogination/>*/}



    </div>
  );
}

export default App;
