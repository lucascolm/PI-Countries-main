const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const getCountry = async () => {
  let dbCountry = await Country.findAll();
  try {
    if (dbCountry.length > 0) {
      return dbCountry;
    }
    const auxCountries = await axios.get("https://restcountries.com/v3/all?limit=15");
    const countries = auxCountries.data.map((c) => {
      return {
        id: c.cca3,
        name: c.name.common,
        flag: c.flags[0],
        continent: c.region,
        capital: c.capital ? c.capital[0] : "undefined capital",
        subregion: c.subregion ? c.subregion : "undefined subregion",
        area: c.area,
        population: c.population,
      };
    });

    await Country.bulkCreate(countries);

    return countries;
  } catch (error) {
    console.log("Error controllers getCountries " + error);
  }
};

router.get("/", async (req, res) => {
  //get all
  console.log("entra a get");
  const { name } = req.query;
  console.log(name)
  try {
    const countries = await getCountry();
    if (name) {
      const byNameCountries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      return byNameCountries.length > 0? 
          res.status(201).json(byNameCountries)
        : res.status(201).send("no encontro paises");
    } else {
      //const countries =  await getCountry();
      return res.status(201).json(countries);
    }
  } catch (error) {
    res.status(400).send("error: " + error.message);
  }
});

router.get("/:id", async (req, res) => {
  //get by id
  console.log("holaaaaaaaaaaa");
  const { id } = req.params;
  try {
    const countries = await getCountry();
    const byIdCountries = await Country.findByPk(id.toUpperCase(), {
      include: [Activity],
    });
    if (byIdCountries) {
      res.status(201).json(byIdCountries);
    } else {
      res.status(404).send("pais no encontrado");
    }
  } catch (error) {
    res.status(404).send(`id invalido `);
  }
});

module.exports = router;
