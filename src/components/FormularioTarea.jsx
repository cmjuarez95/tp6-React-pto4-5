import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
useEffect

const FormularioTarea = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const tareasLocalstorage = JSON.parse(localStorage.getItem("tareasKey")) || []   //toma los valores del localstorage salvo q este vacio crea un array nuevo
    const [tareas, setTareas] =useState(tareasLocalstorage); //hago que use el estado de la variable con el local storage

    useEffect(()=>{
        localStorage.setItem("tareasKey",JSON.stringify(tareas))
    },[tareas]) //Para guardar las tareas en el localstorage.

    const posteriorValidacion = (data) =>{

        //guardar tarea en el array
        setTareas([...tareas,data.tarea])
        
        //limpiar el formulario
        reset()

    }

    const borrarTarea=(nombreTarea) =>{
        const tareasFiltradas = tareas.filter((itemTarea)=> itemTarea !== nombreTarea)
        setTareas(tareasFiltradas)

    }

    return (
        <section>
             <Form onSubmit={handleSubmit(posteriorValidacion)}>
                <Form.Group
                className="mb-3 d-flex justify-content-between"
                >
                <Form.Control type="text" placeholder="Ingresa una tarea" {...register("tarea", {
                    required: "La tarea es un dato obligatorio",
                    minLength:{
                        value:2,
                        message:"La tarea debe tener al menos 2 caracteres"
                    },
                    maxLength:{
                        value:50,
                        message:"La tarea debe tener como máximo 50 caracteres"
                    },
                }

                )}/>
                <Button variant="primary" type="submit">
                    ➕
                </Button>
                </Form.Group>
                <Form.Text className="text-danger">
                {errors.tarea?.message} 
                </Form.Text>
            </Form>
            <ListaTarea tareas={tareas} borrarTarea={borrarTarea}></ListaTarea>
        </section>
    );
};

export default FormularioTarea;