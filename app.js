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
  avatar: String,
}, 'users');

const QuestionSchema = mongoose.model('QuestionSchema', {
  question: String,
  answers: Array,
  rightAnswers: Array,
}, 'questions');

const TestsSchema = mongoose.model('TestsSchema', {
  name: String,
  questions: [{ type: ObjectIdType, ref: 'QuestionSchema' }],
}, 'tests');

const ResultsSchema = mongoose.model('ResultsSchema', {
  author: { type: ObjectIdType, ref: 'UserSchema' },
  test: { type: ObjectIdType, ref: 'TestsSchema' },
  answers: Array,
  questionsMax: Number,
  questionsRight: Number,
  date: Date,
}, 'results');


app.set("view engine", "ejs");
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

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/api/auth/login', async (req, res) => {
  const { login, password } = req.body;
  const cryptedPassword = crypto.SHA256(password).toString();
  
  const user = await UserSchema.findOne({
    login: login,
    password: cryptedPassword
  });

  if(user) {
    const token = createToken(login, cryptedPassword);
    res.cookie('token', token);
    return res.send({});
  }

  return res.sendStatus(403);
});

app.get('/api/tests', async (req, res) => {
  const isTokenValid = await checkToken(req);

  if(isTokenValid) {
    const tests = await TestsSchema.find({},{ questions: 0 });
    return res.send(tests);
  }

  return res.sendStatus(403);
});



app.get('/api/tests/:id', async (req, res) => {
  const { id } = req.params;
  const isTokenValid = await checkToken(req);

  if (isTokenValid) {
    const test = await TestsSchema.findById(id)
      .populate({
        path: 'questions',
        select: '-rightAnswers'
      });
    return res.send(test);
  }

  return res.sendStatus(403);
});

app.post('/api/results', async (req, res) => {
  const { testId, answers } = req.body;
  const user = await checkToken(req);

  if (user && testId && answers) {
    const test = await TestsSchema.findById(testId).populate('questions');

    if (test.questions.length === answers.length) {
      const questions = test.questions;
      let trueQuestions = 0;

      questions.forEach((question, index) => {
        let isQuestionRight = true;
        const rightQuestionAnswers = question.rightAnswers;

        for (let i = 0; i < rightQuestionAnswers.length; i++) {
          if (rightQuestionAnswers[i] !== answers[index][i].checked) {
            isQuestionRight = false;
            break;
          }
        }

        if (isQuestionRight) {
          trueQuestions += 1;
        }
      });

      const newResults = new ResultsSchema({
        author: user._id,
        test: testId,
        answers: answers,
        questionsMax: questions.length,
        questionsRight: trueQuestions,
        date: new Date(),
      });

      await newResults.save();
      return res.send(newResults);
    }
  }

  return res.sendStatus(400);
});

app.get('/api/results', async (req, res) => {
  const user = await checkToken(req);

  if (user) {
    const results = await ResultsSchema.find({ author: user._id }, { author: 0, __v: 0 }).populate({ path: 'test', select: 'name _id' });
    return res.send(results);
  }

  return res.sendStatus(403);
});

app.get('/api/results/:id', async (req, res) => {
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

app.get('/api/users/userdata', async (req, res) => {
  const user = await checkToken(req);
  if (user) return res.send(user);
  return res.sendStatus(403);
});

app.listen(8080, ()=>{
  console.log("Server has been started on: 8080");
});
