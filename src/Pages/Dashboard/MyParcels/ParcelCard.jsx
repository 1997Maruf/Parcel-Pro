const ParcelCard = ({ booking }) => {
  const { type, deliveryDate } = booking;
  return (
    <div>
      <tr>
        <th>1</th>
        <td>{type}</td>
        <td>{deliveryDate}</td>
        <td>Blue</td>
      </tr>
    </div>
  );
};

export default ParcelCard;
