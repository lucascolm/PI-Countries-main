const { Router } = require("express");
const router = Router();
const { Country, Activity, countries_activity } = require("../db");
const { op } = require("sequelize");
const axios = require("axios");
//const { IGNORE } = require("sequelize/types/index-hints");

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season } = req.body;
  const paises = req.body.countries.map((p) => p.toUpperCase());
  // let {paises}=req.body;
  // paises=[...paises]
  //!paises?paises=["undefined"]:
  if (!name || !difficulty || !season || !paises)
    return res.status(404).send("datos faltantes");

  let activityFind = await Activity.findOne({ where: { name: name } }); //busco si existe la actividad en la base de datos
  //findeOne retorna el objeto o null
  console.log(JSON.stringify(activityFind));
  try {
    if (activityFind) {
      let paisMatch = [];

      let paisFind = await countries_activity.findAll({
        where: { activityId: activityFind.id },
        attributes: ["countryId"],
      });
      //findAll retorna ARRAY con elementos o vacio
      //busco los paises relacionado a la actividad
      console.log(JSON.stringify(paisFind));
      let idPaises = paisFind.map((id) => id.countryId);
      console.log(idPaises);
      //filtro los paises que ya estan relacionado con una actividad
      paises.forEach((p) => {
        let match = idPaises.find((e) => e === p);
        if (!match) paisMatch.push(p);
      });
      console.log(paisMatch);
      if (paisMatch.length !== 0) {
        await activityFind.addCountry(paisMatch);
        return res.status(201).send("la actividad ya existe, pais añadido");
      } else {
        return res
          .status(400)
          .send("la actividad ya existe y los paies ya estan vinculados");
      }
    }
    let newstr = season.charAt(0).toUpperCase() + season.slice(1);

    let newActivity = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: newstr,
    });
    await newActivity.addCountry(paises);
    res.status(201).send("actividad creada");
  } catch (error) {
    res.status(404).send("error al crear una actividad" + error.message);
  }
});
module.exports = router;
