// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getUsers } from 'src/redux/features/usersSlice'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { axiosHelper } from 'src/axios/axios'
import { getOrders } from 'src/redux/features/orderSlice'

const Dashboard = () => {
  const router = useRouter()
  const user = useSelector(state => state.auth)
  const users = useSelector(state => state.users.users)
  const orders = useSelector(state => state.orders.orders)
  const dispatch = useDispatch()
  useEffect(() => {
    getUsersData()
    if (user.user === null) {
      router.push('/login')
    }
    getUsersData()
    getOrderData()
  }, [user])
  const getUsersData = async () => {
    await axiosHelper.get('/users').then(res => {
      dispatch(getUsers(res.data))
    })
  }
  const getOrderData = async () => {
    await axiosHelper.get('/orders').then(res => {
      dispatch(getOrders(res.data))
    })
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy users={users} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatisticsCard orders={orders}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <SalesByCountries />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
