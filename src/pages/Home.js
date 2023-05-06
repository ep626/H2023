/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="p-4 shadow-4 rounded-3 text-center banner">
        <img src="piggy_bank.svg" className="pig" />
        <p className="heading">
          Control your spending habits with <br /> our automatic budgeting tool.
        </p>
        <button
          type="button"
          className="btn btn-success"
          id="modal-button"
          data-toggle="modal"
          data-target="#startModal"
          style={{
            padding: "10px 50px",
            border: "none",
            outline: "none",
          }}
        >
          Get Started
        </button>
      </div>

      <div
        className="modal fade text-dark"
        id="startModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="startModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{
              background: `${isDarkMode ? "#212529" : "#f8f9fa"}`,
              color: `${isDarkMode ? "#f8f9fa" : "#212529"}`,
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="startModalLabel">
                Finances
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Please provide the following information about your monthly
                expenses & income.
              </p>

              <form id="modal-form" title="modal-form">
                <div className="form-input-div">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />
                </div>

                <div className="form-input-div">
                  <label htmlFor="income">Monthly Income:</label>
                  <input
                    type="text"
                    id="income"
                    name="income"
                    placeholder="$0.00"
                  />
                </div>

                <div className="form-input-div">
                  <label htmlFor="bills">Rent/Utility Bills:</label>
                  <input
                    type="text"
                    id="bills"
                    name="bills"
                    placeholder="$0.00"
                  />
                </div>

                <div className="form-input-div">
                  <label htmlFor="insurance">Insurance Bills:</label>
                  <input
                    type="text"
                    id="insurance"
                    name="insurance"
                    placeholder="$0.00"
                  />
                </div>

                <div className="form-input-div">
                  <label htmlFor="groceries">Groceries:</label>
                  <input
                    type="text"
                    id="groceries"
                    name="groceries"
                    placeholder="$0.00"
                  />
                </div>

                <div className="form-input-div">
                  <label htmlFor="outings">Outings:</label>
                  <input
                    type="text"
                    id="outings"
                    name="outings"
                    placeholder="$0.00"
                  />
                </div>

                <div className="form-input-div">
                  <label htmlFor="non-essential">Non-essential Items:</label>
                  <input
                    type="text"
                    id="non-essential"
                    name="non-essential"
                    placeholder="$0.00"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
