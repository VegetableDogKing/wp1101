var rNum ;

const genNumber = () => {
    rNum = Math.floor(Math.random()*98 + 1) ;
}

const getNumber = () => {
    return rNum ;
}

export {getNumber , genNumber}