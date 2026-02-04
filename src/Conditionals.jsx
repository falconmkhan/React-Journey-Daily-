// function Working(){
//      return(
//         <>
//         <h1>I'm Working</h1>
//         <h1>We Are Open To Work</h1>
//         </>
//     )
// }

// function NotWorking(){
//     return <h1>We Currently Not Available</h1>
//     //  <h1>I'm Not Working</h1>
// }

function Conditonals(props) {
    let action = props.action
    let limit = props.limit
    let react = true
    let availiblity = false

    // if(action === "working"){
    // if(limit < 10){
    //     return <Working />
    // }
    // return <NotWorking />
    return (
        <>

            <h1>React Conditional Rendering</h1>

            <h2>"if" Statement is above this return</h2>

            <h2>Logical && Operator</h2>
            {/* The right side of && will only be rendered if the left side is true: */}
            {props.model && <h3>My Laptop Modle is {props.model}</h3>}  if i do this then right side only shows when there is model in props 
            <h3>My Laptop Model is {props.model}</h3> if i do this then it will show inner text of h3 even there is no model in props 

            <h2>Ternary Operator</h2>
            <h3>condition ? true  : false</h3>
            <h3>{react ? "We are learning React js" : "We are learning Javascript"} </h3>
            <h3>{availiblity ? "Product Available" : "Not Available"}</h3>
        </>
    )
}

export default Conditonals