import express from 'express' ;
import {getNumber, genNumber} from '../core/getNumber.js'

const router = express.Router()
router.post('/start' , (_, res) => {
    genNumber() ;
    res.json({ msg: 'The game has started.' })
})
router.get('/guess' , (req , res) => {
    const number = getNumber() ;
    const guessed = parseInt(req.query.number , 10) ;

    if(guessed < 1 || guessed > 100) {
        res.status(200).send({ msg: 'is not a valid number' });
    }

    else if(number === guessed) {
        res.status(200).send({ msg: 'Equal' });
    }

    else if(number < guessed) {
        res.status(200).send({ msg: 'Smaller' });
    }

    else if(number > guessed) {
        res.status(200).send({ msg: 'Bigger' });
    }
})
router.post('/restart' , (_, res) => {
    genNumber() ;
    res.json({ msg: 'The game has started.' })
})
export default router 