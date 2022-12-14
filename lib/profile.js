const { filter, getParams, merge } = require('./utils');
const users = require('./users');

/* implementing 3-rd party library */
const _ = require('lodash');

function readProfile(req, res) {
    // Get search params
    const [field, value] = getParams(req.query, ['field', 'value']);

    /*strict mode*/
    if(typeof field !== 'string' || typeof value !== 'string') {
        res.sendStatus(400);
        return;
    }

    // Find user(s)
    const results = filter(users, field, value);
    res.json(results);
}

function saveProfile(req, res) {
    // Find user by email
    const [user] = filter(users, 'email', req.body.email);
    // Update the user object if needed
    if (user) {
        // Clone the data coming from request

        // const updatedUser = merge({}, req.body);
        /* safer solution, merging may contain security vulnerability from 3-rd party (prototype solution) */
        const updatedUser = _.merge({}, req.body);

        Object.assign(user, updatedUser);
    }
    // Respond with the user object
    res.json([user]);
}

module.exports = {
    readProfile,
    saveProfile
};
