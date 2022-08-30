export default function Card({ src, clickedOn, clicked, setPaymentMethod }) {
  return (
    <div
      className={`border rounded-pill p-2 p-lg-1 ${
        clicked ? "border-warning" : ""
      }`}
      onClick={() => {
        setPaymentMethod(clickedOn);
      }}
    >
      <img className="smallimg" src={src} alt={clickedOn} />
    </div>
  );
}
