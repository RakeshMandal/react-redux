import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const RePrepare = () =>{
    const [count,setCount] = useState(0);
    const [data,setData] = useState([]);
    const {register,handleSubmit,formState:{errors}} = useForm();
    const IncrementsCount = () =>{
        setCount(count+1)
    }
    const DecrementsCount = () =>{
        setCount(count-1)
    }
    const onSubmit =data =>console.log(data);

    const api_url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(()=>{
        try{
            async function fetData(){
                let response = await fetch(api_url)
                response = await response.json()
                setData(response)
           } 
           fetData()
        }
        catch(errors){
            console.log(errors)
        }
        
        
    },[]);

    // find Fectorial Number
    let result=1;
    const fectoFun = (fnum) =>{
        if(fnum<=1){
            return fnum;
        }
        for(let i =2; i<=fnum;i++){
            result*=i;
        }
        return result;
    }
    const showResult = fectoFun(3);
    console.log(showResult);

    // recursive way to find the Fectorial num
    function recurWays(n){
        if(n<=1){
            return n;
        }
        return n * recurWays(n-1)
    }
    const resultR = recurWays(5)
    console.log(resultR);

    // check string is palindrom or not

    let string = "madam";
    let reverseString = string.split('').reverse().join('').toLocaleLowerCase()
    console.log(reverseString)
    if(string === reverseString){
        console.log("String is Palindrom", true)
    }
    else{
        console.log("String is not Palindrom", false)
    }

    // finding largest number in an array

    const array = [1,6,2,9,3,0,33,4,53,90];
    // 1st way 
    const sortArray = array.sort((a,b)=>a-b);
    const largestNum = sortArray[sortArray.length-1]
    console.log(largestNum)
    // 2nd way 
    const largestOtherWay = array.reduce((acc,cur)=>{
        return acc>cur?acc:cur
    })
    console.log(largestOtherWay);
    // 3rd way 
    console.log(Math.max(...array))
    // 4th way
    for(let i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
            let newL=array[i]
            return newL
        }
    }




    return (
        <>
    <h1>Aging I am Here and Thank God..........</h1>
    <h2 style={{color:"red"}}>1. Implement a simple counter component in React that increments a value on button click.</h2>
    <button style={{padding:"8px", color:"white", backgroundColor:"black",borderRadius:"5px",cursor:"pointer"}} onClick={IncrementsCount}>Increments Count</button>
    <p style={{color:"green", fontSize:"18px",fontWeight:"bold"}}>Increments Count Here: {count}</p>
    <button style={{padding:"8px", color:"white", backgroundColor:"black",borderRadius:"5px",cursor:"pointer"}} onClick={DecrementsCount}>Increments Count</button>

    <h2 style={{color:"red"}}>2. Create a React form component that validates input (e.g., email format, required fields).</h2>
    <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div style={{padding:"5px"}}>
                <label>Filst Name : </label>
                <input type="text" label="fname" id="fname" {...register("fname",{required: true, maxLength:20})}
                aria-invalid={errors.fname?"true":"false"}
                ></input>
                {errors.fname?.type === 'required' && <p role="alert">First name is required</p>}
            </div>
            <div style={{padding:"5px"}}>
                <label>Last Name : </label>
                <input type="text" label="lname" id="lname" {...register("lname",{required:true, pattern:'/^[A-Za-z]+$/'})}
                aria-invalid={errors.lname?"true":"false"}
                ></input>
                {errors.lname?.type==='required' && <p role="alert">Last Name is Required</p>}
            </div>
            <div style={{padding:"5px"}}>
                <label>Mobile : </label>
                <input type="text" label="mobile" id="mobile" {...register("Mobile",{required:true, minLength:10,maxLength:10, pattern:"/^[0-9]$/"})} style={{marginLeft:"28px"}}></input>
            </div>
            <div style={{padding:"5px"}}>
                <label>Email : </label>
                <input type="email" label="email" id="email" style={{marginLeft:"40px"}}></input>
            </div>
            <div style={{padding:"5px"}}>
                <label>Password : </label>
                <input type="password" label="password" id="password" style={{marginLeft:"13px"}}></input>
            </div>
            <button style={{padding:"10px",marginLeft:"23px",width:"100px",cursor:"pointer"}}>Sign Up</button>
        </form>
    </div>
    <h2 style={{color:"red"}}>3. Build a React component that fetches data from an API and displays it.</h2>
    {data.map((item)=>{
        return (
            <p key={item.id}>Name: {item.name} <span style={{color:"green",marginLeft:"10px",textAlign:"right"}}> Email: {item.email}</span></p>

        )
    })}

<h2 style={{color:"red"}}>4. Write a function to find the factorial of a given number in JavaScript.</h2>
<h2 style={{color:"#f00"}}>5. Implement a function that checks whether a string is a palindrome.</h2>
<h2 style={{color:"#f00"}}>6. Solve the problem of finding the largest element in an array using JavaScript.</h2>


    </>
    )

}

export default RePrepare;
