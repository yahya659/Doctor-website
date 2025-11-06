import React, { useState } from "react";

function ContactRE() {
  const [name, setname] = useState("");
  const[email,setemail]=useState("");
  const[number,setnumer]=useState("");
  const[select,setselect]=useState("")
  const [show, setshow] = useState(true); //خاصه اذا لم يدخل المستخدم الاااسم

  const FormHandler = (event) => {
    event.preventDefault(); //منع الحدث الاافتراضي اثناء الارسال البيانات
    if (name.length == "") {
      // alert("The name is empty")
      setshow(false);
      return;
    }
    else if(email.length==""){
      setshow(false)
      return; 
    }
    else if(number.length==""){
      setshow(false);
      return;
    }
    else if(select.length==""){
      setshow(false);
      return;
    }

    console.log("Access Login (name)", name);
    console.log("Access Login (email)", email);
    console.log("Access Login (number)",  number);
    console.log("Access Login (select)", select);
    
    setshow(true);
  };
  const Changname = (event) => {
    setname(event.target.value);
  };
  const changemail=(event)=>{
    setemail(event.target.value);

  }
  const changnumber=(event)=>{
    setnumer(event.target.value)
  }
  const changselectdepart=(event)=>{
    setselect(event.target.value)
  }

  return (
    <div className="container">
      <form onSubmit={FormHandler}>
        <div className="form-control">
          <input type="" placeholder="Your Name" onChange={Changname} />
          {!show && <p>The Name is Empty ."</p>}
        </div>
        <div className="form-control">
          <input type="" placeholder="Email" onChange={changemail} />
          {!show && <p>The Email is Embty .</p>}
        </div>
        <div className="form-control">
          <input type="" placeholder="Phone Numbers" onChange={changnumber}/>
          {!show&&<p>This Number is Embty .</p>}
        </div>
        <div className="form-control">
          <select onChange={changselectdepart}>
            <option>Select Department</option>
            <option>One</option>
            <option>Tow</option>
            <option>Three</option>
          </select>
          {!show&&<p>This Not selected</p>}
        </div>
        <div>
          <textarea placeholder="Type Message" />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default ContactRE;
