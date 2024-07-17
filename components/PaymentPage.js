"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "", address: "" })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        if(searchParams.get("paymentdone") == "true"){
        toast('Payment has done Successfully😊!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
        router.push(`/${username}`)
    }, [])
    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        
    }
    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Funding Express", //your business name
            "description": "Test Transaction",
            "img": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Abhay", //your customer's name
                "email": "abhi938923@example.com",
                "contact": "9389881323" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover w-full relative'>
                <img className='object-cover w-full h-[350]' src={currentUser.coverpic} alt='' />
                <div className='absolute -bottom-20 right-[45%] rounded-full border-white overflow-hidden border-2 size-32'>
                    <img className='rounded-full object-cover size-32' height={128} width={128} src={currentUser.profilepic} alt='' />
                </div>
            </div>
            <div className='info flex justify-center items-center my-24 flex-col gap-1'>
                <div className='font-bold text-lg'>@{username}</div>
                <div className='text-slate-400'>Lets help The {currentUser.name}</div>
                <div className='text-slate-400'>{payments.length} Payments. ₹{payments.reduce((a, b) => a + b.amount, 0)} raised</div>
                <div className='payment flex gap-3 w-[80%] mt-11'>
                    <div className='supporters w-1/2 bg-slate-900 rounded-lg p-10'>
                        <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                        <ul className='mx-3 text-sm w-full'>
                            {payments.length == 0 && <li className='flex items-center text-lg gap-0'>No Payments Yet!<img width={45} className='rounded-full' src='sad.gif' alt=''/></li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img width={33} src="avatar.gif" alt="" />
                                    <span className='flex gap-2 items-center'><span><span className='font-bold italic'>{p.name} </span> from <span className='font-bold italic'>{p.address}</span> donated <span className='font-bold'> ₹{p.amount} </span> with a message {p.message} </span></span><img
                                     className='rounded-full' width={30} src='heart.gif' alt='' />
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            <input onChange={handleChange} name='name' value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />

                            <input onChange={handleChange} name='message' value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

                            <input onChange={handleChange} name='address' value={paymentform.address} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Address' />
                            <input onChange={handleChange} name='amount' value={paymentform.amount} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-700 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-200" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 3 || paymentform.address?.length < 3 || paymentform.amount?.length < 1}>Pay</button>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button className='bg-slate-800 rounded-lg p-3' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 rounded-lg p-3' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 rounded-lg p-3' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage