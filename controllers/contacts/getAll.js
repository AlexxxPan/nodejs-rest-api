const {Contact} = require('../../models');

const getAll = async (req, res) => {
    const {_id: owner} = req.user;
    const {page=1, limit=20, favorite} = req.query;
    const skip = (page - 1) * limit;
    
    if (favorite !== undefined) {
        owner.favorite = favorite === "true";
      }
    const result = await Contact.find({owner}, "-createdAt -updatedAt", {skip, limit}).populate("owner", "name email subscription");
    res.json(result); 
}

module.exports = getAll;