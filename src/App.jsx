const App = () => {

  let x = "GreatStack";
  let array = ["user1", "user2", "user3"]
  return (
    <div>
     {x}
     {array.map((user)=>{return <h2>{user}</h2>})}
    </div>
  )
}

export default App