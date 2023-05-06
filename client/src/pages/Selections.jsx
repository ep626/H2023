import React, { useState } from 'react';
function Selections() {
  const [income, setIncome] = useState('');
  const [savings, setSavings] = useState('');
  const [groceries, setGroceries] = useState('');
  const [gas, setGas] = useState('');
  const [freeSpending, setFreeSpending] = useState('');

  const [progress, setProgress] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  }

  const handleNext = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  }

  const handlePrevious = () => {
    if (progress > 0) {
      setProgress(progress - 20);
    }
  }


  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

      <style>
        {`
          body {
            background: linear-gradient(to bottom right, #28a745, #000000);
            background-repeat: no-repeat;
            height: 100vh;
          }

          .progress-bar {
            background-color: #28a745;
          }
        `}
      </style>

      <div className="container mt-4 border rounded p-3" style={{ maxWidth: 400, backgroundColor: '#f5deb3' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="income">Monthly income</label>
            <input value={income} onChange={(e) => {
              setIncome(e.target.value)
              setProgress(progress + 20);
            }} type="number" className="form-control" id="income" placeholder="Enter your monthly income"/>
          </div>

          <div className="form-group">
            <label htmlFor="savings">Amount being deposited in savings</label>
            <input value={savings} onChange={(e) => setSavings(e.target.value)} type="number" className="form-control" id="savings" placeholder="Enter amount being deposited in savings"/>
          </div>

          <div className="form-group">
            <label htmlFor="groceries">Groceries</label>
            <input value={groceries} onChange={(e) => setGroceries(e.target.value)} type="number" className="form-control" id="groceries" placeholder="Enter amount spent on groceries"/>
          </div>

          <div className="form-group">
            <label htmlFor="gas">Gas</label>
            <input value={gas} onChange={(e) => setGas(e.target.value)} type="number" className="form-control" id="gas" placeholder="Enter amount spent on gas"/>
          </div>

          <div className="form-group">
            <label htmlFor="freeSpending">Free spending</label>
            <input value={freeSpending} onChange={(e) => setFreeSpending(e.target.value)} type="number" className="form-control" id="freeSpending" placeholder="Enter amount for free spending"/>
          </div>

          <div className="row justify-content-between">
            <div className="col-auto">
              <button type="button" className="btn btn-secondary" onClick={handlePrevious}>Previous</button>
            </div>

            <div className="col-auto">
              <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
            </div>
            </div>
            <div className="progress mt-3">
        <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    </form>
  </div>
     
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    </React.Fragment>
  );
}

export default Selections;
