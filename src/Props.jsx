import './Props.css'
import dest from './script'



// function Propss({object,string,array}) {  With This way only that properties will get you define here
// function Propss(props) { // this will get all props 

function Propss (props){

    const {object} = props
    const {array} = props
    const {string} = props
    const {number} = props

    return (
        <>
            <h1>Props In React</h1>
            Props:  props (short for "properties") are a mechanism for passing data from a parent component
            to a child component. Props are akin to function arguments in JavaScript or attributes in HTML,
            allowing components to be dynamic, reusable, and customizable.


            <h2>Users Data From Object</h2>
            <h3>{props.object.name}</h3>
            <h3>{props.object.email}</h3>
            <h3>{props.object.code}</h3>



            <h2>Users Data From Array</h2>
            <h3>{props.array[0]}</h3>
            <h3>{props.array[1]}</h3>
            <h3>{props.array[2]}</h3>

            <h2>This is String {props.string}</h2>
            <h2>This is Number {props.number} = props</h2>

            <h1>Props Destructring</h1>
            You can limit the properties a component receives by using destructuring.
            <h3>{props.object.name}</h3>
            <h3>{props.array[0]}</h3>

            <h3>{object.name}</h3>
            <h3>{array[0]}</h3>
            <h3>{string}</h3>
            <h3>{number}</h3>
            
            <div className="card-container">
            {
                dest.map((item,ind)=>{
                   return(
                    <div className="card" key={ind}>
                       <h3>{item.name}</h3>
                       <h3>{item.code}</h3>
                       <h3>{item.email}</h3>
                    </div>
                   )
                   
                })
            }
             {/* we already learned map method in js */}
            </div>

        </>
    )
}

export default Propss