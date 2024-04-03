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
    default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fdefault-avatar-profile-icon-vector-user-image-image179582665&psig=AOvVaw1y4JCtcnC6yC_Fa10t6fcy&ust=1712227644436000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCy55bvpYUDFQAAAAAdAAAAABAJ",
  },
},
{
  timestamps: true
}
);

const User = mongoose.model('User', userSchema);


export default User;