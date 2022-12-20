const Mission = (mission) => {
  const { name, description } = mission;
  return (
    <tr className="border table-row-body">
      <td className="mission-name">{name}</td>
      <td>{description}</td>
      <td className="mission-badge">
        <p className="badge-table">NOT A MEMBER</p>
      </td>
      <td className="border mission-button">
        <button className="join-button" type="button">Join Mission</button>
      </td>
    </tr>
  );
};

export default Mission;
