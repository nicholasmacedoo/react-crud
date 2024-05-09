import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { PrivatePageLayout } from "../template";
import { VisualizarProduto } from "../pages/dashboard/visualizar-produto";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />
    },
    {
        path: '/dashboard',
        element: <PrivatePageLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/:id', 
                element: <VisualizarProduto />
            }
        ]
    }
])