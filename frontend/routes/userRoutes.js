const { register,login,setAvatar,getAllUsers,programInfo} =require('../controllers/usersControllers');

const router = require("express").Router();

router.post('/register',register);
router.post('/login',login);
router.post('/setAvatar/:id',setAvatar);
router.get("/allusers/:id", getAllUsers);
router.post('/programInfo', programInfo);


module.exports = router;

