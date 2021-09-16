import { Schema, model } from "mongoose";

const ReserveSchema = new Schema ({
  date: String, 
  //dia e mes que a pessoa quer fazer reserva
  //quem esta fazendo a reserva? referencia ao model user
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  //qual user está fazendo a reserva?
  house: {
    type: Schema.Types.ObjectId,
    ref: 'House'
  }
  //vamos esperar em json a data e o id da casa que ele quer fazer reserva, e o id do cara q esta fazendo reserva
  //vamos em controller criar o controller e importar o reserve la tbm
});

export default model ('Reserve', ReserveSchema);