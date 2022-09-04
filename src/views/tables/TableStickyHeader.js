// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { axiosHelper } from 'src/axios/axios'
import { useDispatch } from 'react-redux'
import { getUsers } from 'src/redux/features/usersSlice'
import toast, { Toaster } from 'react-hot-toast'
import TextField from '@mui/material/TextField'

const TableStickyHeader = ({ columns, rows }) => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [filterData, setFilterData] = useState(null)
  const dispatch = useDispatch()
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const rowData = rows
  const getUsersData = async () => {
    await axiosHelper.get('/users').then(res => {
      dispatch(getUsers(res.data))
    })
  }
  const handleDelete = async id => {
    const formData = new FormData()
    formData.append('id', id)
    console.log(JSON.stringify(formData))
    console.log(id)
    await axiosHelper.delete('/user', formData).then(res => {
      if (res.data) {
        getUsersData()
        console.log(res.data)
        toast.success('User Deleted Successfully')
      } else {
        toast.error('Something weng wromg!')
      }
    })
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  const handleSearch = prop => event => {
    let value = event.target.value.toLowerCase()
    let result = []
    console.log(value)
    result = rows.filter(data => {
      return data.phone.search(value) != -1
    })
    setFilterData(result)
  }
  console.log(filterData)
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Toaster />
      <TableContainer sx={{ maxHeight: 440 }}>
        <TextField
          autoFocus
          id='email'
          type='text'
          onChange={handleSearch()}
          sx={{ marginBottom: 4, float: 'right', marginRight: 5 }}
          placeholder="Enter Phone Number"
        />
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column}>{column}</TableCell>
              ))}
              <TableCell>{'Actions'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData != null
              ? filterData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                      {columns.map(column => {
                        return (
                          <>
                            <TableCell key={column}>{row[column]}</TableCell>
                          </>
                        )
                      })}
                      <TableCell>
                        <Grid container>
                          <Grid item container direction='row'>
                            <Grid item xs={12} sm={6}>
                              <Button fullWidth size='small' variant='contained'>
                                <Typography variant='p' color='common.white'>
                                  Edit
                                </Typography>
                              </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <Button
                                fullWidth
                                size='small'
                                variant='contained'
                                sx={{ marginLeft: 5 }}
                                onClick={() => handleDelete(row['id'])}
                              >
                                <Typography variant='p' color='common.white'>
                                  Delete
                                </Typography>
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  )
                })
              : rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                      {columns.map(column => {
                        return (
                          <>
                            <TableCell key={column}>{row[column]}</TableCell>
                          </>
                        )
                      })}
                      <TableCell>
                        <Grid container>
                          <Grid item container direction='row'>
                            <Grid item xs={12} sm={6}>
                              <Button fullWidth size='small' variant='contained'>
                                <Typography variant='p' color='common.white'>
                                  Edit
                                </Typography>
                              </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <Button
                                fullWidth
                                size='small'
                                variant='contained'
                                sx={{ marginLeft: 5 }}
                                onClick={() => handleDelete(row['id'])}
                              >
                                <Typography variant='p' color='common.white'>
                                  Delete
                                </Typography>
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  )
                })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
