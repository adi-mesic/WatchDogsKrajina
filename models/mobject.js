var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var MObjectSchema = new Schema({
  name: String,
  label: String,
  lat: Number,
  long: Number,
  active: { type: Boolean, default: true}
});

module.exports = mongoose.model('MObject', MObjectSchema);
