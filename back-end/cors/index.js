const cors = require('cors');

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);