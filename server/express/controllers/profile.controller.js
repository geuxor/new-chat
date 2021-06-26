//const profileView = require('../views/profile.view');
//const profileModel = require('../models/profile.models');

// function getProfile (request, response) {
//   console.log(request.params);
//   const { name } = request.params;
  

//   try {
//     const email = profileModel.getEmailAddressByName(name);
//     const populatedTemplate = profileView.profileTemplate({ name, email });
//     response.send(populatedTemplate);
//   } catch (error) {
//     console.log(error);
//     response.send(`Sorry ${name}, but we can't find your email`);
//   }


// }

// function saveProfile (request, response) {

// }

//module.exports = { saveProfile, getProfile };