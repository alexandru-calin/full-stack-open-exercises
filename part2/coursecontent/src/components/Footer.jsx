const Footer = ({ parts }) => {
  const total = parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  return <h5>total of {total} exercises</h5>;
};

export default Footer;
