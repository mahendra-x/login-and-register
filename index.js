import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb+srv://mahendra:mahendra1234@cluster0.okvw9.mongodb.net/student?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
          })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
// mongoose.connect(
//   "",
//   {
//     useNewUrlParser: true,

//     useCreateIndex: true,

//     useFindAndModify: false,

//     useUnifiedTopology: true
//   },
//   () => {
//     console.log("DB connected.");
//   }
// );

//UserSchema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes

app.post("/login", (req, res) => {

    const { email, password } = req.body;
    User.findOne({ email: email}, (err, a)=> {
        console.log("a",a)
        if(a){
            if(password === a.password){
                res.send({message: "Login successful", a: a})
            } else {
                res.send({ message: "Password didn`t Match"})
            }
        } else {
            res.send({ message: "a not registered"})
        }
    })
});

app.post("/register", (req, res) => {
  // res.send("My API register")
  console.log(req.body);
  const { name, email, password } = req.body;

//   async function saveuser(){
//     const myUser = new User({
//             name : name,
//             email : email,
//             password: password,
//           });
//     const data = await myUser.save();
//     console.log("data", data);
    


        

//   }
//   saveuser();

   User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already registered" });
    } else {
      const user = new User({
        name : name,
        email : email,
        password: password,
      })
      user.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "Successfully Registered" });
        }
      })
    }
   });
});

app.listen(9002, () => {
  console.log("BE Started at port 9002");
});
