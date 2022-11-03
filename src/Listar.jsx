

import React from 'react';



class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            valores:false,
            distritos:[ ]
         }
    }
  
    /*mode: 'no-cors',
            method: 'POST', */
    cargarDatos(){
        fetch("http://localhost:4000/api/users/todo")
        .then(respuesta => respuesta.json())

        .then((datosRespuesta)=> {
            console.log(datosRespuesta);
            this.setState({valores:true ,distritos: datosRespuesta})
        })
    
        .catch(console.log(React.version))

    }

   componentDidMount(){
        this.cargarDatos();

    }




    render() { 

        const{valores , distritos}= this.state
        if(!valores){ return (<div>Cargando...</div>);}
        else{
       
            return (<table className="table">
                <thead>
                    <tr>
                        <th>IdDistrito</th>
                        <th>Nombre</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {distritos.map(
                        (x)=>(

                            <tr key = {x._id} >
                            <td >{x._id}</td>
                            <td>{x.nombre}</td>
                            
                            <td>
                                <button>eliminar</button>
                                <button>Actualizar</button>
                              
                            </td>
                        </tr>

                        )
                    )}

                        
                    
                </tbody>
            </table>);
          }
        }

    
}
 
export default Listar;