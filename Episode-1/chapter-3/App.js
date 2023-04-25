const heading = React.createElement("h1", { id: 'heading' }, "Hello world from react");
//reract need to have a root where he can do all dom stuffs
// creating a element is a core thing of react and its comes from 1st link 
// when we are creating a root and rendering something inside it then it is job of react dom i.e. from 2nd link

//NOTE {} empty object is a place where we will give attributes to our tag

console.log(heading);

// this heading is a normal javascript object and a react element

const root = ReactDOM.createRoot(document.getElementById('root'));
//this root is the place where all react code will run

root.render(heading);

//NOTE this root.render fumction job is basically to take this object take that h1 tag which the browser understand and put that up inside the root element