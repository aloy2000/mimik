import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../components/Header'

export const Dashbord = () => {
  return (
    <Box m={"20px"}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title='Dashbord' subtitle='Welcome to the dashbord'  />
      </Box>
    </Box>
  )
}
