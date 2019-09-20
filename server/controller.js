

    const getHouses = (req, res) => {
        const db = req.app.get('db');
        db.get_house() 
            .then(houses => {
                res.status(200).send(houses)
            })
            .catch((err) => {
                console.log(err)
            })
    };



    const createHouse = (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip} = req.body
        db.add_house([name, address, city, state, zip])
            .then(() => {
                res.status(200).send('Created')
            })
            .catch((err) => {
                console.log(err)
            })
    };
    
    const deleteHouse = (req, res) => {
        const db = req.app.get('db')
        const {id} =req.params
        db.remove_house([id]).then(() => {res.status(200).send('Deleted')})
        .catch((err) => {console.log(err)})
    }
module.exports ={
    getHouses,
    createHouse,
    deleteHouse
}
 