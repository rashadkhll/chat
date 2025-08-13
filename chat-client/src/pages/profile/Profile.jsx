import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="client__profile">
      <div className="container">
        <div className="row">
          {/* Giriş Bölümü */}
          <div className="col-12">
            <div className="client__profile__intro">
              <h1>Hi, Rashad Xalilov</h1>
              <p>
                Welcome to my profile! Here you can find my personal details and
                role information.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="client__profile__image">
              <img
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Rashad"
              />
            </div>
          </div>

          {/* Bilgi Kartı */}
          <div className="col-lg-6 col-md-12">
            <div className="client__profile__info">
              <p>
                <strong>First Name:</strong> Rashad{" "}
                <button className="edit-btn">✏️</button>
              </p>
              <p>
                <strong>Last Name:</strong> Xalilov{" "}
                <button className="edit-btn">✏️</button>
              </p>
              <p>
                <strong>Email:</strong> rashad@example.com{" "}
                <button className="edit-btn">✏️</button>
              </p>
              <p>
                <strong>Phone:</strong> +994 50 123 45 67{" "}
                <button className="edit-btn">✏️</button>
              </p>
              <p>
                <strong>Role:</strong> Frontend Developer{" "}
                <button className="edit-btn">✏️</button>
              </p>
              <p>
                <strong>Role:</strong> Frontend Developer{" "}
                <button className="edit-btn">✏️</button>
              </p>
              <p>
                <strong>Role:</strong> Frontend Developer{" "}
                <button className="edit-btn">✏️</button>
              </p>
              <div className="client__profile__info__buttons">
                <button className="form__save__btn" disabled>
                  Save
                </button>
                <button className="form__discard__btn">Discard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
