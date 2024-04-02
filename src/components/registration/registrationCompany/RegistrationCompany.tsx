import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./registrationCompany.css";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { validateEmail } from "../registrationIntern/RegistrationIntern";

// import { UserContext } from "../../context/userContext";

type FormCompanyState = {
  name: string;
  email: string;
  password: string;
  conditions: boolean;
};

function RegistrationCompany() {
  let navigate = useNavigate();
  // const { isAuth, setIsAuth, user, setUser } = useContext(UserContext);
  const [form, setForm] = useState<FormCompanyState>({
    name: "",
    email: "",
    password: "",
    conditions: false,
  });

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setForm({ ...form, [event.target.name]: value });
  }

  console.log(form);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.info("Заполните все поля формы");
      return;
    } else if (form.password.length < 8) {
      toast.info("Минимальная длина пароля 8 символов");
      return;
    } else if (validateEmail(form.email) === false) {
      toast.info("Email должен содержать специальные символы @ ,");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/v1/company/",
        form,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      navigate("/profileCompany");
    } catch (error) {
      if ((error as AxiosError).response?.status === 400) {
        toast.error("Email уже зарегистрирован, используйте другой");
      } else if ((error as AxiosError).response?.status === 401) {
        toast.error("Примите условия соглашения");
      }
    }
  };

  // if (isAuthorized) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="registration-company">
      <div className="container">
        <form
          className="registration-company__form"
          method="post"
          onSubmit={handleRegister}
        >
          <h1>Регистрация компании</h1>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Наименование компании"
            className="registration__input"
            onChange={changeHandler}
          />
          <input
            type="email"
            id="mail"
            name="email"
            placeholder="Email"
            className="registration__input"
            onChange={changeHandler}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            className="registration__input"
            onChange={changeHandler}
          />
          <div className="checkbox-company">
            <input
              type="checkbox"
              checked={form.conditions}
              value="interest_development"
              name="conditions"
              className="checkbox__square"
              onChange={changeHandler}
            />
            <label>
              Я принимаю условия соглашения и ознакомился  политикой
              конфиденциальности
            </label>
          </div>
          <div className="registration-company__form__info">
            <button type="submit" className="registration-company__button">
              Зарегистрироваться
            </button>
            <span>
              Уже есть аккаунт? <Link to="/login">Войдите</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationCompany;
