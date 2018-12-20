const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const crypto = require('crypto-js');
const ObjectIdType = mongoose.Schema.Types.ObjectId;

const jwt = require('jsonwebtoken');
const secret = "JWTBEST";

mongoose.connect('mongodb://localhost/testingcenter');

const UserSchema = mongoose.model('UserSchema', {
  login: String,
  name: String,
  lastName: String,
  email: String,
  password: String,
  avatar: String
}, 'users');

const QuestionSchema = mongoose.model('QuestionSchema', {
  question: String,
  type: String,
  answers: Array,
  rightAnswer: String
}, 'questions');

const TestsSchema = mongoose.model('TestsSchema', {
  name: String,
  questions: [{ type: ObjectIdType, ref: 'QuestionSchema' }]
}, 'tests');

const ResultsSchema = mongoose.model('ResultsSchema', {
  author: { type: ObjectIdType, ref: 'UserSchema' },
  test: { type: ObjectIdType, ref: 'TestsSchema' },
  answers: Array,
  questionsMax: Number,
  questionsRight: Number,
  date: Date,
}, 'results');



app.use(express.static('assets'));
app.use(bodyParser.json() );
app.use(cookieParser() );

const createToken = (login, password) => {
  return jwt.sign({
    login, password
  }, secret);
}

const decodeToken = (token) => {
  return jwt.verify(token, secret);
}

const checkToken = async (req) => {
  const { token } = req.cookies;

  if (token) {
    let decodedData = {};

    try {
      decodedData = decodeToken(token);
    } catch (e) {
      return false;
    }

    const { login, password } = decodedData;
    const user = await UserSchema.findOne({
      login,
      password
    }, {
      password: 0
    });
    
    if (user) return user;
  }

  return false;
}

app.post('/auth/login', async (req, res) => {
  const { login, password } = req.body;
  const cryptedPassword = crypto.SHA256(password).toString();
  
  const user = await UserSchema.findOne({
    login: login,
    password: cryptedPassword
  });

  if(user) {
    const token = createToken(login, cryptedPassword);
    res.cookie('token', token);
    return res.sendStatus(200);
  }

  return res.sendStatus(403);
});

app.get('/tests', async (req, res) => {
  const isTokenValid = await checkToken(req);

  if(isTokenValid) {
    const tests = await TestsSchema.find({},{ questions: 0 });
    return res.send(tests);
  }

  return res.sendStatus(403);
});



app.get('/tests/:id', async (req, res) => {
  const { id } = req.params;
  const isTokenValid = await checkToken(req);

  if (isTokenValid) {
    const test = await TestsSchema.findById(id)
      .populate({
        path: 'questions',
        select: '-rightAnswer'
      });
    return res.send(test);
  }

  return res.sendStatus(403);
});

app.post('/results', async (req, res) => {
  const { testId, answers } = req.body;
  const user = await checkToken(req);

  if (user && testId && answers) {
    const test = await TestsSchema.findById(testId).populate('questions');

    if (test && answers.length === test.questions.length) {
      let rightAnswers = 0;
      test.questions.forEach((question, index) => {
        if (question.rightAnswer === answers[index]) {
          rightAnswers += 1;
        }
      });

      const newResults = new ResultsSchema({
        author: user._id,
        test: testId,
        answers: answers,
        questionsMax: test.questions.length,
        questionsRight: rightAnswers,
        date: new Date(),
      });

      await newResults.save();
      return res.send(newResults);
    }
  }

  return res.sendStatus(400);
});

app.get('/results', async (req, res) => {
  const user = await checkToken(req);

  if (user) {
    const results = await ResultsSchema.find({ author: user._id }, { author: 0, __v: 0 }).populate({ path: 'test', select: 'name _id' });
    return res.send(results);
  }

  return res.sendStatus(403);
});

app.get('/results/:id', async (req, res) => {
  const { id } = req.params;
  const user = await checkToken(req);

  if(user) {
    let results = null;
    try {
      results = await ResultsSchema.findById(id, { questionsRight: 1, questionsMax: 1 });  
    } catch (error) {
      return res.sendStatus(500);
    }

    return res.send(results);
  }

  return res.send(403);
})

app.get('/users/userdata', async (req, res) => {
  const user = await checkToken(req);

  if (user) return res.send(user);

  return res.sendStatus(403);
});

app.listen(8080, ()=>{
  console.log("Server has been started on: 8080");
});