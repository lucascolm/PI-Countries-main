const{Router}=require('express')
const router=Router();
const{Country,Activity}=require('../db');
const{op}=require('sequelize')
const axios=require('axios');

router.get('/',async(req,res)=>{
    
    const apiCountries= await axios.get("https://restcountries.com/v3/all?_limit=10")
    const result=apiCountries.data;
    const Country= await result.map(c=>{
        let obj={
            id:c.cca3,
            name:c.name.common,
            flag:c.flags[0],
            continent:c.region,
            capital:c.capital?c.capital[0]:"no capital",
            subregion:c.subregion,
            area:parseInt(c.area),
            population:c.population,

        }
        return obj;
        
    })
    return res.status(201).json(Country)
})




module.exports=router;