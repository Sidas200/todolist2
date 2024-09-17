import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

function Tarea({ tarea, completarTarea, eliminarTarea }) {
    return (
        <Card
            style={{
                backgroundColor: tarea.completada ? '#e0f7fa' : '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                margin: '10px auto',
                width: '100%'
            }}
        >
            <CardContent>
                <Typography
                    variant="body1"
                    style={{
                        fontFamily: 'Arial, sans-serif',
                        color: tarea.completada ? '#00695c' : '#333',
                        fontSize: '16px',
                        marginBottom: '10px',
                        textDecoration: tarea.completada ? 'line-through' : 'none',
                    }}
                >
                    {tarea.texto}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    {!tarea.completada && (
                        <Button variant="outlined" color="success" onClick={completarTarea}>
                            Completar
                        </Button>
                    )}
                    <Button variant="contained" color="error" onClick={eliminarTarea}>
                        Eliminar
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Tarea;



