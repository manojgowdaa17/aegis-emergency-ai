import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true,
  },

  category:{
    type:String,
    required:true,
  },

  description:{
    type:String,
  },

  location:{
    type:String,
  },

  status:{
    type:String,
    default:"Processing",
  },

  createdAt:{
    type:Date,
    default:Date.now,
  },

});

const Incident = mongoose.model(
  "Incident",
  incidentSchema
);

export default Incident;