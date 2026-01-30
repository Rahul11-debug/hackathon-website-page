import mongoose from 'mongoose';
import validator from 'validator';

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    validate: {
      validator: function(v) {
        return /^[0-9]{10}$/.test(v);
      },
      message: 'Please provide a valid 10-digit phone number'
    }
  },
  
  institution: {
    type: String,
    required: [true, 'Institution name is required'],
    trim: true
  },
  
  degree: {
    type: String,
    required: [true, 'Degree/Program is required'],
    trim: true
  },
  
  year: {
    type: String,
    required: [true, 'Year of study is required'],
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate', 'Other']
  },
  

  events: {
    type: [String],
    required: [true, 'Please select at least one event'],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'Please select at least one event'
    }
  },
  
  experience: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  
  motivation: {
    type: String,
    maxlength: [500, 'Motivation cannot exceed 500 characters']
  },
  
  
  registeredAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

registrationSchema.index({ email: 1 });
registrationSchema.index({ registeredAt: -1 });

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;
