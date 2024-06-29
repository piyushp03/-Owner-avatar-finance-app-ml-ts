import DashboardBox from '@/component/DashboardBox'
import React from 'react'

type Props = {}

const Row1 = (props: Props) => {
  return (
    <>
        <DashboardBox bgcolor="#fff" gridArea="b"> </DashboardBox> 
        <DashboardBox bgcolor="#fff" gridArea="c"> </DashboardBox> 
        <DashboardBox bgcolor="#fff" gridArea="a"> </DashboardBox> 
    </>
  )
}

export default Row1