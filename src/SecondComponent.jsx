// props is always going to be an OBJECT
// every prop you invoke a component with will be found as a property of the props object!
// props.content

// props:
// {
//     content: 'Little Paragraph'
// }

const SecondComponent = (props) => {
  return <p className={props.customClass}>{props.content}</p>
}

export default SecondComponent
