export const ReviewBox = (props) => {
  return (
    <>
      <div className="wrapper">
        <div className="img-container">
          <img src={props.img} className="img" alt="name" />
        </div>
        <div className="container">
          <div className="">
            <div className="">{props.header}</div>
            <div className="boldText Dat ">{props.Date}</div>
            <div className="review">{props.review}</div>
          </div>
        </div>
      </div>
    </>
  );
}
