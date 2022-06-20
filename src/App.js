import './App.css'
import FirstComponent from './FirstComponent'
// I'm importing the FirstComponent component from the file it's declared in!
import SecondComponent from './SecondComponent'

const App = () => {
  let myName = 'Stefano'

  return (
    // this is JSX
    // most noticeable differences from HTML:
    // class -> className
    // you can embed js with {}

    <div className="App">
      <header className="App-header">
        <FirstComponent />
        <h2>Hello {myName}</h2>
        <p>This is the content of the paragraph!</p>
        <SecondComponent
          content="Hello Epicoders!"
          customClass="text-red"
          myNumber={true}
          // prop values are going to be delimited by quotes if they are strings, {} on every other case
        />
        {/* content is called a PROP -> stands for "property" */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SecondComponent content="I'm back!" customClass="text-yellow" />
        {/* How can I put here FirstComponent? */}
        <FirstComponent />
      </header>
    </div>
  )
}

export default App
