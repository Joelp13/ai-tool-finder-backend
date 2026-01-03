function StarRating({ rating }) {
  const totalStars = 5;

  return (
    <span style={{ color: "gold", fontSize: "18px" }}>
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          {index < Math.round(rating) ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export default StarRating;
