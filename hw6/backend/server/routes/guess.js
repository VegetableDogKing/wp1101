import express from 'express' ;

const router = express.Router()
router.post('/start' , (_, res) => {
    genNumber() ;
    res.json({ msg: 'The game has started.' })
})
router.get('/guess' , (req , res) => {
    const number = getNumber() ;
    const guessed = roughScale(req.query.number , 10) ;
})
router.post('/restart' , (_, res) => {
    genNumber() ;
    res.json({ msg: 'The game has started.' })
})
export default router 