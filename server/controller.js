module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_all_houses()
        .then(houses => {
            res.status(200).send(houses);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    }, 
    addHouse: (req, res) => {
        let {housename, houseaddress, housecity, housestate, housezip} = req.body;
        const db = req.app.get('db');
        db.add_house({housename, houseaddress, housecity, housestate, housezip})
        .then(houses => {
            res.status(200).send(houses);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    }
}