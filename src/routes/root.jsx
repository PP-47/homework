import {createBrowserRouter} from "react-router-dom";
import MainMovies from "../pagas/MainMovies";
import MovieDetail from "../components/MovieDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainMovies/>
    } , {
        path: "/movie/:id",
        element: <MovieDetail/>
    }
]);
export default router