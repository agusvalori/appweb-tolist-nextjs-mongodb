import { Label } from "@mui/icons-material";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const TareasFiltro = ({ tasks, setTaskList }) => {
  const [values, setValues] = useState("todas");
  const [countTask, setCountTask] = useState({
    todas: 0,
    realizadas: 0,
    noRealizadas: 0,
  });

  const handleSelect = async (event) => {
    const { value } = event.target;
    setValues(value);

    switch (value) {
      case "todas":
        setTaskList(tasks);
        break;
      case "realizadas":
        setTaskList(tasks.filter((task) => task?.status));
        break;
      case "noRealizadas":
        setTaskList(tasks.filter((task) => !task?.status));
        break;
      default:
        setTaskList(tasks);
        break;
    }
  };

  const obtenerCountTask = () => {
    setCountTask({
      todas: tasks?.length,
      realizadas: tasks?.filter((task) => task.status).length,
      noRealizadas: tasks?.filter((task) => !task.status).length,
    });
  };
  useEffect(() => {
    setValues("todas");
    obtenerCountTask();
  }, [tasks]);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          width: "400px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: `#AE445a`,
          padding: "15px 5px",
        }}
      >
        <FormControl sx={{ width: "250px" }} size="small">
          <Typography fontSize={"small"}>Selecione una opcion</Typography>
          <Select
            sx={{ backgroundColor: "#f39f5a", color: "white", textAlign:"center", fontWeight:"bold" }}
            value={values}
            onChange={handleSelect}
          >
            <MenuItem key={"todas"} value={"todas"}>
              Todas - ({countTask.todas})
            </MenuItem>
            <MenuItem key={"realizadas"} value={"realizadas"}>
              Realizadas - ({countTask.realizadas})
            </MenuItem>
            <MenuItem key={"noRealizadas"} value={"noRealizadas"}>
              No Realizadas - ({countTask.noRealizadas})
            </MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Container>
  );
};
