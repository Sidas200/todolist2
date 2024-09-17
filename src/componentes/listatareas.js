import React from 'react';
import Tarea from "./tarea";
import { Box, Typography } from '@mui/material';

function ListaTareas({ tareas, completarTarea, eliminarTarea }) {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>Tareas Pendientes</Typography>
            {tareas.filter(tarea => !tarea.completada).length === 0 ? (
                <Typography variant="body1">No hay tareas pendientes</Typography>
            ) : (
                tareas.filter(tarea => !tarea.completada).map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        completarTarea={() => completarTarea(tarea.id)}
                        eliminarTarea={() => eliminarTarea(tarea.id)}
                    />
                ))
            )}
        </Box>
    );
}

export default ListaTareas;

