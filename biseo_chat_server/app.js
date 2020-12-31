const express = require('express')
const session = require('express-session')
const Redis = require('ioredis')
const cors = require('cors')
const connectRedis = require('connect-redis')
const routes = require('./routes')

const app = express();

const RedisStore = connectRedis(session)
const redisClient = new Redis(6379)

app.use(cors({
	origin: process.env.ALLOWED_HOST,
	credentials: true
}))

app.use(express.json())
app.use(express.static('public'))

app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: process.env.REDIS_SECRET,
	store: new RedisStore({
		client: redisClient
	}),
	cookie: {maxAge: 60000},
}))

app.all('*',function(req,res,next){
    if (!req.get('Origin')){
        return next();
    }
    res.set('Access-Control-Allow-Origin', 'http://moby.sparcs.org:44430');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
    if ('OPTIONS' == req.method){
         return res.send(200);
    }
    next();
});

app.set('jwt-secret', process.env.JWT_SECRET)

app.get('/', (req, res) => {
	console.log("get /")
	res.sendFile('index.html')
})

app.use('/api', routes)

module.exports = app;