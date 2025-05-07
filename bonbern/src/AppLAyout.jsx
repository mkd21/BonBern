
import { Outlet} from "react-router-dom";

import { Navbar } from "./Components/CommonComponents/Navbar.jsx";

export const AppLayout = () =>{

    return <>
        <Navbar />
        <Outlet />
    </>
}