import ThirdComponent from './ThirdComponent'

// Best practises for naming a React Component file:
// 1) follow the Pascal Case nomenclature
// FirstComponent
// FunctionalComponent
// MyComponent

// 2) Give the file a .jsx extension
// 3) Name the component as the file

// one way of creating React Components is writing a function!
const FirstComponent = () => {
  return (
    <>
      {/* <> is a React Fragment */}
      <h1>First Custom Component</h1>
      <h3>Let's see if this works!</h3>
      <ThirdComponent customColor="purple" />
      <ThirdComponent customColor="orange" />
    </>
  )
}

export default FirstComponent
// exporting a component is the only way to make it available somewhere else!
