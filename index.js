require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require("morgan");
const app = express()
const router = require('./Routes/index.js')
app.use(
    express.json({
      verify: (req, res, buf) => {
        req.rawBody = buf;
      },
    })
  );

app.use(cors())
app.use(morgan("dev"));
app.use(express.json())

app.use('/', router)



app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))



