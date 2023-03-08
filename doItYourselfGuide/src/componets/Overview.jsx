const Overview = ({ list }) => {
  return (
    <ul>
      {list.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
};

export default Overview;
