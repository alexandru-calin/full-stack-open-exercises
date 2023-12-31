import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, stats }) => {
  if (!good && !neutral && !bad) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={stats.all} />
          <StatisticLine text="average" value={stats.average} />
          <StatisticLine text="positive" value={`${stats.positive} %`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [stats, setStats] = useState({ all: 0, average: 0, positive: 0 });

  const calcStats = (good, neutral, bad) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = (good / all) * 100;
    return { all, average, positive };
  };

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const stats = calcStats(updatedGood, neutral, bad);
    setStats(stats);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const stats = calcStats(good, updatedNeutral, bad);
    setStats(stats);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const stats = calcStats(good, neutral, updatedBad);
    setStats(stats);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} stats={stats} />
    </div>
  );
};

export default App;
