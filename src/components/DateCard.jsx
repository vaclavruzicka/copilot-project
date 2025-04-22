//DateCard.jsx
//Create a card that displays the date, open, high, low, close, and volume of IBM stock on any given day.

function DateCard({ date, open, high, low, close, volume }) {
  return (
    <div className="date-card">
      <h3>{date}</h3>
      <p>Open: {open}</p>
      <p>High: {high}</p>
      <p>Low: {low}</p>
      <p>Close: {close}</p>
      <p>Volume: {volume}</p>
    </div>
  )
}

export default DateCard