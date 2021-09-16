import House from "../models/House";
//Buscando todas as casas onde a propriedade tem esse id que estou passsando 
class DashboardController {
  async show(req, res) {

    const {user_id } = req.headers;

    const houses = await House.find({ user: user_id })

    return res.json(houses);
  }

}

export default new DashboardController()