// ** MUI Imports
import { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { useSelector } from 'react-redux'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import { axiosHelper } from 'src/axios/axios'
import { useDispatch } from 'react-redux'
import { getUsers } from 'src/redux/features/usersSlice'

const MUITable = () => {
  const users = useSelector(state => state.users.users)
  const columns = Object.keys(users[0])
  const dispatch = useDispatch()
  const rows = []
  users.map(item => {
    rows.push(item)
  })
  useEffect(() => {
    getUsersData()
    return () => {}
  }, [users])
  const getUsersData = async () => {
    await axiosHelper.get('/users').then(res => {
      dispatch(getUsers(res.data))
    })
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Users' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader columns={columns} rows={rows} route='createuser' />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
