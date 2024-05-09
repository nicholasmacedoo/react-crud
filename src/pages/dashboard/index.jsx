
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { StatusProduto } from './components/StatusProduto';
import { Link } from 'react-router-dom';

export function Dashboard() {

  const [produtos, setProdutos] = useState([])

  async function getProdutos() {
    const response = await fetch('http://localhost:3000/produtos')
    const data = await response.json()

    if(data) {
      setProdutos(data)
    }
  }

  useEffect(() => {
    getProdutos()
  }, [])

  return (
      <Box>
        <Typography variant="h1">Produtos</Typography>
        <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Nome</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produtos.map(item => (
                <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell align="right">{item.nome}</TableCell>
                    <TableCell align="right">
                      <StatusProduto status={item.status} />
                    </TableCell>
                    <TableCell align="right">
                      <Link to={`/dashboard/${item.id}`}>
                        visualizar produto
                      </Link>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      </Box>
  );
}