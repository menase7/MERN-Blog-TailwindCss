import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture:{
    type: String,
    default: "https://cdn.stealthoptional.com/images/ncavvykf/stealth/f60441357c6c210401a1285553f0dcecc4c4489e-564x564.jpg?w=450&h=450&auto=format",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true
}
);

const User = mongoose.model('User', userSchema);


export default User;