
import React from 'react';

function Refresh (){

    const Resetar = () => {
      window.location.reload();
    };
    return(
        <button onClick={Resetar} style={{marginTop:'auto', backgroundColor:'black', color:'white' }}>Atualizar</button>
    )
}

export default Refresh