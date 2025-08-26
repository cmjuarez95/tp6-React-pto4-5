import { ListGroup, Button } from "react-bootstrap";
const ItemTarea = ({tarea, borrarTarea}) => {
  return <ListGroup.Item className="d-flex justify-content-between">{tarea}<button variant="secondary" onClick={()=>borrarTarea(tarea)}>✖️</button>
  </ListGroup.Item>
};
export default ItemTarea;