import express from 'express';

const router = express.Router();
const marketGoodsEndpoint = 'https://buff.163.com/api/market/goods?game=csgo&page_num=2&page_size=80';

// all routes in here are starting with /buff
router.get('/items', (req, res) => {
    const cookie = req.get('Cookie');

    console.log(req.headers);

    console.log(`New /items GET request from ${req.headers['origin']} with sessionId: ${req.headers['cookie']}`);

    if (validateCookie(cookie)) {
        res.status(200).send({
            message: 'Success',
            sessionId: `${cookie}`
        });
    } else {
        res.status(400).send({
            message: 'Error: You need to specify the sessionId'
        });
    }
});

function validateCookie(cookie) {
    return cookie != undefined && cookie != "";
}

export default router;