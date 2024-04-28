function App() {
  let message: string = 'Hi There!';
  let date: Date = new Date();
  let time: String = date.toLocaleTimeString();

  if (Math.random() > 0.5) {
    message = 'Bye There';
  }
  return(
    <input placeholder="Enter something..."/>
  )
  // return (
  //   <>
  //     <h1>{message}</h1>
  //     <h2>The time is {time}</h2>
  //   </>
  // )
}

export default App
