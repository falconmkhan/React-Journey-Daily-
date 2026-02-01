
// function Son(props) {
//     return (
//         <div style={{ background: 'black' }}>
//             <h2>Son</h2>
//             <h3>{props.children}</h3>
//         </div>
//     )
// }


// function Daughter(props) {
//     return (
//         <div style={{ background: 'grey', color: 'black' }}>
//             <h2>Daughter</h2>
//             <h3>{props.children}</h3>
//         </div>
//     )
// }

// function Parent(props) {
//     let child = props.child
//     if (child === "son") {
//         return (
//             <Son>
//                 Hello I'm Son From Parent Component
//             </Son>
//         )
//     }
//     else if (child === "daughter") {
//         return (
//             <Daughter>
//                 Hello I'm Daughter From Parent Component
//             </Daughter>
//         )
//     }
//     else {
//         return (
//             <>
//                 <h1>Props Childrens </h1>
//                 <h3>
//                     In React, you can send the content between the opening and closing tags of a component, to another component.
//                     This can be accessed in the other component using the props.children property.
//                 </h3>
                
//                 <Son>
//                     Hello I'm Son From Parent Component
//                 </Son>
//                 <Daughter>
//                     Hello I'm Daughter From Parent Component
//                 </Daughter>
//             </>
//         )
//     }


// }

// export default Parent