export function StatusProduto({ status }) {
    const texto = status ? "Ativo" : "Inativo"
    const color = status ? "green" : "rgba(248, 70, 70, 0.407)"

    return <span style={{ color }}>{texto}</span>
}