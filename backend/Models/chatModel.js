const mongoose = require('mongoose');
//schema banare haii    
//This is our data model for our chat will look like
const chatModel = mongoose.Schema(
    {
      chatName: {type:String , trim : true},
      isGroupChat: {type: boolean , default: false},   //grp chat bydefault false rahega
      users: [{                                         //grp chat nhy toh 2 users agar grp chat toh boht users isliy array banaya
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",   //User ke liy model banayege
      },],
      //latest message should be on top and it should be stored in our database
     latestMessage: {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Message",  //message ke liye model bnayege
     },
     groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
     },
    }
     , {
        timeStamps: true, 
     },
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;