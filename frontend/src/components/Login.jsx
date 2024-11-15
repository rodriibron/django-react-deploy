


import { Box } from "@mui/material"; // Importación de Box de Material-UI
import { Link } from "react-router-dom"; // Para navegación entre rutas
import { useForm } from "react-hook-form"; // Manejo de formularios
import MyTextField from "./forms/MyTextField";
import MyPassField from "./forms/MyPasswordField";
import MyButton from "./forms/MyButton"; // Asumo que tienes este componente

const Login = () => {
  const { control, handleSubmit } = useForm(); // Hook para control del formulario

  // Manejador del formulario
  const onSubmit = (data) => {
    console.log("Form Data:", data); // Aquí puedes integrar lógica de autenticación
  };

  return (
    <div className="myBackground">
      <Box className="whiteBox" component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box className="itemBox">
          <Box className="title">Login for Our App</Box>
        </Box>

        <Box className="itemBox">
          <MyTextField
            label="Email"
            name="email"
            control={control}
            rules={{ required: "Email is required" }} // Reglas de validación
          />
        </Box>

        <Box className="itemBox">
          <MyPassField
            label="Password"
            name="password"
            control={control}
            rules={{ required: "Password is required" }} // Reglas de validación
          />
        </Box>

        <Box className="itemBox">
          <MyButton label="Login" type="submit" />
        </Box>

        <Box className="itemBox" sx={{ flexDirection: "column" }}>
          <Link to="/register">No account yet? Please register!</Link>
        </Box>
      </Box>
    </div>
  );
};

export default Login;

