var user = {
  description: 'This is a user which can create Jobs',
  attributes: {
    email: { type: String, max: 128, required: true, unique: true }
  }
}

module.exports = user;