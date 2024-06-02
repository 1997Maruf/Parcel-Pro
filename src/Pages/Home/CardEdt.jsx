

const CardEdt = ({man}) => {
       
        const {name,image, parcelsDelivered,  ratings}= man;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{parcelsDelivered}</p>
          <p>{ratings}</p>
          
        </div>
      </div>
    );
};

export default CardEdt;