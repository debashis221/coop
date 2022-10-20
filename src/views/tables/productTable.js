// ** MUI Imports
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import {
  setTotalPrice,
  setTotalQuantity,
  removeProduct,
  updateQuantity,
  updateFreeQuantity,
  setTotalFreeQuantity
} from 'src/redux/features/selectedProduct'
import { useState, useEffect } from 'react'

const ProductTable = ({ rows }) => {
  const dispatch = useDispatch()
  const removeItem = id => {
    dispatch(removeProduct(id))
  }
  const handleQuantity = (data, id) => {
    const quantityData = { data, id }
    dispatch(updateQuantity(quantityData))
  }
  const handleFreeQuantity = (data, id) => {
    const freeQuantity = { data, id }
    dispatch(updateFreeQuantity(freeQuantity))
  }
  useEffect(() => {
    dispatch(setTotalPrice(rows))
    dispatch(setTotalQuantity(rows))
    dispatch(setTotalFreeQuantity(rows))
  }, [rows])
  const totalQuantity = useSelector(state => state.selectedProduct.totalQuantity)
  const totalFreeQuantity = useSelector(state => state.selectedProduct.totalFreeQuantity)
  const totalPrice = useSelector(state => state.selectedProduct.totalPrice)
  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell numeric></TableCell>
              <TableCell numeric>#</TableCell>
              <TableCell numeric>Product</TableCell>
              <TableCell numeric>Price</TableCell>
              <TableCell numeric>Quantity</TableCell>
              <TableCell numeric>Free Quantity</TableCell>
              <TableCell numeric>Total Per Q</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.length > 0 &&
              rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    <Button size='small' type='submit' variant='contained' onClick={() => removeItem(row.id)}>
                      <Typography variant='p' color='common.white'>
                        Delete
                      </Typography>
                    </Button>
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.price}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <TextField
                      type='number'
                      sx={{ width: 100 }}
                      defaultValue={row.quantity}
                      onChange={e => handleQuantity(e.target.value, row.id)}
                    />
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <TextField
                      type='text'
                      sx={{ width: 100 }}
                      defaultValue={row.freeQuantity}
                      onChange={e => handleFreeQuantity(e.target.value, row.id)}
                    />
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.quantity * row.price}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{totalQuantity}</TableCell>
              <TableCell>{totalFreeQuantity}</TableCell>
              <TableCell>{totalPrice}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  )
}

export default ProductTable
