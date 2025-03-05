import {Navigate, Route} from "react-router";
import TodoIndexPage from "../pages/todo/indexPage.tsx";
import {lazy, Suspense} from "react";

const Loading = <div>Loading..............</div>

const TodoList = lazy(() =>
    import('../pages/todo/listPage.tsx'))

const TodoAdd = lazy(() =>
    import('../pages/todo/addPage.tsx'))

export default function todoRouter() {

    return (
    <Route path='/todo' element={<TodoIndexPage/>}>
        <Route index element={<Navigate to={'list'} replace />}></Route>
        <Route path='list'
               element={<Suspense fallback={Loading}><TodoList/></Suspense>}></Route>
        <Route path='add'
               element={<Suspense fallback={Loading}><TodoAdd/></Suspense>}></Route>
    </Route>
    )
}