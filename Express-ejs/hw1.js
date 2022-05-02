const express = require('express');
const app = express();
app.use(express.json());
app.get('/dodo',

  (req, res) => {

    console.log(req.query);

    if (!req.query.input1) return res.status(403).send('ERORR');
    if (!req.query.input2) return res.status(403).send('ERORR');
    if (!req.query.input3) return res.status(403).send('ERORR');
    if (!req.query.input4) return res.status(403).send('ERORR');

    const num19 = /^[1-9]{1,1}$/

    if (num19.exec(!req.query.input1)) return res.status(403).send('ERORR');
    if (num19.exec(!req.query.input2)) return res.status(403).send('ERORR');
    if (num19.exec(!req.query.input3)) return res.status(403).send('ERORR');
    if (num19.exec(!req.query.input4)) return res.status(403).send('ERORR');

    const in1 = parseInt(req.query.input1);
    const in2 = parseInt(req.query.input2);
    const in3 = parseInt(req.query.input3);
    const in4 = parseInt(req.query.input4);

    const game24solver = require('24game-solver/dist/24game-solver');
    const result = game24solver([in1, in2, in3, in4], 24);

    let isSuccess = "Success";
    if (result.length == 0) isSuccess = "Fail";


    res.send(
      {
        status: isSuccess,
        result: result

      });

  })

app.listen(3000, () => {
  console.log('Listening on port: 3000');
});