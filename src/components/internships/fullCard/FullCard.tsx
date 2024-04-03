import currentCompany from "./../../assets/CurrentCompany.svg";
import like from "./../../../assets/like.svg";
import company from "./../../../assets/Avatar.svg";
import location from "./../../../assets/location.svg";
import "./fullCard.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Internship } from "../../internships/internship/Internship";
import { UserContext } from "../../../context/userContext";

function FullCard(props: Internship) {
  const { isAuth } = useContext(UserContext);
  const [internships, setInternship] = useState<Internship>();
  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/internships/${id}")
      .then((response) => {
        setInternship(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-profiles__card">
      <div className="full-current-card">
        <div className="current-card__text">
          <div className="full-current-card__top">
            <div className="full-current-card__top__company">
              <img src={company} alt="Компания" />
              <h4>{props.company}</h4>
            </div>
            <div className="full-current-card__top__action">
              <img src={like} alt="Избранное" />
              <button
                className="full-current-card__top__button-respond"
                onClick={() => {
                  if (!isAuth) {
                    navigate("/login");
                  }
                }}
              >
                Откликнуться
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="current-card__info__title">{props.title}</p>
          <div className="locatio">
            <img src={location} alt="Местоположение" />
            <span>Таганрог</span>
          </div>
          <div className="current-card__info">
            <div className="current-card__info__item">
              <span>
                {props.typeOfInternship === "Paid"
                  ? "Оплачиваемая"
                  : "Неоплачиваемая"}
              </span>
            </div>
            <div className="current-card__info__item">
              <span>
                {props.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className="current-card__info__item">
              <span>
                {props.schedule === "Office" ? "В офиссе" : "Удалённо"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullCard;