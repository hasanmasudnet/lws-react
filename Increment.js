/*
 * Title: Counter Component
 * Description: A simple React Component that implements a simple counter that adds 1 to each user click
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 02/03/2021
 *
 */
const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div",null, [
//   React.createElement("p",null, "Hello World"),
//   React.createElement("p", null, "Hello Bangladesh")
// ]);

const Increment = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1 id="display">
      { counter }
      </h1>
      <div>
        <button type="" id="button" onClick={() => setCounter(counter+1)}>Increment +</button>
      </div>
    </div>

  );
}

// ReactDOM.render(Increment(), domContainer);
ReactDOM.render(
<div>
  <Increment />
  <Increment />
  <Increment />
</div>
, domContainer);


// let number = 0;

// const display = document.querySelector("#display");
// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//   number++;
//   display.textContent = number;
// });


// const domContainer = document.querySelector("#root");

// const Increment = () => {
//   const [counter, setCounter] = React.useState(0);
//   return (
//     <div>
//       <h1 id="display">{ counter }</h1>
//       <div>
//         <button id="button" onClick={ () => setCounter(counter + 1) }>Increment +</button>
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(
//   <div className="container">
//     <Increment />
//     <Increment />
//     <Increment />
//   </div>,
//   domContainer
// );