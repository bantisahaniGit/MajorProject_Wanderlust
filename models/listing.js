const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//listing schema creating
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
       type: String,
       default: "https://plus.unsplash.com/premium_photo-1690541772579-a0a68ea59b1e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       set: (v) => v ==="" ? "https://plus.unsplash.com/premium_photo-1690541772579-a0a68ea59b1e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
        
    },
    price: Number,
    location: String,
    country: String,
});


//creating models using listing schema
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;


