import React from "react";
import { NavLink } from "react-router-dom";
import '../static/scss/footer.scss';

const footer = () => {
  return (  
  
  <footer className="footer">  
      <div>made by saurav</div>
      <div>
        <a href="">
        <img src="https://img.icons8.com/material-outlined/50/000000/github.png"/>
        </a>
        <a href="">
          <img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png" />
        </a>
        <a href="">
          <img src="https://img.icons8.com/material-rounded/48/000000/gmail-login.png" />
        </a>
      </div>
  </footer>

  );
};
export default footer;
