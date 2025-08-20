import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';


const ListaTarea = ({tareas}) => {
    return (
        <ListGroup className='mt-5'>
            {
                tareas.map((tarea, indice)=><ItemTarea key={indice}></ItemTarea>)
            }
            
        </ListGroup>
        
    
    );
};

export default ListaTarea;