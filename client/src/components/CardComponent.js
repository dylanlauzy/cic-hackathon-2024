import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CardActionArea } from "@mui/material";

const CardComponent = ({ title, content }) => {
  return (
    <div class="container">
      <div class="card">
        <h3 class="title">Card 1</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Card 2</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Card 3</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Card 4</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
