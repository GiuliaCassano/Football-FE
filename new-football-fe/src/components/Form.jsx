import { useState } from "react";

const Form = () => {

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");

    const nameChangeHandler = (event) => {
        setNameValue(event.target.value) //il valore dell'elemento dove si trova l'evento
    }

    const emailChangeHandler = (event) => {
        setEmailValue(event.target.value) //il valore dell'elemento dove si trova l'evento
    }

    const phoneChangeHandler = (event) => {
        setPhoneValue(event.target.value) //il valore dell'elemento dove si trova l'evento
    }

    const submitHandler = (event) => {
        event.preventDefault();

        //Ora inizio la FETCH --> POST
        const newUserToBE = { name: nameValue, email: emailValue, phoneNumber: phoneValue };
        console.log(newUserToBE);
        fetch("http://localhost:8080/user/create", {
            method: "POST", //--->when doing GET, we do not need to type method! Here we have to!
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newUserToBE), //---> converts a JavaScript value to a JSON string
        })
            .then((response) => response.json()) //--->fetch returns a Promise<response> that can be handled by .then()
            .then((newUserToBE) => {
                console.log("Success, you've sent this object ", newUserToBE);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    };

return (
    <section>
        <form onSubmit={submitHandler} className='d-flex flex-column w-50 m-1'>
            <label htmlFor="name">Name</label>
            <input onChange={nameChangeHandler} value={nameValue} id='name' type="text" />

            <label htmlFor="email">Email</label>
            <input onChange={emailChangeHandler} value={emailValue} id='email' type="text" />

            <label htmlFor="phone">Phone number</label>
            <input onChange={phoneChangeHandler} value={phoneValue} id='phone' type="text" />
            <button className='btn btn-primary mt-4'>Sign in</button>
        </form>
    </section>
)
}


export { Form };


//Faccio cose quì e poi riporto i tag in app
//1 Creo html
//Creo onChange e poi le sue const
//Creo onSumbit (ricorda event.preventDefault() ) e la sue const
//Creo Fetch