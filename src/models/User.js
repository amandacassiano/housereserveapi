import { Schema, model } from "mongoose";
//quais campos tem na tabale usuario?
const UserSchema = new Schema ({
  email: String,
});

export default model('User', UserSchema);