//DateGallery.jsx
//Obtain data from this api, https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo and display them using an imported function from DateCard.jsx.
//Add a search box that allows users to search for a time and date.

import { useEffect, useState } from 'react'
import DateCard from './DateCard'

function DateGallery() {
  const [stockData, setStockData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'
        )
        const data = await response.json()
        const timeSeries = data['Time Series (5min)']
        if (timeSeries) {
          const formattedData = Object.entries(timeSeries).map(([date, values]) => ({
            date,
            open: values['1. open'],
            high: values['2. high'],
            low: values['3. low'],
            close: values['4. close'],
            volume: values['5. volume'],
          }))
          setStockData(formattedData)
          setFilteredData(formattedData)
        } else {
          setError('No data available')
        }
      } catch (err) {
        setError('Failed to fetch data')
      }
    }

    fetchData()
  }, [])

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    const filtered = stockData.filter((entry) =>
      entry.date.includes(query)
    )
    setFilteredData(filtered)
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by date and time (e.g., 2023-04-21 15:00)"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      {filteredData.map((entry, index) => (
        <DateCard key={index} {...entry} />
      ))}
    </div>
  )
}

export default DateGallery