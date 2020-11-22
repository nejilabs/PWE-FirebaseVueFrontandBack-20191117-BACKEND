import admin from '../firebase-service';
import * as Express from "express";

interface IRequest extends Express.Request{
  [key:string]:any
}

// admin.auth().verifyIdToken()
const getAuthToken = (req:IRequest, _:any, next:any)=>{
  if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"){
    req.authToken = req.headers.authorization.split(" ")[1];
  } else{
    req.authToken=null;
  }
  next();
}

export const checkIfAuthenticated = (req:IRequest, res:Express.Response, next:any)=>{
  getAuthToken(req, res, async()=>{
    try{
      const {authToken} = req;
      const userInfo = await admin.auth().verifyIdToken(authToken);
      req.authId = userInfo.uid;
      return next();
    }catch(e){
      return res.status(401).send({error: 'You are not authorized'})
      
    }
  })
};