// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { useSelector } from 'react-redux'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

const MUITable = () => {
  const users = useSelector(state => state.users.users)
  const columns = Object.keys(users[0])
  const rows = []
  users.map(item => {
    rows.push(item)
  })
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Users' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader columns={columns} rows={rows} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
