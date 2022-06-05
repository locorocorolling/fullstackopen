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

const Stat = ({ type, count }) => {
  return (
    <div>{type} {count}</div>
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
      <Title title={"statistics"} />
      <Stat type={"good"} count={good} />
      <Stat type={"neutral"} count={neutral} />
      <Stat type={"bad"} count={bad} />
      <div>average {(good * 1 + bad * -1) / (good + neutral + bad)}</div>
      <div>positive {good / (good + neutral + bad) * 100} %</div>
    </>
  )
}

export default App
