import React from 'react';

function App() {
    const fruits = ['Orange', 'Fraise', 'Pomme', 'Cerise', 'Ananas', 'Poire'];

    return ( <
        div >
        <
        h2 > Activité 1: Liste de Fruits < /h2> <
        ul > {
            fruits.map((fruit, index) => ( <
                li key = { index } > { fruit } < /li>
            ))
        } <
        /ul> < /
        div >
    );
}

export default App;