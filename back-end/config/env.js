import "dotenv/config"

process.env.CORS_ORIGIN = process.env.CORS_ORIGIN.split(' ')

export default process.env