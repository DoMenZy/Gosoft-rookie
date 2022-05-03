const e = require('express');
const express = require('express');
const app = express();
app.use(express.json());

let emp = [];

app.get('/getEmp', (req, res) => {
    res.status(200).json({
        data: emp
    });
})

app.post('/newEmp', (req, res) => {

    if (!req.body.fname ||
        !req.body.lname ||
        !req.body.id ||
        !req.body.pos ||
        !req.body.tel ||
        !req.body.email

    ) { return res.status(400).json({ ms: "Erorr" }) }

    for (let i = 0; i < emp.length; i++) {
        if (emp[i].id == req.body.id || emp[i].tel == req.body.tel || emp[i].email == req.body.email) {
            return res.status(400).json({ ms: "Erorr = ข้อมุลซ้ำ" })
        }
    }

    const newData = {
        fname: req.body.fname,
        lname: req.body.lname,
        id: req.body.id,
        pos: req.body.pos,
        tel: req.body.tel,
        email: req.body.email
    };

    emp.push(newData);
    res.status(200).json({ ms: "Success" });

})

app.put('/editEmp', (req, res) => {

    if (
        !req.body.id ||
        (
            !req.body.pos &&
            !req.body.tel &&
            !req.body.email
        )
    ) { return res.status(400).json({ ms: "Erorr" }) }

    for (let i = 0; i < emp.length; i++) {
        if (emp[i].id == req.body.id) {

            if (req.body.pos) emp[i].pos = req.body.pos
            if (req.body.tel) emp[i].tel = req.body.tel
            if (req.body.email) emp[i].email = req.body.email

            return res.status(200).json({ ms: "Success" })
        }
    }

    return res.status(400).json({ ms: "Erorr ไม่เจอคนที่จะเเก้ไข" });
})

app.delete('/deleteEmp', (req, res) => {
    if (!req.body.id) {
        return res.status(400).json({ ms: "Erorr" })
    }
    for (let i = 0; i < emp.length; i++) {
        if (emp[i].id == req.body.id) {
            emp.splice(i, 1);
            return res.status(200).json({ ms: "Success" })
        }
    }

    return res.status(400).json({ ms: "Erorr ไม่เจอคนที่จะลบ" });
})

app.listen(3000, () => {
    console.log('Listening on port: 3000');
});