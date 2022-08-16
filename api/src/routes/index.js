const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerCountries= require('./country');
const routerActivity= require('./activity');

const router = Router();
router.use("/countries", routerCountries);
router.use("/activity",routerActivity);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
