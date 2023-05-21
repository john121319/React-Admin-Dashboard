import React from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import Box from '../components/box/Box'
import { colors, data } from '../constants'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="">
          <div className="col-8 col-md-12">
            <div className="row">
              {
                data.summary.map((item, index) => (
                  <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                    <SummaryBox item={item} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-8 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <RevenueByMonthsChart />
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        {/* DashboardWrapperRight */}
      </DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard

const RevenueByMonthsChart = () => {

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxis: {
        grid: {
          display:false,
          drawBoard:false
        }
      },
      yAxis: {
        grid: {
          display:false,
          drawBoarder: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: 'bottom'
      }
    }
  }
  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenueByMonths.data
    }
  ]
  }
  return (
    <>
    <div className="title mb">
      Revenue by months
    </div>
    <div className='col-10 col-md-10'>
      <Bar options={chartOptions} data={chartData} height={`300px`} />
    </div>
    </>
  )
}