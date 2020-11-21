import * as Express from 'express';
import * as Cors from 'cors';

const app = Express();
const port = 3000;

app.use(Cors());
app.get("/",(_,res)=>{
  return res.send("Hello World");
})

app.listen(port,()=>console.log('working on port ' + port));