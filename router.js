import * as RH from './RequestHandler.js'
import { Router } from 'express'
import { Auth } from './middleware/Auth.js'
const router=Router()

router.route('/adminregister').post(RH.AdminRegister)
router.route('/adminlogin').post(RH.AdminLogin)
router.route('/adminhome').get(Auth,RH.AdminHome)


export default router