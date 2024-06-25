        import React from "react";
        import ReactDOM from "react-dom/client";

        import Header from "./components/Header";
        import Body from "./components/Body";
// CONCEPTS START






    //     // const heading=React.createElement
    //     // (
    //     //     "h1",
    //     //     {id:"Headinggg",name:"Deep"}, 
    //     //     "Hello From React!"
    //     // );


    //     // const root=ReactDOM.createRoot
    //     // (
    //     //     document.getElementById("root")
    //     // );


    //     // root.render(heading);



    //     // // <div id="Parent">
    //     // //     <div id="Child">
    //     // //         <h1> I'm h1 tag </h1>
    //     // //         <h2> I'm h2 tag </h2>
    //     // //     </div>
    //     // // </div>



    //     // const parent=React.createElement
    //     // (
    //     //     "div",
    //     //     { id: "Parent" },
    //     //     [
    //     //         React.createElement
    //     //         (
    //     //             "div",
    //     //             { id:"Child1" },
    //     //             [React.createElement("h1",{},"I am h1 tag"), 
    //     //                 React.createElement("h2",{},"I am h2 tag")]
    //     //         ),
    //     //         React.createElement
    //     //         (
    //     //             "div",
    //     //             { id:"Child2" },
    //     //             [React.createElement("h1",{},"I am h1/2 tag"), 
    //     //                 React.createElement("h2",{},"I am h2/2 tag")]
    //     //         )
    //     //     ]
    //     // )

    //     // root.render(parent);


    // // React Elements == DOM Elements

    // // const heading=React.createElement("h1",{id:"heading"},"Hello Deep Using normal React");

    // // JSX makes our life easy,  
    // // JSX syntax is alike HTML, Instead of writing React.createElement(---); u can use JSX

    
    //     const jsXheading=(<h1 id="heading"  className="head">  Hello Deep Using JSX  </h1>);



    //     //  ************React Functional Component*************

    //     const HeadingComponent1 = () => 
    //     {
    //         return <h1 className="heading1">Namaste React Functional component with return</h1>;  
    //     };
        

    //     const HeadingComponent2 = () => 
    //     (
    //          <h1 className="heading2">Namaste React Functional component without return</h1>
    //     );  // Most preffered
           
        


    //     // React Functional Component inside Component / Component Composition

    //     const Title= ()=>
    //     (
    //         <h1 className="head" tabIndex="5">
    //         Namaste Title hai! 
    //         </h1>
    //     );
        
    //     const num=20;


    //     const HeadingComponent3 = () => 
    //     (
    //         <div id="cointainer">
    //             <Title/>

    //             {/* within curly brackets, you can write javascript code */}
                
    //             {num}
    //             {jsXheading} 
    //             {Title()}
    //             {/*   can also call function inside it */}
               
    //              <h1 className="heading3">Can also write div inside functional component</h1> 
    //         </div>
           
    //     );



    
    // const root=ReactDOM.createRoot(document.getElementById("root"));

    // // root.render(heading);

    // root.render(jsXheading); //Rendering React Element

    // root.render(<HeadingComponent1/>);  //Rendering React Component
    // root.render(<HeadingComponent2/>);  //Rendering React Component
    // root.render(<HeadingComponent3/>);
    // //  console.log(heading);
    // // console.log(jsXheading);




    //  CONCEPT ENDS













    // HEADER COMPONENT

        
    


        







    // BODY COMPONENT

        
        // 1) const RestaurantCard=(props)=>       // U can also do this way
        // 2) const RestaurantCard=({resName,cuisine})=>
            


 
            






     






















    const AppLayout=()=>
    {
        return(
            <div className="app"> 
            <Header/>  
            <Body/> 
            </div>
        )

    }
    const root=ReactDOM.createRoot(document.getElementById("root"));


    root.render(<AppLayout/>);