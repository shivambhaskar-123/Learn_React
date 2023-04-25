{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}

// const parent = React.createElement(
//     'div',
//     { id: 'parent' },
//     React.createElement(
//         'div',
//         { id: 'child' },
//         [React.createElement("h1", { id: 'heading' }, "I am tag h1"),
//         React.createElement("h2", { id: 'heading' }, "I am tag h2")]
//     )
// );
const parent = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement(
        'div',
        { id: 'child1' },
        [React.createElement("h1", { id: 'heading' }, "I am tag h1"),
        React.createElement("h2", { id: 'heading' }, "I am tag h2")]
    ),
    React.createElement(
        'div',
        { id: 'child2' },
        [React.createElement("h1", { id: 'heading' }, "I am tag h1"),
        React.createElement("h2", { id: 'heading' }, "I am tag h2")]
    )]
);

//NOTE to create the siblings we use array







// const heading = React.createElement("h1", { id: 'heading' }, "Hello world from react");
// console.log(heading);

// this heading is a normal javascript object

const root = ReactDOM.createRoot(document.getElementById('root'));
//this root is the place where all react code will run

root.render(parent);

//NOTE react is library becuse it can work independently as a small portion on your app, it is not a full fleged frame work
