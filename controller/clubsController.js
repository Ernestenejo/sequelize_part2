// import model
const clubModel = require('../models/footballclubs');
const {v4: uuid} = require('uuid');

// perform crud operation
// create a new club
exports.createClub = async (req,res) => {
    try {
        // extract data from the request body
        const { name, ucl, coach, stadium, topsix }
        = req.body;
        //check for the club in the database by name 
        const clubExists = await  clubModel.findAll({ where : {name : name }});
        //check if the clubs exist
        if (clubExists.length == 1 ) {
            res.status (400).json({
                message:`club with name : ${name} already exist`
            })
        }else {
            // create a new instance of the club data to the database
            const newClub = await clubModel.create({
                id: uuid(),
                name,
                ucl,
                coach,
                stadium,
                topsix
            })
            res.status(201).json({ message:'club created successfully',
                data: newClub
            });
        }
        // send a success response
        // res.status(201).json({ message:'club created successfully',
        //     data: newClub
        // });
    } catch (error) {
        res.status(500).json({
            message: 'internal server error:' + error.message
        })
    }
};

exports.getAll = async (req, res) => {
    try{
        const club = await clubModel.findAll();
        // send a success response
            
                res.status(200).json({
                    message:`all club in database`,
                    data:club,
                    total:club.length
                })
            }
          catch (error) {
        res.status(500).json({
            message: 'internal server error:'+ error.message
            
          })
    }
}
exports.getOneClub = async (req, res) => {
    try{
        //get the id from params 
        const {id} = req.params;
        //find the club
        const club = await clubModel.findAll({
            where: {id: id}});
            if (club.length == 0) {
                res.status(404).json({
                    message: 'club not found'
                })
            } else {
                //send a success response
                res.status(200).json({
                    message:`club found`,
                    data:club
                })
            }
    }        catch (error) {
        res.status(500).json({
            message: 'internal server error:'+ error.message
            
        })
    }
}
exports.updateClub = async (req, res) =>{
    try{
    //get the id from the params 
    const {id } =req.params;
    //extract the data from the request body
    const { name, ucl, coach, stadium, topsix }= req.body;
   //find the club
   const club = await clubModel.findAll({ where: {id: id}});
   if (club.length == 0 ) { res.status(404).json
    ({message: 'club not found'})
   } else {
    const data = {
        name,
        coach,
        stadium,
        ucl,
        topsix
    };
    // updating the data to the database
    await clubModel.update(data, {where: {id : id}});
    // fetching that club to see the changes made
    const updateClub = await clubModel.findAll({where:{id:id}});
    //send a success message 
    res.status(200).json({
        message: `club updated successfully`,
        data: updateClub
    })
   }
     }catch (error) {res.status(500).json({
    message: 'internal server error: + error.message'
})}


}

exports.deleteClub = async (req, res) =>{
    try{
    //get the id from the params 
    const {id } =req.params;
    //extract the data from the request body
    const { name, ucl, coach, stadium, topsix }= req.body;
   //find the club
   const club = await clubModel.findModel.findAll({ where: {id: id}});
   if (club.length == 0 ) { res.status(404).json
    ({message: 'club not found'})
   } else {
    // delete club from the database

    await clubModel.update(data, {where: {id : id}});
    // fetching that club to see the changes made
    const updateClub = await clubModel.findAll({where:{id:id}});
    //send a success message 
    res.status(200).json({
        message: `club deleted successfully`,
        data: updateClub
    })
   }
}catch (error) {res.status(500).json({
    message: 'internal server error: + error.message'
})}


}