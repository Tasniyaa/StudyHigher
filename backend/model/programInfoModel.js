const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema(
  {
    programName: { type: String, },
    programType: { type: String, },
    image: { type: String, },
    Duration: { type: String, },
    tuitionFee: { type: String, },
    university: { type: String, },
    country: { type: String, },
    ranking: { type: String,  },
    startDate: { type: String, },
    eduType: { type: String, },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('ProgramInfo',ProgramSchema);

 