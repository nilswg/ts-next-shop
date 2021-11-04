import { Request, Response } from "express";

// Model
interface PongSchema {
    value : string,
}

const PongData: PongSchema = {
    value: "✨ PONG ✨",
}

// Controller
var PongController = {
    find: ()=> new Promise((resolve)=>{setTimeout(()=>{resolve(PongData)})})
}


// EndPoint
const Pong = async (req: Request, res: Response) => {
  try {
    const pong = await PongController.find();
    res.status(200).json({ data: pong });
  } catch (error) {
    res.status(500).json({ message: "Error in getting Pong" });
  }
};


export default Pong;