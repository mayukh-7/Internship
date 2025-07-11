import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    location: {
        type: [
            {
                lat: {
                    type: Number
                }
            },
            {
                lng: {
                    type: Number
                }
            }
        ]
    },
    BMN: {
        type: String
    }
    
},{timestamps:true})


export const Store = mongoose.model("Store", storeSchema)