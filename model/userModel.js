/* eslint-disable prefer-destructuring */
/* eslint-disable no-new */
/* eslint-disable node/no-unsupported-features/es-syntax */

const mongoose = require('mongoose');
const validator = require('validator');

const schema = mongoose.Schema(
    {
        name: {
            type: 'string',
            required: [true, 'please provide your name']
        },
        role: {
            type: 'string',
            enum: ['Student', 'Institution', 'Admin'],
            default: 'student'
        },
        email: {
            type: 'string',
            unique: true,
            required: [true, 'Please provide your email'],
            lowercase: true,
            validate: [validator.isEmail, 'Please enter valid email id']
        },
        account: {
            type: 'string',
            unique: true,
            required: [true, 'Please provide your account address']
        },
        mobile: {
            type: 'string',
            required: true,
            unique: true
            // validate: [validator.isMobilePhone(this.mobile)]
        },
        active: {
            type: 'boolean',
            default: true,
            select: false
        }
    },
    { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const model = mongoose.model('users', schema);
module.exports = model;
