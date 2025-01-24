import { useState, useContext } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "../../db/db.js";
import validateForm from "../../utils/validateForm.js";
//import { toast } from "react-toastify";
import "./_checkout.scss"
