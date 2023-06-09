import React from 'react'
import DashboardWrapper, { DashboardWrapperMain} from '../components/dashboard-wrapper/DashboardWrapper'
import Box from '../components/box/Box'
import { colors, data } from '../constants'
import "./dashboard.scss"
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
import {
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon

} from 'react-share';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        
          <div className="col-10 col-md-12">
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
        
        <div className="row">
          <div className="col-12">
            <Box>
              <RevenueByMonthsChart />
            </Box>
          </div>
        </div>
        <hr/>
        <div className='row social-media'>
          <div className='col-6'>
            <Link to='https://www.facebook.com/yohannes.alelign' className="social-media__content">
              <FacebookIcon size={32} round />
            </Link>
            <Link to = 'https://t.me/jo_plus1' className="social-media__content">
              <TelegramIcon size={32} round />
            </Link>
            <Link to='https://wa.me/+251922886985' className='social-media__content'>
              <WhatsappIcon size={32} round />
            </Link>
            <Link to='mailto:johniece2008@gmail.com' className='social-media__content'>
              <EmailIcon size={32} round />
            </Link>  
          </div>
        </div>
        <div className='row social-media'>
          <div className='col-6'>
            <i className='bx bx-phone'>+251922886985</i>
          </div>
        </div>
      </DashboardWrapperMain>
      {/* <DashboardWrapperRight>
        DashboardWrapperRight
      </DashboardWrapperRight> */}
    </DashboardWrapper>
  )
}

export default Dashboard

const RevenueByMonthsChart = () => {

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // scales: {
    //   xAxis: {
    //     grid: {
    //       display:false,
    //       drawBoard:false
    //     }
    //   },
    //   yAxis: {
    //     grid: {
    //       display:false,
    //       drawBoarder: false
    //     }
    //   }
    // },
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