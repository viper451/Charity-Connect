const express = require("express"); //express
const app = express(); // express --> app
const bodyParser = require("body-parser"); // body parser
const { v4: uuidv4 } = require('uuid');
var cors = require("cors"); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()); // body parser --> app
app.use(bodyParser.urlencoded({ extended: false })); // use body parser middleware for url encoded
const ObjectId = require("mongodb").ObjectID;
require("dotenv").config();
const multer=require("multer")


const MongoClient = require("mongodb").MongoClient; //required always

const uri = process.env.REACT_APP_MONGO_URL;

const storage=multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,'../public/images');
  },
  filename:(req,file,callback)=>{
    callback(null,uuidv4()+'-'+Date.now()+file.originalname);

  }
})



// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename:(req,file,callback)=>{
//     callback(null,uuidv4()+'-'+Date.now()+Path2D.extname(file.originalname));

//   }
// });


const fileFilter=(req,file,cb)=>{
  const allowFileTypes=['image/jpeg','image/jpg','image/png']
  if(allowFileTypes.includes(file.mimetype))
  {
    cb(null,true)
  }
  else{
    cb(null,false)

    
  }
}

let upload=multer({storage,fileFilter});

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //unified topology set
client.connect((err) => {
  const collection = client.db("volunteer").collection("volunteerCollection"); //connecting the collection
  const organization = client.db("volunteer").collection("organizationCollection"); //all orgnaization detail
  const event = client.db("volunteer").collection("organizationevent"); //ALL EVENT POSTED BY THE ORGANIZAIOTN
  const addeventinfo = client.db("volunteer").collection("addeventinfo"); //ADD INFORMATION BY ADMIN
  // perform actions on the collection object
  // collection('').find({}).sort({_id:-1}) 
  // loading data
  app.get("/info", (req, res) => {
    collection.find({}).sort({_id:-1})  //find all data from database
      .toArray((err, document) => {
        // to array is being used to load all data from db
        res.send(document); //data send to html
      });
  });

  //GET ORGANIZATION DATA
  app.get("/organizationinfo", (req, res) => {
    event.find({}).sort({_id:-1}) //find all data from database
      .toArray((err, document) => {
        // to array is being used to load all data from db
        res.send(document); //data send to html
      });
  });

  //LOADING FOR ORGANIZATION

  app.get("/", (req, res) => {
    collection
      .find({}) //find all data from database
      .toArray((err, document) => {
        // to array is being used to load all data from db
        res.send(document); //data send to html
      });
  });

  app.get("/task", (req, res) => {
    // console.log(req.query);
    collection.find({ mail: req.query.mail }).toArray((err, document) => {
      res.send(document);
    });
  });

  // update
  app.patch("/update/:id", (req, res) => {
    console.log(req.body);

    collection
      .updateOne(
        { _id: ObjectId(req.params.id) }, //update data using update one & ObjectId for matching
        {
          $set: {
            name: req.body.name,
            mail: req.body.mail,
          },
        }
      )
      .then((result) => {
        res.send(result);
        // console.log(result);
        // result is to say that data is updated
      });
  });

  // sending/posting data to database
  app.post("/addPeople",upload.single("photo"), (req, res) => {
    const pd = req.body;
      console.log(pd);
      console.log(req.file)
      if(req.file===undefined)
      {
       res.send({data:false,statement:"Please Upload A file for verification"}); return;
      }

      const newArticle={
        name:req.body.name,
        date:req.body.date,
        mail:req.body.mail,
        age:req.body.age,
        description:req.body.description,
        organize:req.body.organize,
        location:req.body.location,
        status:req.body.status,
        fileName:{
          data:req.file.filename,
          path:req.file.path,
          contentType:'image/png'
        }
      }
    if(req.body.age<=17)
    {
      if(req.body.age<=0){
      // res.send(false,"Age cannot be less then 0 enter proper Age")
      res.send({ data: false, statement:"Age cannot be less then 0 enter proper Age" })
      return;}
      else{
        res.send({ data: false,statement:"Too Young to Volunteer" })
      }


    }
    console.log(req.file===undefined)
   
    collection.insertOne(newArticle).then((result) => {
      res.send({data:true});
    });
  });

  //ADD ORGANIZATION EVENT AND DISPLAY IT IN ADMIN
  app.post("/eventinfoadd",upload.single("photo"), (req, res) => {

    const pd = req.body;
     console.log(pd);
    // console.log(req.file)
      if(req.file===undefined)
      {
       res.send({data:false,statement:"Please Upload A file for verification"}); return;
      }

    if(req.body.volnumber<=0)
    {
      res.send({ data: false,statement:"Enter Proper Number of Volunteer(More then 0 😒)" });return;
    }
    
    const OrganizationInfo={
      name:req.body.name,
      date:req.body.date,
      mail:req.body.mail,
      volnumber:req.body.volnumber,
      description:req.body.description,
      organize:req.body.organize,
      location:req.body.location,

      fileName:{
        data:req.file.filename,
        path:req.file.path,
        contentType:'image/png'
      }
    }





    event.insertOne(OrganizationInfo).then((result) => {
      res.send({data:true});
    });
  });

  // sending/posting data to database to add organization
  app.post("/addOrganization", async (req, res) => {
    const pd = req.body;
    // console.log(req.body);
    // console.log(pd);
    var checkpoint1 = await organization.findOne({
      orgnaizationname: req.body.organizationname,
    });
    var checkpoint2 = await organization.findOne({ email: req.body.email });
    console.log(
      JSON.stringify(checkpoint1) + " " + JSON.stringify(checkpoint2)
    );
    if (checkpoint1 != null || checkpoint2 != null) {
      res.send({ success: false, statement: "ALREADY EXISTED" });
      return;
    }

    organization.insertOne(pd).then((result) => {
      res.send({ success: true });
    });
  });

  //login organizaiton

  app.post("/loginOrganization", async (req, res) => {
    console.log(req.body);
    await organization.findOne({ email: req.body.email }, (err, user) => {
      if (!user)
        return res.json({
          success: false,
          message: "Authentication failed, email not found",
        });
      //   console.log("user found",user)

      // console.log(req.body.password," ",user.password)

      if (req.body.password === user.password) {
        return res
          .status(200)
          .json({ success: true, statement: "Login success", info: user });
      } else {
        return res
          .status(401)
          .json({
            success: false,
            statement: "Invalid credencial",
            info: user,
          });
      }
    });
  });

  app.post("/deleteActivity", (req, res) => {
    // console.log(req.body);

    collection
      .findOneAndDelete({ _id: ObjectId(req.body.id) })
      .then((err, doc) => {
        if (err) return res.send({ success: false, err });
        res.send({ success: true, doc });
      });
  });

  app.post("/deleteActivityOrganization", (req, res) => {
     console.log(req.body);

    event.findOneAndDelete({ _id: ObjectId(req.body.id) }).then((err, doc) => {
      if (err) return res.send({ success: false, err });
      res.send({ success: true, doc });
    });
  });


  app.post("/updateActivity", (req, res) => {
    console.log(req.body);
    // const replacement = {
    //   title: `The Cat from Sector ${Math.floor(Math.random() * 1000) + 1}`,
    // };

    const filter={_id:ObjectId(req.body.id)}
   let newstatus;
    if(req.body.status==="Accepted")
    {
      newstatus={
        $set:{
          status:"Waiting",
        }
      };
    }
    else{
     newstatus={
      $set:{
        status:"Accepted",
      }
    };
  }
   
  collection.updateOne(filter, newstatus)
      .then((err, doc) => {
        if (err) return res.send({ success: false, err });
        res.send({ success: true, doc });
      });
  });


  app.post("/eventadd",upload.single("photo"),(req,res)=>{
    console.log(req.file)
    
     const newArticle={
      title:req.body.title,
      orgnaizationname: req.body.orgnaizationname,
      description: req.body.description,
      fileName: {
        data:req.file===undefined?"No banner":req.file.filename,
        path:req.file===undefined?"No path foundefined ":req.file.path,
        contentType:'image/png'}
     };
           

      
     addeventinfo.insertOne(newArticle).then((req,response) => {
      if(err) return res.send({success:false,err});
      res.send({success:true});
    });
  });

  app.get("/neweventinfo", (req, res) => {
    addeventinfo
      .find({}) //find all data from database
      .toArray((err, document) => {
        // to array is being used to load all data from db
        res.send(document); //data send to html
      });
  });

  app.post("/numEvents", (req, res) => {
     console.log(req.body)
     console.log()
    // collection.find({ 'name': req.body.name })
    //     .exec((err, eventnumber) => {
    //         if (err) return res.status(400).send(err);
    //         return res.status(200).json({ success: true,eventnumber })
    //     })find().exec
    collection.find({ 'name': req.body.name }).toArray((err, document) => {
       console.log(document.length)
      res.send({data:true,statement:document.length}); return;
  //   Model.find().exec(function (err, results) {
  // var count = results.length
});
  })






  // load single data
  app.get("/product/:id", (req, res) => {
    // console.log(req.params.id);
    collection
      .find({ _id: ObjectId(req.params.id) })
      .toArray((err, documents) => {
        res.send(documents[0]);
      });
  });

  // deleting data
  app.delete("/delete/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.query);
    collection
      .deleteOne({
        $and: [{ _id: ObjectId(req.params.id) }, { mail: req.query.mail }],
      }) //delete one & object id
      .then((result) => {
        res.send(result.deletedCount > 0);
      });
  });

  console.log("DB Connected");
  //   client.close();
});

// app listen
app.listen(3006, () => {
  console.log("Listening to port at 3006 ");
});


//EVENT PROBLEM STILL THERE CONSOLE SHOWING INFINITY