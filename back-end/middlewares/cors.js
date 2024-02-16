import cors from 'cors'
const whiteList = process.env.CORS_ORIGIN

const corsOption = {
    origin: (origin, cb) =>  {
        if(whiteList.indexOf(origin) !== -1) return cb(null, true)
        return cb(new Error('Not allowed by cors'))
    }
}
export default cors(corsOption)