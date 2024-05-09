import { useParams } from "react-router-dom"

export function VisualizarProduto() {
    const params = useParams()

    return <div>{params.id}</div>
}