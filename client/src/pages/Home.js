import React, {useState} from "react"

function Home(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  
return(
  <React.Fragment>
  <link rel="icon" href="money-bag-favicon.png"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Impul<p class="text-success" style={{display:'inline'}}>$</p>ive</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Introduction</a></li>
              <li><a class="dropdown-item" href="#">Features</a></li>
              <li><a class="dropdown-item" href="#">Who We Are</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Log in</a>
          </li>
          <li class="nav-item">
 <button
        className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
      <style>{`
        body {
          background-color: ${isDarkMode ? '#212529' : '#f8f9fa'};
          color: ${isDarkMode ? '#fff' : '#212529'};
        }
      `}</style>          </li>
        </ul>
      </div>
      <p class="navbar-text"><a target="_blank" href="https://icons8.com/icon/13013/money-bag">Money Bag</a> favicon
        by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
  </nav>

  <div class="p-4 shadow-4 rounded-3 text-center" style={{margin: '100px'}}>
    <img src="piggy_bank.png" style={{width: '300px', height: 'auto'}}/>
    <p>Control your spending habits with our automatic budgeting tool.</p>
    <button type="button" class="btn btn-success" id="modal-button" data-toggle="modal" data-target="#startModal">Get Started</button>
  </div>

  <div class="modal fade text-dark" id="startModal" tabindex="-1" role="dialog" aria-labelledby="startModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="startModalLabel" >Finances</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Please provide the following information about your monthly expenses & income.</p>

          <form id="modal-form" title="modal-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"/>
            <br/>
            <label for="income">Monthly Income:</label>
            <input type="text" id="income" name="income" placeholder="$0.00"/>
            <br/>
            <label for="bills">Rent/Utility Bills:</label>
            <input type="text" id="bills" name="bills" placeholder="$0.00"/>
            <br/>
            <label for="insurance">Insurance Bills:</label>
            <input type="text" id="insurance" name="insurance" placeholder="$0.00"/>
            <br/>
            <label for="groceries">Groceries:</label>
            <input type="text" id="groceries" name="groceries" placeholder="$0.00"/>
            <br/>
            <label for="outings">Outings:</label>
            <input type="text" id="outings" name="outings" placeholder="$0.00"/>
            <br/>
            <label for="non-essential">Non-essential Items:</label>
            <input type="text" id="non-essential" name="non-essential" placeholder="$0.00"/>
          </form>
    
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="pages/class.js"></script>
  </React.Fragment>
)
}
export default Home