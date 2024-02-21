import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives = [
            'Uncle',
            'Aunt',
            'Grandpa',
            'Grandma',
            'Cousin',
            'Niece',
            'Nephew'
        ];

        const relativeItems = relatives.map((relative, index) =>
        <li key={`relativeListItem${index + 1}`}>{relative}</li>
    );

        return(
            <div id="main">
               {/* Do not remove the main div */
               <ol key="relativeList">{relativeItems}</ol>}
            </div>
        )
    }
}


export default App;
