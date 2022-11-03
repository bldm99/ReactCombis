import React from "react";

const API_DIS = "http://localhost:4000/api/users/todo";
export const listadoDis = async () =>{
    return await fetch(API_DIS);
}