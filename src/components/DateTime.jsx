import { useEffect, useState } from 'react'

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const clock = setInterval(() => setCurrentDate(new Date()), 1000)

    return () => clearInterval(clock)
  }, [])

  const dateParts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).formatToParts(currentDate)
  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(currentDate)
  const date = dateParts
    .filter(({ type }) => type !== 'literal')
    .map(({ value }) => value)
    .join(' ')

  return (
    <time dateTime={currentDate.toISOString()}>{date} {time}</time>
  )
}

export default DateTime