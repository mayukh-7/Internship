import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store"
    }
},{timestamps:true})


export const Company = mongoose.model("Company",companySchema)