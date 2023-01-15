import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { createAction, deleteAction } from "./actions"
import { bookmarksLoader } from "./loaders"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route 
            path=""
            loader={bookmarksLoader}
            element={<Index/>}/>
            <Route path=":id" element={<Show/>}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id"/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    )
)

export default router
