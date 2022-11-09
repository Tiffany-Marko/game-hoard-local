const router = require('express').Router();
const userRoutes = require('./user');
const loginRoutes = require(`./login`)
// add games, friends, etc by linking at top and bottom 

const { User, 
    Games,
    Collection,
    Comments } = require(`../model`) 


router.get(`/`, async (req,res)=> {
    try{
    const dbUserData = await User.findAll({
        include : [
          {
            model: Collection,
            attributes: ['id']
            // changed these b/c "game" was not associated to the user- only collection was. 
          },
        ],
    });

    const body = await dbUserData.map((user) => 
        user.get({ plain: true })
    );

    const user = [`Hello`, `World!`]
    
    res.render('homepage', {user, test:body});
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.use('/user', userRoutes);
router.use(`/login`, loginRoutes);

module.exports = router;