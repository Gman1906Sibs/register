import { useState } from "react";
import axios from "axios";

function Form() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [fever, setFever] = useState("❌")
    const [cough, setCough] = useState("❌")
    const [throat, setThroat] = useState("❌")
    const [breath, setBreath] = useState("❌")
    const [smell, setSmell] = useState("❌")
    const [body, setBody] = useState("❌")
    const [fatigue, setFatigue] = useState("❌")
    const [nausea, setNausea] = useState("❌")

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name, surname, number, address)

        const data= {
            Name: name,
            Surname: surname,
            Number: number,
            Address: address,
            Fever_Chills: fever,
            Sore_Throat: throat,
            Shortness_of_Breath: breath,
            Loss_of_Smell_Taste: smell,
            Body_Ache: body,
            Fatigue: fatigue,
            Nausea: nausea,
        }
        axios.post("https://sheet.best/api/sheets/19f2bc76-e401-4732-864a-ed9ea972112c", data).then(
            (response)=> {
                console.log(response)
                setName("");
                setSurname("");
                setNumber("");
                setAddress("");
                setFever("❌");
                setCough("❌");
                setThroat("❌");
                setBreath("❌");
                setSmell("❌");
                setBody("❌");
                setFatigue("❌");
                setNausea("❌");
                e.target.reset();
                
            }
        )
    }

    return (
        <div className=" mx-4 pl-4 mb-5 ">
            <form onSubmit={handleSubmit}>
                <h1 className=" font-extralight text-2xl py-2 ">Personal Contact Details</h1>
                <div className=" flex-col font-light text-gray-700 text-[16px] ">
                    <div className=" flex py-2 j ">
                        <div className=" max-w-full flex-grow ">
                            <h1>First Name <span className=" text-red-500 ">*</span></h1>
                            <input type="text" className=" border-gray-200 border-[1px] rounded-sm h-8 px-2 w-[95%] flex-grow " name="name" onChange={(e) => setName(e.target.value)} value={name} required />
                        </div>
                        <div className=" max-w-full flex-grow ">
                            <h1>Last Name <span className=" text-red-500 ">*</span></h1>
                            <input type="text" className=" border-gray-200 border-[1px] rounded-sm h-8 px-2 w-[95%] flex-grow " name="surname" onChange={(e) => setSurname(e.target.value)} value={surname} required />
                        </div>
                    </div>
                    
                    <h1>Mobile Number <span className=" text-red-500 ">*</span></h1>
                    <input type="text" className=" border-gray-200 border-[1px] rounded-sm h-8 px-2 w-[97.5%] flex-grow mb-2 " name="number" onChange={(e) => setNumber(e.target.value)} value={number} required />
                    <h1>Email Address</h1>
                    <input type="text" className=" border-gray-200 border-[1px] rounded-sm h-8 px-2 w-[97.5%] flex-grow mb-2 " name="address" onChange={(e) => setAddress(e.target.value)} value={address} />
                </div>

                <h1 className=" font-extralight text-2xl py-2 ">Please select if you have experienced any of these in the last 14 days:</h1>

                <div className=" flex items-center py-3 ">
                    <input type="checkbox" className=" mx-3 " name="fever" value={fever} onChange={(e) => setFever("✅")}/>
                    <p className=" font-light text-gray-700 text-[16px] ">Fever and/or Chills?</p>
                </div>

                <div className=" flex items-center pb-3 ">
                    <input type="checkbox" className=" mx-3 " name="cough" value={cough} onChange={(e) => setCough("✅")}/>
                    <p className=" font-light text-gray-700 text-[16px] ">A Cough?</p>
                </div>

                <div className=" flex items-center pb-3 ">
                    <input type="checkbox" className=" mx-3 " name="throat" value={throat} onChange={(e) => setThroat("✅")}/>
                    <p className=" font-light text-gray-700 text-[16px] ">Sore Throat?</p>
                </div>

                <div className=" flex items-center pb-3 ">
                    <input type="checkbox" className=" mx-3 " name="breath" value={breath} onChange={(e) => setThroat("✅")}/>
                    <p className=" font-light text-gray-700 text-[16px] ">Shortness of Breath</p>
                </div>

                <div className=" flex items-center pb-3 ">
                    <input type="checkbox" className=" mx-3 " name="taste" value={smell} onChange={(e) => setSmell("✅")}/>
                    <p className=" font-light text-gray-700 text-[16px] ">Loss of Smell or Taste?</p>
                </div>

                <div className=" flex items-center pb-3 ">
                    <input type="checkbox" className=" mx-3 " name="pain" value={body} onChange={(e) => setBody("✅")}/>
                    <p className=" font-light text-gray-700 text-[16px] ">Body Ache / Muscle / Joint Pain?</p>
                </div>

                <div className=" flex items-center pb-3 ">
                    <input type="checkbox" className=" mx-3 " name="fatigue" value={fatigue} onChange={(e) => setFatigue("✅")}/>
                    <p className=" font-light text-gray-700 text-[16px] ">Fatigue or Weakness?</p>
                </div>

                <div className=" flex items-center pb-3 ">
                    <input type="checkbox" className=" mx-3 " name="nausea" value={nausea} onChange={(e) => setNausea("✅")}/>
                    <p className=" font-light text-gray-700 text-[16px] ">Nausea / Vomiting / Diarrhoea?</p>
                </div>

                <h1 className=" font-extralight text-2xl py-2 ">IMPORTANT:</h1>

                <p className=" font-light text-gray-700 text-[16px] pb-3 ">If you answered YES to any of the above questions, please do not come to the church service and contact your Medical Doctor for advice.</p>
                
                <h1 className=" font-extralight text-2xl py-2 ">Please note the following Covid-19 protocols:</h1>

                <p className=" font-light text-gray-700 text-[16px] pb-3 ">According to the current Level-1 regulations for religious gatherings, you are required to wear a face mask covering your mouth and nose throughout the service, and to observe social distancing of 1.5m at all times. In order to register for the service, you need to agree to observe these restrictions below:</p>

                <div className=" flex items-center pb-3 ">
                    <input type="checkbox" className=" mx-3 " name="agree" required/>
                    <p className=" font-light text-gray-700 text-[16px] ">Yes, I agree to wear my face mask throughout the service, and to observe social distancing of 1.5m</p>
                </div>

                
                <button className=" bg-[#a3a3a3] p-3 rounded-md ring-gray-200 text-sm text-white hover:ring-1 focus:outline-none active:bg-[#c44a04] hover:shadow-md " type="submit" > Submit</button>
                
            </form>
        </div>
    )
}

export default Form
