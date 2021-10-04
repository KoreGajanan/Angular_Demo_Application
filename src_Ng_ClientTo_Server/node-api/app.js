
const express = require('express');

const app = express();


app.listen(3000, Marvellous);

function Marvellous(request, response) {
    console.log('Marvellous Server is started....');
}

app.get('/getBaches', MarvellousBatches);

//http://localhost:3000

function MarvellousBatches(request, response) {
    // response.json({
    //     "BatchName": "Python",
    //     "Fees": 12500
    // })
    response.send(request.params.iNo);



}

app.get('/getAdminDetails', MarvellousAdmin);

function MarvellousAdmin(request, response) {
    response.json({
        "Mobile": '9049027852',
        "Mail": 'gajanankore525@gmail.com'
    })
}

app.get('/demo', (request, response) => {
    response.json({
        "Data": "Gajanan"
    });
});

// app.get('/', function (req, res) {
//     res.send('id: ' + req.query.id);
// });