var job = {
  icon: 'suitcase',
  description: 'This is a job posting on the Bitboard.',
  attributes: {
    title: { type: String , max: 140 , required: true },
    content: { type: String, max: 5000, min: 100, required: true },
    paid: { type: Boolean, required: true, default: false },
    created: { type: Date, required: true, default: Date.now }
  }
}

module.exports = job;