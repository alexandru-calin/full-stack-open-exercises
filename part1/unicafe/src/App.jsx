import { useState } from "react";

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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {stats.all}</p>
      <p>average {stats.average}</p>
      <p>positive {stats.positive}</p>
    </div>
  );
};

export default App;
