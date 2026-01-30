import express from 'express';
import Registration from '../models/Registration.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      institution,
      degree,
      year,
      events,
      experience,
      motivation
    } = req.body;

    const existingRegistration = await Registration.findOne({ email });
    if (existingRegistration) {
      return res.status(400).json({
        success: false,
        message: 'This email is already registered'
      });
    }

    const registration = new Registration({
      fullName,
      email,
      phone,
      institution,
      degree,
      year,
      events,
      experience,
      motivation
    });

    await registration.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful! Welcome to NEXUS 2026',
      data: {
        id: registration._id,
        fullName: registration.fullName,
        email: registration.email,
        events: registration.events
      }
    });

  } catch (error) {
    console.error('Registration error:', error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

router.get('/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find()
      .sort({ registeredAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});


export default router;
