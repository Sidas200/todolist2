import React from 'react';
import Tarea from "./tarea";
import { Box, Typography } from '@mui/material';

function ListaTareasCompletadas({ tareas, eliminarTarea }) {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>Tareas Completadas</Typography>
            {tareas.filter(tarea => tarea.completada).length === 0 ? (
                <Typography variant="body1">No hay tareas completadas</Typography>
            ) : (
                tareas.filter(tarea => tarea.completada).map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        eliminarTarea={() => eliminarTarea(tarea.id)}
                    />
                ))
            )}
        </Box>
    );
}

export default ListaTareasCompletadas;


