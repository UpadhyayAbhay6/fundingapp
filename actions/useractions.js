"use server"

import Razorpay from "razorpay";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb();

     //fetch the secret of the user who getting the payment

    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
       }

    let x = await instance.orders.create(options)

    await Payment.create({oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message, address: paymentform.address})

    return x
}
export const fetchuser = async (username) =>{
    await connectDb()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds: true})
    return user
}

export const fetchpayments = async (username) =>{
    await connectDb()
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
    return p
}

export const updateProfile = async (data, oldusername) =>{
    await connectDb()
    let ndata = Object.fromEntries(data)
    if(oldusername !== ndata.username){
        let u = await User.findOne({ username: ndata.username })
        if(u) {
            return { error: "Username already exists" }
        }
        
    }
    await User.updateOne({email: ndata.email}, ndata)
    
    
}