import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';

function AgregarTarea({ setTareas, generarIdUnico }) {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(false);

    function handleAgregar() {
        if (isValid) {
            const nuevaTarea = { id: generarIdUnico(), texto: value, completada: false };
            setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
            setValue("");
        }
        setIsValid(false);
    }

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" color="primary" gutterBottom>Agregar Tarea</Typography>
            <TextField
                id="outlined-basic"
                label="Nombre de la tarea"
                variant="outlined"
                fullWidth
                value={value}
                onChange={(event) => {
                    if (event.target.value.length > 4) {
                        setIsValid(true);
                    } else {
                        setIsValid(false);
                    }
                    setValue(event.target.value);
                }}
                sx={{ mb: 2 }}
            />
            <Button
                variant="contained"
                onClick={handleAgregar}
                disabled={!isValid}
                sx={{ mt: 1 }}
            >
                Agregar
            </Button>
            {!isValid && value.length > 0 && (
                <Typography variant="body2" color="error">Las tareas deben de tener al menos 5 letras</Typography>
            )}
        </Box>
    );
}

export default AgregarTarea;
