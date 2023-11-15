import React from "react";
import { TareasMostrarCard } from "./TareasMostrarCard";
import { Box } from "@mui/material";

export const TareasMostrar = ({ taskList  }) => {
  return (
    <Box
      sx={{
        margin: "10px",
        paddingTop: "5px",
        height: "78vh",
        flex: 1,
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "4px",
          display: "none" /* Ocultar scroll */,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {taskList?.map((task) => (
          <TareasMostrarCard key={task?._id} task={task}  />
        ))}
      </Box>
    </Box>
  );
};
