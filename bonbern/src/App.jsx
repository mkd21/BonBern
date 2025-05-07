
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import './App.css';


// importing components 
import { AppLayout } from "./AppLAyout.jsx";
import {Home} from "./Components/Home.jsx";
import {About} from "./Components/About.jsx";
import {OurProcess} from "./Components/OurProcess.jsx";

function App() {
  
  const routes = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      children : [
        {
          path : "",
          element : <Home />
        },
        {
          path : "about",
          element : <About />
        },
        {
          path : "process",
          element : <OurProcess />
        },
      ]
    }
  ]);

  return (
    <>
        <RouterProvider router={routes} />
    </>
  )
}

export default App
