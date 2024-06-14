        import React from "react";
        import ReactDOM from "react-dom/client";
        
        const heading=React.createElement
        (
            "h1",
            {id:"Headinggg",name:"Deep"}, 
            "Hello From React!"
        );


        const root=ReactDOM.createRoot
        (
            document.getElementById("root")
        );


        root.render(heading);



        // <div id="Parent">
        //     <div id="Child">
        //         <h1> I'm h1 tag </h1>
        //         <h2> I'm h2 tag </h2>
        //     </div>
        // </div>



        const parent=React.createElement
        (
            "div",
            { id: "Parent" },
            [
                React.createElement
                (
                    "div",
                    { id:"Child1" },
                    [React.createElement("h1",{},"I am h1 tag"), 
                        React.createElement("h2",{},"I am h2 tag")]
                ),
                React.createElement
                (
                    "div",
                    { id:"Child2" },
                    [React.createElement("h1",{},"I am h1/2 tag"), 
                        React.createElement("h2",{},"I am h2/2 tag")]
                )
            ]
        )

        root.render(parent);

        