
import React, { useEffect, useState } from "react";

import * as RecepcionDistritos from  "./RecepcionDistritos"


const Distritos = () => {

    const [distri , setDistitos] = useState([]);

    const listadistritos = async () => {
        try {

            const res = await RecepcionDistritos.listadoDis();
            const valores = await res.json;

            setDistitos(valores.distri);
            console.log(valores);

        } catch (error) {
            console.log (error)
            
        }

    };

    useEffect(() => {
        listadistritos();
    },[]);

    console.log(React.version);

   

    return(
        <div>
            {distri.map((x) => (
                <tr>
                    <td>
                        hola mundo
                    </td>

                </tr>
            ))}
        </div>
    )

}

/*function Distritos(){
    return <h1>hola mundo</h1>
}*/

export default Distritos;