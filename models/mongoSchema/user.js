const {Schema, model} = require('mongoose');

const {handleMongooseError} = require('../../helpers');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    //eslint-disable-line

const subscriptionType = ["starter", "pro", "business"];

const userSchema = new Schema({
        name: {
         type: String,
         required: true,
        },
        password: {
          type: String,
          required: [true, 'Set password for user'],
        },
        email: {
          type: String,
          match: emailRegexp,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: subscriptionType,
          default: "starter"
        },
        token: {
          type: String,
          default: "",
        }
}, {versionKey: false, timestamps: true})

userSchema.post("save", handleMongooseError);

const User = model('user', userSchema);

module.exports = User;