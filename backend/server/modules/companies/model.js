import mongoose, { Schema } from 'mongoose';

const CompaniesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image_url: {
    type: String
  },
  url: {
    type: String
  },
  contact: {
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  location: {
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  coordinates: {
    longitude: {
      type: Number
    },
    latitude: {
      type: Number
    }
  },
  is_claimed: {
    type: Boolean,
  },
  photos: [String],
  categories: [String],
  services: [String],
  availability: [
    {
      start: Number,
      end: Number,
      day: Number
    }
  ],
  lead_time: {
    type: String
  },
  reviews: [
    {
      user_id: Schema.Type.ObjectId,
      review: String,
      date: Date
    }
  ],
  orders: [
    {
      order_id: Schema.Type.ObjectId,
      delivery_date: Date,
      quantity: Number,
      deliverable: String,
      transaction: Number
    }
  ],
  associated_users: [
    {
      user_id: Schema.Type.ObjectId,
      username: String
    }
  ]
});

export default mongoose.model('Company', CompaniesSchema);
