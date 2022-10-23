import {Router} from 'express'

const router = Router()

router.get("/", (req, res) => res.render("index",{tittle:"NodeJS"}));

router.get("/about", (req, res) => res.render("about",{tittle:"About me"}));

router.get("/contact", (req, res) => res.render("contact",{tittle:"Contact me"}));

export default router