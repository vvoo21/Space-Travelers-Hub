const Mission = (mission) => {
  const { name, description } = mission;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <p>NOT A MEMBER</p>
      </td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
};

export default Mission;
