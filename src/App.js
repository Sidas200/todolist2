import React, { useState } from "react";
import AgregarTarea from "./componentes/agregartarea";
import ListaTareas from "./componentes/listatareas";
import ListaTareasCompletadas from "./componentes/listatareascompletadas";
import { Container } from "@mui/material";


const generarIdUnico = () => Date.now();

function App() {
    const [tareas, setTareas] = useState([]);

    const completarTarea = (id) => {
        const nuevasTareas = tareas.map((tarea) =>
            tarea.id === id ? { ...tarea, completada: true } : tarea
        );
        setTareas(nuevasTareas);
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevasTareas);
    };

    return (
        <Container>
            <AgregarTarea setTareas={setTareas} generarIdUnico={generarIdUnico} />
            <ListaTareas tareas={tareas} completarTarea={completarTarea} eliminarTarea={eliminarTarea} />
            <ListaTareasCompletadas tareas={tareas} eliminarTarea={eliminarTarea} />
        </Container>
    );
}

export default App;


