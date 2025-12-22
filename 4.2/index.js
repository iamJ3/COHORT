const express = require('express');
const app = express();

function isOldEnough(age) {
    return age >= 19;
}

app.get('/ride1', (req, res) => {
    const age = Number(req.query.age);

    if (isOldEnough(age)) {
        res.json({
            msg: "You successfully rode the bike"
        });
    } else {
        res.status(403).json({
            msg: "Sorry, you can't ride the bike"
        });
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
