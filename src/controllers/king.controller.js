const knex = require('../../db-config');

exports.getKing =  async (req, res) => {
    try {
        await knex
            .from('king_french')
            .select('id','name','date_of_dead','date_of_birth')
            .then(function (data) {
                res.status(200).send(data);
            });
    } catch (error) {
        res.status(500).send("Erreur de la récupération depuis la base de donnée")
    }
}
