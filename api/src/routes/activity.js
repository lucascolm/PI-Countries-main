const{Router}=require('express')
const router=Router();
const{Country,Activity}=require('../db');
const{op}=require('sequelize')
const axios=require('axios');


module.exports =router