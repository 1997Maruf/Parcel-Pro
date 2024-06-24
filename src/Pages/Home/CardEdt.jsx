

const CardEdt = ({man}) => {
       
        const {name,image, parcelsDelivered,  ratings}= man;
    return (
        <div className=" lg:w-96 sm:w-80 md:w-64 md:ml-0 sm:ml-40 mb-14 sm:mt-6 bg-base-100 shadow-xl">
        <figure><img className="sm:ml-16" src={image} alt="" /></figure>
        <div className="card-body sm:ml-16">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{parcelsDelivered}</p>
          <p>{ratings}</p>
          
        </div>
      </div>
    );
};

export default CardEdt;