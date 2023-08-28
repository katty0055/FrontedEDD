//componente donde estan las rutas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "../views/Inicio";

const router = createBrowserRouter([
    //path de la primera ruta
    {
        path: '/',
        element: <Inicio/>
    },
    // {
    //     path: '/docente',
    //     element: <div>Docente</div>
    // },
    
]);

const MyRoutes = () =>{
    return(
        <RouterProvider router={router}/>
    );
};
export default MyRoutes;