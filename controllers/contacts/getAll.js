const {Contact} = require('../../models');

const getAll = async (req, res) => {
    const result = await Contact.find();
    res.json(result); 
}

module.exports = getAll;