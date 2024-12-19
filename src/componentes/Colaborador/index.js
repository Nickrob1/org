import "./Colaborador.css"
import { TiUserDelete } from "react-icons/ti";
import { GoHeartFill, GoHeart } from "react-icons/go";



const Colaborador = (props) => {
    console.log ("estos son los props", props)
    const { nombre,puesto, foto, id, fav} = props.datos
    const { colorPrimario, eliminarColaborador, like} = props
    return <div className="colaborador">
        <TiUserDelete className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={ {backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <GoHeartFill color="red" onClick={() => like(id)}/> : <GoHeart onClick={() => like(id)}/> }
            
        </div>
    </div>
}

export default Colaborador