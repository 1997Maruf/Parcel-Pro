const ParcelCard = ({ booking, index }) => {
  const { type, deliveryDate } = booking;
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{type}</td>
        <td>{deliveryDate}</td>
        <td>Blue</td>
      </tr>
    </div>
  );
};

export default ParcelCard;
