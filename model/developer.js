import mongoose from 'mongoose';

const developerSchema = new mongoose.Schema({
  developer: {
    name: String,
    skype: String,
    telefone: Number,
    linkedin: String,
    city: String,
    state: String,
    portfolio: String,
    hoursPerDay: String,
    workTime: String,
    salary: Number,
  }
}, { timestamp: true});

module.exports = mongoose.model('Developer', developerSchema);

