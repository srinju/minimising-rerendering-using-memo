import React , {Fragment, useState} from "react"

function App() {
  const [title1,setTitle1] = useState("title1"); //this is the initial state of title1
  const [title2,setTitle2] = useState("title2"); //this is the initial state of title2

  function updateTitle1(){
    setTitle1("my name is " + Math.random());
  }

  function updateTitle2(){
    setTitle2("leri boy is "  + Math.random());
  }

  return ( //it needs a parent tag react cannot have multiple children in the return it has to have a single parent because it makes it easy to recoincilation
    <div> 
      <button onClick={updateTitle1}>Click to change the Title1</button> <br></br>
      <button onClick={updateTitle2}>CLick to change Title2</button> <br></br>
     <Header title={title1}></Header> 
     <Header title={title2}></Header>
     <Header title="leri 3"></Header>
     <Header title="leri 4"></Header>
     <Header title="leri 5"></Header>  
    </div>
  )
}

const Header = React.memo(function Header ({title}){ //we use react.memo to those components who are static and dosent need to get unncessarily re-rendered
  //this memo thing re renders only the dynamic that is no re-rendering for static components and fyi it aslo re renders the whole parent thats obvious
  return <div> 
    {title}
  </div>
})

export default App
