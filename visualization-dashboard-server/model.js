const { string } = require('joi');
const mongoose = require('mongoose');
// Define your data model (Schema) based on your JSON structure
const DataSchema = new mongoose.Schema({
    // Define your schema fields here based on your JSON data
            end_year: Number,
            intensity:Number,
            sector:String,
            topic: String,
            insight: String,
            url: String,
            region: String,
            start_year: String,
            impact: String,
            added: String,
            published: String,
            country: String,
            relevance: String,
            pestle: String,
            source: String,
            title: String,
            likelihood: Number        
  });

 
  
  const Data = mongoose.model('Data', DataSchema);

  module.exports=Data;

  
