const { register,login,setAvatar,getAllUsers,documentFormRegister,getRegInfo } =require('../controllers/usersControllers');

const router = require("express").Router();

router.post('/register',register);
router.post('/login',login);
router.post('/setAvatar/:id',setAvatar);
router.get("/allusers/:id", getAllUsers);




router.post('/documentFormRegister',documentFormRegister)
router.post('/getRegInfo',getRegInfo);





module.exports = router;

