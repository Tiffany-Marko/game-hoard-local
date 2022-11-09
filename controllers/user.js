// const { Module } = require('module');

const router = require('express').Router();
const { User, 
    Games,
    Collection,
    Comments } = require(`../model`)
//router.get = get all users- 
router.get(`/`, async (req, res) => {
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
           
        res.json({user: body});
            } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
});


// router.get(`/genre/:id`, async (req, res) => { 
//     try {
//         res.json(`working!`)
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// http://localhost:3001/user/numPlayer/2
router.get(`/numPlayer/:id`, async (req, res) => {
    // return individual player/user based on thier id 
    try {
        res.json({id:req.params.id})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post(`/`, async (req, res) => {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put(`/:id`, async (req, res) => {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete(`/:id`, async (req, res)=> {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports=router;