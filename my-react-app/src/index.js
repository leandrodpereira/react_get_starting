import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js'
//import CadastroFormulario from './CadastroFormulario.js';

//const myFirstElement = <h1>Hello Word!</h1>

// const myelement = (
//     <div>
//         <h1>Hello Word!</h1>
       
//         <table>
//         <tr>
//             <th>Name</th>       
//         </tr>
//         <tr>
//             <td>John</td>
//         </tr>
//         <tr>
//             <td>Elsa</td>
//         </tr>      
//         </table>
//     </div>
//   );

//Components Class
// class Car extends React.Component {
//     render() {
//       return <h2>Hi, I am a Car with Class!</h2>;
//     }
//   }
// //Components Function
//   function Car() {
//     return <h2>Hi, I am a Car with Funcion!</h2>;
//   }
// //Components Function props  
//   function Car(props) {
//     return <h2>I am a {props.color} Car!</h2>;
//   }
// //Components inside
  function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car brand={ carInfo }/>
      </>
    );
  }
const carInfo = { name: "Ford", model: "Mustang" };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
