const Card = ({ image, name, title, price }) => {
  return (
    <div className="card rounded-4 shadow-sm" style={{ maxWidth: "400px" }}>
      <img
        src={image}
        className="card-img-top p-3"
        alt="Avocado Sandwich"
      />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title h4 mb-3">{name}</h2>
        <p className="card-text text-muted mb-4">{title}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <h3 className="h2 mb-0">{price}</h3>
          <button className="btn btn-success px-4 py-2">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
