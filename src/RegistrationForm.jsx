export default function Registration() {
    function getInfo(e) {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userName = formData.get("name")
        const userSurname = formData.get("surname")
        const userEmail = formData.get("email")
        const userAge = formData.get("age")
        const userGender = formData.get("gender")
        const userPassword = formData.get("password")
        const userRepeadPassword = formData.get("password2")
        const newInfo = {
            name:userName,
            surname:userSurname,
            email:userEmail,
            age:userAge,
            gender:userGender,
            password:userPassword,
            password2:userRepeadPassword
        }
        if(newInfo.name == "") alert("Մի մոռացեք գրել անունը  !!!")
        else if(newInfo.surname == "") alert("Մի մոռացեք գրել ազգանունը !!!")
        else if(newInfo.email == "" || !/@/.test(newInfo.email)) alert("Ձեր email-ում պետք պարտադիր լինի @ նշանը !!!")
        else if(newInfo.age == "" || newInfo.age < 0) alert("Մի մոռացեք գրել տարիքը!!!")
        else if(newInfo.gender == null) alert("Մի մոռացեք գրել սեռը!!!")
        else if(newInfo.password.length < 8) alert("Ամենաքիչը 8 սիմվոլ !!!")
        else if(newInfo.password2 != newInfo.password) alert("ԿՐԿՆԵՔ գաղտնաբառը !!!")
        else alert("Դուք հաջողությամբ գրանցվեցիք")
        e.target.reset()
    }
    return(
        <div  className="w-[500px] h-[740px] rounded-[20px] p-[40px] bg-black" id="formDiv" >
            <h1 className="text-white">Registration</h1>
            <form onSubmit={getInfo} className="flex flex-col justify-center items-center my-[50px]">
                <input type="text" name="name" id="name" placeholder="Enter your name" className="my-[20px] text-white"/>
                <input type="text" name="surname" id="surname" placeholder="Enter your surname" className="my-[20px] text-white"/>
                <input type="text" name="email" id="email" placeholder="Enter your Email" className="my-[20px] text-white"/>
                <input type="number" name="age" id="age" placeholder="Enter your age" className="my-[20px] text-white"/>
                <h4 className="text-3xl text-white">What is your gender?</h4>
                <div className="w-[200px] flex justify-evenly items-center my-[20px] ">
                    <label htmlFor="gender" className="text-white">Male</label>
                    <input type="radio" name="gender" id="gender" placeholder="Enter your gender"/>
                    <label htmlFor="gender2" className="text-white">Female</label>
                    <input type="radio" name="gender" id="gender2" placeholder="Enter your gender"/>
                </div>
                <input type="password" name="password" id="password" placeholder="Enter password (at least 8 characters)" className="my-[20px] text-white" />
                <input type="password" name="password2" id="password2" placeholder="Repeat the password" className="my-[20px] text-white"/>
                <button type="submit" className="w-[90%] h-[40px] bg-[#0ef] rounded-[30px]">Submit</button>
            </form>
        </div>
    )
}