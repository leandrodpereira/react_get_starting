import React from 'react';
import ReactDOM from 'react-dom/client';

//const myFirstElement = <h1>Hello Word!</h1>

const myelement = (
    <div>
        <h1>Hello Word!</h1>
       
        <table>
        <tr>
            <th>Name</th>       
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>      
        </table>
    </div>
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelement);
