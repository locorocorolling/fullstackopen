import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  if (!good && !neutral && !bad) {
    return (
    <>
      <Title title={"statistics"} />
      <div>No feedback given</div>
    </>
    )
  }

  return (
    <>
      <Title title={"statistics"} />
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"average"} value={(good * 1 + bad * -1) / (good + neutral + bad)} />
      <StatisticLine text={"positive"} value={`${good / (good + neutral + bad) * 100} %`} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Title title={"give feedback"} />
      <Button text={"good"} onClick={() => setGood(good + 1)} />
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} onClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
