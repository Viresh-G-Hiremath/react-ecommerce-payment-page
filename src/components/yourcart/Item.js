export default function Item({ item }) {
  return (
    <div className="d-flex align-items-center mb-4">
      <div>
        <img
          className="rounded-circle"
          style={{ width: "50px", height: "50px" }}
          src={item.src}
          alt={item.alt}
        />
      </div>
      <div className="ms-2">
        <p className="m-0 small h6">{item.name}</p>
        <p className="m-0 small h6">{item.type}</p>
        <p className="m-0 small text-muted mt-2">{item.id}</p>
      </div>
      <p className=" m-0 small ms-auto h6">${item.cost}</p>
    </div>
  );
}
