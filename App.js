import logo from './logo.svg';
import React , {useEffect, useState} from 'react';
import './App.css';
// import Data from './data.json';

function App() {
// console.log(Data);
  //using props method in react 
  
const names=['Tushar','chandra','mohanto','bangladesh']


const paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita doloribus omnis enim modi ipsum nobis officia cumque iusto qui necessitatibus, vel quasi, natus placeat assumenda facilis quibusdam laudantium magni voluptatem consequatur. Beatae illo rem laborum! Cum ratione vero quaerat adipisci consequatur quibusdam recusandae cumque cupiditate eum esse, maiores animi, id obcaecati illum numquam consectetur magnam reiciendis quae neque quos consequuntur non tenetur alias? Dolorum omnis quis nulla doloribus tempora error facere nam iste dolorem recusandae. Hic, ex placeat odit ullam minima corrupti dolor quas sapiente ad aut quis, architecto iste facilis ipsum culpa ipsa? Tempora hic nesciunt esse ipsa."

  const colors={
    backgroundColor:"gray",
    color:"white",
    fontFamily:"sans-serif",
    fontWeight:"400"  }
  const element={
    color:"tomato",
    textAlign:"center"
  }
const footer={
  display:"flex",
  
  marginLeft:"50px"
 

}
const ul={
  flexBasis:"700px",
}


  return (
    <div className="App">
      <header className="App-header">
     <div>
       <h1 style={element}>My website</h1>
     </div>


     <div style={colors}>
     <section>
       <h3 style={element}>My study plan</h3>
       <p>{paragraph}</p>
     </section>

     <section>
       <h3 style={element}>About me</h3>
       <p>{paragraph}</p>
     </section>
     </div>
     

     <footer style={footer}>
       <ul style={ul}>
         <li>Home</li>
         <li>About me</li>
         <li>Contact with me</li>
       </ul>

       <ul style={ul}>
         <li>Home</li>
         <li>About me</li>
         <li>Contact with me</li>
       </ul>

       <ul style={ul}>
         <li>Home</li>
         <li>About me</li>
         <li>Contact with me</li>
       </ul>
     </footer>
    <UserData></UserData>
     <Counter></Counter>
     <Counter></Counter>
     <Counter></Counter>
     <Decerease></Decerease>
     <Names name={names[0]}></Names>
     <Names name={names[1]}></Names>
     <Names name={names[2]}></Names>
     <Names name={names[3]}></Names>
     <Names></Names>
     <Names></Names>
     <Names></Names> <Names></Names>
     
     
    
      
     
 </header>
     
    </div>
  );
}


function Counter(){

  const [count,setCount] =useState(0);

  const handelClick = ()=>{
    const newCount=count+1;
    setCount(newCount);
  }
  return (
    <div style={{textAlign:"center"}}>
   <h1>Count:{count}</h1>
   <button onMouseMove={handelClick}>Increase</button>
   <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>


 
   
  )
}

function Decerease(){
  const [count,setCount]=useState(0);
  const decrement=()=>setCount(count-1);
  return(
    <div style={{textAlign:"center"}}>
      <h1>Count:{count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
   


function Names(props){
  const date=new Date();
  const day=date.getDate();
  const month=date.getMonth();
  const AccurateMonth=month+1;
  const year=date.getFullYear();

  const bdbdbd={
    border:"2px solid green",
    borderRadius:"15px",
    height:"250px",
    width:"350px",
    margin:"10px",
    float:"left"
  
  }
  return(
    <div style={bdbdbd}>
      <h3>My Name is:{props.name}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium voluptatem facilis aspernatur totam quasi quas sed magni corporis repellendus?</p>
      <h4>Today Current date is:{day +"-" + AccurateMonth+"-" + year}</h4>
      <button>More Know About Me</button>
    </div>
  )
}


//Dynamacally set user name and datd

function UserData(){

  const [username,setUserName] =useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then(data =>{
      
    setUserName(data);
    })
  })
  return (
    <div>
      <h1>Hey our client name is:{username.length}</h1>
      {
        username.map(newdata => <li>{newdata.name}{newdata.email}</li>)
      }
      <h2>Client Contact info:</h2>
    </div>
  )
}


export default App;
