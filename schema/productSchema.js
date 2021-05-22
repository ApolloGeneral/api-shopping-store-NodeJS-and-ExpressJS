const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product name is required']
  },
  displaySize: {
    type: String,
    required: [true, 'Dispaly Size is required']
  },
  RAMSize: {
    type: String,
    required: [true, 'RAM Size is required']
  },
  internalMemory: {
    type: String,
    required: [true, 'Internal memory is required']
  },
  brand: {
    type: String,
    required: [true, 'brand is required']
  },
  serialNumber: {
    type: String,
    required: [true, 'Serial Number is required']
  },
  price: {
    type: String,
    required: [true, 'Price is required']
  },
  imageName: {
    type: String,
    default: "none",
    required: true
},
imageData: {
    type: String,
    required: true
},
count: {
  type: Number,
  required: true
}
})


module.exports = mongoose.model('products', productSchema);