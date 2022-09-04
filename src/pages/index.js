// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Dashboard = () => {
  const router = useRouter()
  const user = useSelector(state => state.auth)
  const notify = () => toast.success('Logged In Successfull')
  useEffect(() => {
    if (user.user === null) {
      router.push('/login')
    }
  }, [user])
  if (user.loggedIn) {
    notify()
  }
  
  return (
    <ApexChartWrapper>
      <Toaster />
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <SalesByCountries />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
