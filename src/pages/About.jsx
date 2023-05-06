/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div
        style={{
          borderTop: `${
            isDarkMode ? "1px solid #f8f9fa" : "1px solid #212529"
          }`,
        }}
      >
        <div className="container py-5">
          {/* about us card */}
          <div className="about-card">
            <h1 className="text-center">
              About Impul<span className="text-success">$</span>ive
            </h1>

            <div className="content-box pic-first">
              {/* text */}
              <div className="cb-left">
                <p className="cb-text">
                  Welcome to Impul<span className="text-success">$</span>ive,
                  your one-stop solution for managing your personal finances
                  efficiently and effortlessly. Our mission is to help
                  individuals simplify their financial management by automating
                  their budgeting process, ensuring they never miss a payment on
                  their monthly recurring bills.
                </p>
              </div>

              {/* image */}
              <div className="cb-right">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-3114338-2603187.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* who we serve */}
          <div className="about-card">
            <h1 className="text-center">Who We Serve</h1>

            <div className="content-box">
              {/* image */}
              <div className="cb-right">
                <img
                  src="https://png.pngtree.com/png-vector/20220929/ourmid/pngtree-customer-service-concept-with-a-man-sitting-at-his-laptop-and-png-image_6226581.png"
                  alt=""
                />
              </div>

              {/* text */}
              <div className="cb-left">
                <p className="cb-text">
                  Impul<span className="text-success">$</span>ive is designed
                  for individuals who seek to take control of their personal
                  finances and automate their budgeting process. Our
                  user-friendly web application is suitable for anyone who wants
                  to save time, reduce stress, and gain a better understanding
                  of their financial habits.
                </p>
              </div>
            </div>
          </div>

          {/* problem we fix */}
          <div className="about-card">
            <h1 className="text-center">The Problem We Solve</h1>

            <div className="content-box pic-first">
              {/* text */}
              <div className="cb-left">
                <p className="cb-text">
                  In today's fast-paced world, managing personal finances can be
                  a daunting task. Many people struggle to keep track of their
                  expenses, allocate funds for their monthly bills, and save for
                  their future goals. Impul$ive addresses this issue by offering
                  an intuitive and automated solution that simplifies the
                  budgeting process and ensures users have enough money set
                  aside for their recurring expenses.
                </p>
              </div>

              {/* image */}
              <div
                className="cb-right"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/010/869/740/original/faq-concept-illustration-people-looking-through-magnifying-glass-at-interrogation-point-searching-solutions-useful-information-customer-support-solving-problem-free-png.png"
                  width={400}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* key features */}
          <div
            className="about-card"
            style={{
              margin: "50px 0 0 0",
            }}
          >
            <h1 className="text-center">Our Key Features</h1>

            <div style={{ marginTop: "80px" }}>
              <p className="cb-text">
                1. User account creation and authentication: Sign up with
                Impul$ive to securely access and manage your financial
                information.
              </p>
              <p className="cb-text">
                2. Direct deposit setup: Receive your income directly into your
                Impul$ive account from your employer or other sources.
              </p>
              <p className="cb-text">
                3. Integration with financial institutions: Seamlessly connect
                your bank accounts and payment processors to monitor
                transactions and balance information.
              </p>
              <p className="cb-text">
                4. Automatic budgeting: Let Impul$ive analyze your income and
                expenses to create a personalized budget tailored to your needs.
              </p>
              <p className="cb-text">
                5. Monthly recurring bills tracking: Never miss a payment with
                our system that identifies your recurring bills and holds the
                necessary funds.
              </p>
              <p className="cb-text">
                6. Customizable budget categories: Adapt your budget to your
                unique financial requirements by creating custom categories.
              </p>
              <p className="cb-text">
                7. Financial insights and recommendations: Gain valuable
                insights into your spending habits and receive personalized
                suggestions for improving your financial health.
              </p>
              <p className="cb-text">
                8. Alerts and notifications: Stay informed about your finances
                with reminders for upcoming bills, low account balances, and
                unusual spending patterns. And more!
              </p>
              <h4 className="text-center mt-5">
                Take control of your personal finances with Impul
                <span className="text-success">$</span>ive and experience the
                convenience of automated budgeting. Sign up today and let us
                help you pave the way to a more financially secure future.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
