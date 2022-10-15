import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const EditTable = ({ rows }) => {
  console.log(rows)
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 100 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Free Quantity</TableCell>
              <TableCell>Unit Size</TableCell>
              <TableCell>Total Per Q</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.length > 0 &&
              rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.unit}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.price}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.quantity}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.free_q_by_p}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.unit_size}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.total_price_per_q}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default EditTable
