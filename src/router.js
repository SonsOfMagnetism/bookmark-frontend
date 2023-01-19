import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Update from "./pages/Update"
import { createAction, deleteAction, updateAction } from "./actions"
import { bookmarksLoader, bookmarkLoader } from "./loaders"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route 
            path=""
            loader={bookmarksLoader}
            element={<Index/>}/>
            <Route path=":id" />
            <Route path="create" action={createAction}/>
            <Route path="update/:id" element={<Update/>} loader={bookmarkLoader} action={updateAction}/> 
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    )
)

export default router
