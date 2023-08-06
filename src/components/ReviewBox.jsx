import { useNavigate } from "react-router-dom";

export const ReviewBox = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="wrapper"
        onClick={() => {
          navigate(`/wheat-allergy/${props.ind + 1}`);
        }}
      >
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
};
