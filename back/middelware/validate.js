const yup = require('yup');
const validate  = (async function(req,res, next){
    try{
        const schema = yup.object().shape({
            Name :  yup.string().required(),
            Matricule : yup.string().required(),
            Score : yup.number().required(),
            Status :yup.boolean().required(),
            Email_User   : yup.string().required()
        });
        await schema.validate(req.body , {abortEarly : false});
        next();

    }catch(err){
        res.status(400).json({
            err : err.errors,
        });
    }
})
module.exports=validate;