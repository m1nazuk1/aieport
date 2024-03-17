import LoginedHeader from './LoginedHeader.jsx'
import BuyingForm from './BuyingForm.jsx'
import React from "react";

export default function LoginedCap() {
    return (
        <div id='cap'>
            <LoginedHeader />
            <BuyingForm />
        </div>
    )
}