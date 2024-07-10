import React, { useState } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

function App() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "max-w-7xl mx-auto flex flex-wrap items-center justify-center" }, /*#__PURE__*/
    React.createElement(DemoA, null), /*#__PURE__*/
    React.createElement(DemoB, null), /*#__PURE__*/
    React.createElement(DemoC, null)), /*#__PURE__*/

    React.createElement("div", { className: "max-w-7xl mx-auto flex flex-wrap items-center justify-center" }, /*#__PURE__*/
    React.createElement(DemoD, null), /*#__PURE__*/
    React.createElement(DemoE, null), /*#__PURE__*/
    React.createElement(DemoF, null))));



}


function Card({ title, children }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "p-2" }, /*#__PURE__*/
    React.createElement("div", { className: "p-4  bg-white shadow-md rounded-md inline-block" }, /*#__PURE__*/
    React.createElement("div", { className: "px-3 font-bold text-xl pb-4" }, title),
    children)));



}

const demoAGraphData = [
{
  key: 0,
  path: "M7 95H5C2.23858 95 0 97.2386 0 100H12C12 97.2386 9.76142 95 7 95Z" },

{
  key: 1,
  path: "M27 100V97C27 93.6863 24.3137 91 21 91C17.6863 91 15 93.6863 15 97V100H27Z" },

{
  key: 2,
  path: "M42 100V92C42 88.6863 39.3137 86 36 86C32.6863 86 30 88.6863 30 92V100H42Z" },

{
  key: 3,
  path: "M57 100V87C57 83.6863 54.3137 81 51 81C47.6863 81 45 83.6863 45 87V100H57Z" },

{
  key: 4,
  path: "M72 100V82C72 78.6863 69.3137 76 66 76C62.6863 76 60 78.6863 60 82V100H72Z" },

{
  key: 5,
  path: "M87 100V78C87 74.6863 84.3137 72 81 72C77.6863 72 75 74.6863 75 78V100H87Z" },

{
  key: 6,
  path: "M102 100V73C102 69.6863 99.3137 67 96 67C92.6863 67 90 69.6863 90 73V100H102Z" },

{
  key: 7,
  path: "M117 100V68C117 64.6863 114.314 62 111 62C107.686 62 105 64.6863 105 68V100H117Z" },

{
  key: 8,
  path: "M132 100V63C132 59.6863 129.314 57 126 57C122.686 57 120 59.6863 120 63V100H132Z" },

{
  key: 9,
  path: "M147 100V59C147 55.6863 144.314 53 141 53C137.686 53 135 55.6863 135 59V100H147Z" },

{
  key: 10,
  path: "M162 100V54C162 50.6863 159.314 48 156 48C152.686 48 150 50.6863 150 54V100H162Z" },

{
  key: 11,
  path: "M177 100V49C177 45.6863 174.314 43 171 43C167.686 43 165 45.6863 165 49V100H177Z" },

{
  key: 12,
  path: "M192 100V44C192 40.6863 189.314 38 186 38C182.686 38 180 40.6863 180 44V100H192Z" },

{
  key: 13,
  path: "M207 100V40C207 36.6863 204.314 34 201 34C197.686 34 195 36.6863 195 40V100H207Z" },

{
  key: 14,
  path: "M222 100V35C222 31.6863 219.314 29 216 29C212.686 29 210 31.6863 210 35V100H222Z" },

{
  key: 15,
  path: "M237 100V30C237 26.6863 234.314 24 231 24C227.686 24 225 26.6863 225 30V100H237Z" },

{
  key: 16,
  path: "M252 100V25C252 21.6863 249.314 19 246 19C242.686 19 240 21.6863 240 25V100H252Z" },

{
  key: 17,
  path: "M267 100V21C267 17.6863 264.314 15 261 15C257.686 15 255 17.6863 255 21V100H267Z" },

{
  key: 18,
  path: "M282 100V16C282 12.6863 279.314 10 276 10C272.686 10 270 12.6863 270 16V100H282Z" },

{
  key: 19,
  path: "M297 99V11C297 7.68629 294.314 5 291 5C287.686 5 285 7.68629 285 11V99C285 99.5523 285.448 100 286 100H296C296.552 100 297 99.5523 297 99Z" }];




function DemoAGraph({ value }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      width: "300",
      height: "100",
      viewBox: "0 0 300 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("g", { id: "background" },
    demoAGraphData.map(({ key, path }) => /*#__PURE__*/
    React.createElement("path", { d: path, fill: "#E8EBF9", key: key }))), /*#__PURE__*/


    React.createElement("g", { id: "foreground", clipPath: "url(#highlight)" },
    demoAGraphData.map(({ key, path }) => /*#__PURE__*/
    React.createElement("path", { d: path, fill: "#424E82", key: key }))), /*#__PURE__*/


    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("clipPath", { id: "highlight" }, /*#__PURE__*/
    React.createElement("rect", { width: value * 3, height: "100", fill: "white" })))));




}

function DemoA() {
  const [value, setValue] = useState(37);

  const handleChange = event => {
    setValue(parseInt(event.target.value, 10));
  };
  return /*#__PURE__*/(
    React.createElement(Card, { title: "Volume" }, /*#__PURE__*/
    React.createElement("div", { className: "px-3" }, /*#__PURE__*/
    React.createElement("div", { style: { width: "300px" } }, /*#__PURE__*/
    React.createElement(DemoAGraph, { value: value }))), /*#__PURE__*/


    React.createElement("div", { className: "relative ", style: { width: "324px", height: "24px" } }, /*#__PURE__*/
    React.createElement("div", {
      className: "absolute rounded-full bg-[#e8ebf9]",
      style: {
        left: "12px",
        right: "12px",
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute rounded-full bg-[#424E82]",
      style: {
        left: "12px",
        width: `${value * 3}px`,
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute grid place-items-center top-0",
      style: {
        width: "24px",
        height: "24px",
        left: `${value * 3}px` } }, /*#__PURE__*/


    React.createElement("div", { className: "bg-white shadow-md rounded-full grid place-items-center w-5 h-5" }, /*#__PURE__*/
    React.createElement("div", {
      className: "rounded-full bg-[#424e82]",
      style: {
        width: "14px",
        height: "14px" } }))), /*#__PURE__*/




    React.createElement("input", {
      type: "range",
      id: "demoAInput",
      name: "demoAInput",
      min: 0,
      max: 100,
      step: 1,
      value: value,
      onChange: handleChange })), /*#__PURE__*/


    React.createElement("div", { className: "flex items-center justify-between px-3 font-semibold h-8" }, /*#__PURE__*/
    React.createElement("div", null, " 0 "), /*#__PURE__*/
    React.createElement("div", null, " ", value, " "), /*#__PURE__*/
    React.createElement("div", null, " 100 "))));



}



function DemoBGraph({ start, diff }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      width: "300",
      height: "100",
      viewBox: "0 0 300 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("g", { id: "background" }, /*#__PURE__*/
    React.createElement("path", {
      d: "M300 100H0C0 100 20.121 79.019 30 68C40.127 56.704 49.453 34.101 60 33C69.551 32.003 80 56 90 56C100 56 110.08 40.931 120 33C130.083 24.939 140.16 7.63699 150 7.99999C160.171 8.37499 169.563 28.791 180 37C189.628 44.573 199.889 55.623 210 56C219.894 56.369 230.323 39.006 240 40C250.371 41.066 260.381 55.514 270 65C280.45 75.306 300 100 300 100Z",
      fill: "#E8EBF9" })), /*#__PURE__*/


    React.createElement("g", { id: "foreground", clipPath: "url(#highlight2)" }, /*#__PURE__*/
    React.createElement("path", {
      d: "M300 100H0C0 100 20.121 79.019 30 68C40.127 56.704 49.453 34.101 60 33C69.551 32.003 80 56 90 56C100 56 110.08 40.931 120 33C130.083 24.939 140.16 7.63699 150 7.99999C160.171 8.37499 169.563 28.791 180 37C189.628 44.573 199.889 55.623 210 56C219.894 56.369 230.323 39.006 240 40C250.371 41.066 260.381 55.514 270 65C280.45 75.306 300 100 300 100Z",
      fill: "#424E82" })), /*#__PURE__*/


    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("clipPath", { id: "highlight2" }, /*#__PURE__*/
    React.createElement("rect", { x: start, width: diff, height: "100", fill: "white" })))));




}

function DemoB() {
  const [valueA, setValueA] = useState(25);
  const [valueB, setValueB] = useState(75);

  const handleChangeA = event => {
    setValueA(parseInt(event.target.value, 10));
  };
  const handleChangeB = event => {
    setValueB(parseInt(event.target.value, 10));
  };

  const start = Math.min(valueA, valueB) * 3;
  const diff = Math.abs(valueA - valueB) * 3;
  return /*#__PURE__*/(
    React.createElement(Card, { title: "Range" }, /*#__PURE__*/
    React.createElement("div", { className: "px-3" }, /*#__PURE__*/
    React.createElement("div", { style: { width: "300px" } }, /*#__PURE__*/
    React.createElement(DemoBGraph, { start: start, diff: diff }))), /*#__PURE__*/


    React.createElement("div", { className: "relative ", style: { width: "324px", height: "24px" } }, /*#__PURE__*/
    React.createElement("div", {
      className: "absolute rounded-full bg-[#e8ebf9]",
      style: {
        left: "12px",
        right: "12px",
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute rounded-full bg-[#424E82]",
      style: {
        left: `${12 + start}px`,
        width: `${diff}px`,
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute grid place-items-center top-0",
      style: {
        width: "24px",
        height: "24px",
        left: `${valueA * 3}px` } }, /*#__PURE__*/


    React.createElement("div", {
      className: "bg-white shadow-md rounded-full grid place-items-center",
      style: {
        width: "20px",
        height: "20px" } }, /*#__PURE__*/


    React.createElement("div", {
      className: "rounded-full",
      style: {
        width: "14px",
        height: "14px",
        background: "#424e82" } }))), /*#__PURE__*/




    React.createElement("div", {
      className: "absolute grid place-items-center",
      style: {
        width: "24px",
        height: "24px",
        top: 0,
        left: `${valueB * 3}px` } }, /*#__PURE__*/


    React.createElement("div", {
      className: "bg-white shadow-md rounded-full grid place-items-center",
      style: {
        width: "20px",
        height: "20px" } }, /*#__PURE__*/


    React.createElement("div", {
      className: "rounded-full",
      style: {
        width: "14px",
        height: "14px",
        background: "#424e82" } }))), /*#__PURE__*/




    React.createElement("input", {
      type: "range",
      id: "demoBInputA",
      name: "demoBInputA",
      min: 0,
      max: 100,
      step: 1,
      value: valueA,
      onChange: handleChangeA }), /*#__PURE__*/

    React.createElement("input", {
      type: "range",
      id: "demoBInputB",
      name: "demoBInputB",
      min: "0",
      max: "100",
      step: "1",
      value: valueB,
      onChange: handleChangeB })), /*#__PURE__*/


    React.createElement("div", { className: "flex items-center justify-between px-3 font-semibold h-8" }, /*#__PURE__*/
    React.createElement("div", null, " 0 "), /*#__PURE__*/
    React.createElement("div", null,
    Math.min(valueA, valueB), " - ", Math.max(valueA, valueB)), /*#__PURE__*/

    React.createElement("div", null, " 100 "))));



}



function Marker({ value }) {
  return /*#__PURE__*/(
    React.createElement("div", {
      className: "absolute grid place-items-center",
      style: {
        width: "24px",
        height: "24px",
        top: "-40px",
        left: `${value * 3}px` } }, /*#__PURE__*/


    React.createElement("div", { className: "relative w-full h-full text-sm" }, /*#__PURE__*/
    React.createElement("div", {
      className: "absolute grid place-items-center text-white font-semibold rounded-md",
      style: {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: "#424e82",
        width: "50px",
        height: "30px" } }, "$",


    value * 10), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute",
      style: {
        left: "50%",
        top: "150%",
        transform: "translate(-50%, -50%)",
        width: "15px",
        height: "30px" } }, /*#__PURE__*/


    React.createElement("svg", {
      className: "w-full",
      viewBox: "0 0 22 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("path", {
      d: "M12.874 26.6557C12.3017 28.5519 9.61685 28.5519 9.04458 26.6557L0.999992 0H20.9186L12.874 26.6557Z",
      fill: "#424e82" }))))));






}

function DemoC() {
  const [valueA, setValueA] = useState(25);
  const [valueB, setValueB] = useState(75);

  const handleChangeA = event => {
    setValueA(parseInt(event.target.value, 10));
  };
  const handleChangeB = event => {
    setValueB(parseInt(event.target.value, 10));
  };

  const start = Math.min(valueA, valueB) * 3;
  const diff = Math.abs(valueA - valueB) * 3;
  return /*#__PURE__*/(
    React.createElement(Card, { title: "Price" }, /*#__PURE__*/
    React.createElement("div", { style: { padding: "0px 12px" } }, /*#__PURE__*/
    React.createElement("div", { style: { width: "300px", height: "100px" } })), /*#__PURE__*/

    React.createElement("div", { className: "relative ", style: { width: "324px", height: "24px" } }, /*#__PURE__*/
    React.createElement("div", {
      className: "absolute rounded-full",
      style: {
        left: "12px",
        right: "12px",
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)",
        background: "#e8ebf9" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute rounded-full",
      style: {
        left: `${12 + start}px`,
        width: `${diff}px`,
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)",
        background: "#424E82" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute grid place-items-center",
      style: {
        width: "24px",
        height: "24px",
        top: 0,
        left: `${valueA * 3}px` } }, /*#__PURE__*/


    React.createElement("div", {
      className: "bg-white shadow-md rounded-full grid place-items-center",
      style: {
        width: "20px",
        height: "20px" } }, /*#__PURE__*/


    React.createElement("div", {
      className: "rounded-full",
      style: {
        width: "14px",
        height: "14px",
        background: "#424e82" } }))), /*#__PURE__*/




    React.createElement(Marker, { value: valueA }), /*#__PURE__*/
    React.createElement(Marker, { value: valueB }), /*#__PURE__*/
    React.createElement("div", {
      className: "absolute grid place-items-center",
      style: {
        width: "24px",
        height: "24px",
        top: 0,
        left: `${valueB * 3}px` } }, /*#__PURE__*/


    React.createElement("div", {
      className: "bg-white shadow-md rounded-full grid place-items-center",
      style: {
        width: "20px",
        height: "20px" } }, /*#__PURE__*/


    React.createElement("div", {
      className: "rounded-full",
      style: {
        width: "14px",
        height: "14px",
        background: "#424e82" } }))), /*#__PURE__*/




    React.createElement("input", {
      type: "range",
      id: "rangeInput",
      name: "rangeInput",
      min: 0,
      max: 100,
      step: 1,
      value: valueA,
      onChange: handleChangeA }), /*#__PURE__*/

    React.createElement("input", {
      type: "range",
      id: "rangeInput",
      name: "rangeInput",
      min: "0",
      max: "100",
      step: "1",
      value: valueB,
      onChange: handleChangeB })), /*#__PURE__*/


    React.createElement("div", { className: "flex items-center justify-between px-3 font-semibold h-8" }, /*#__PURE__*/
    React.createElement("div", null, " $0 "), /*#__PURE__*/

    React.createElement("div", null, " $1000 "))));



}


function TestTube({ value }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      width: "119",
      height: "324",
      viewBox: "0 0 119 324",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30 0C28.3431 0 27 1.34315 27 3V6C27 7.65685 28.3431 9 30 9H34V287C34 300.807 45.1929 312 59 312C72.8071 312 84 300.807 84 287V9H89C90.6569 9 92 7.65685 92 6V3C92 1.34315 90.6569 0 89 0H30Z",
      fill: "#E8EBF9" }), /*#__PURE__*/

    React.createElement("g", { clipPath: "url(#test_tube_clip)" }, /*#__PURE__*/
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30 0C28.3431 0 27 1.34315 27 3V6C27 7.65685 28.3431 9 30 9H34V287C34 300.807 45.1929 312 59 312C72.8071 312 84 300.807 84 287V9H89C90.6569 9 92 7.65685 92 6V3C92 1.34315 90.6569 0 89 0H30Z",
      fill: "#424E82" })), /*#__PURE__*/


    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("clipPath", { id: "test_tube_clip" }, /*#__PURE__*/
    React.createElement("rect", { width: "119", height: "324", fill: "white", y: value * 3 + 12 })))));




}

function DemoD() {
  const [value, setValue] = useState(24);

  const handleChange = event => {
    setValue(parseInt(event.target.value, 10));
  };
  return /*#__PURE__*/(
    React.createElement(Card, { title: "Volume" }, /*#__PURE__*/
    React.createElement("div", { className: "relative ", style: { width: "324px", height: "324px" } }, /*#__PURE__*/
    React.createElement("div", {
      className: "absolute rounded-full",
      style: {
        width: "24px",
        height: "24px",
        left: "90px",
        top: `${12 + value * 3}px `,
        transform: "translate(-50%, -50%)" } }, /*#__PURE__*/


    React.createElement("div", { className: "relative w-full h-full" }, /*#__PURE__*/
    React.createElement("div", {
      className: "absolute grid place-items-center rounded-md text-white font-semibold",
      style: {
        width: "60px",
        height: "24px",
        background: "#424E82",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)" } },


    100 - value, "ml"), /*#__PURE__*/

    React.createElement("div", {
      className: "absolute rounded-md",
      style: {
        width: "20px",
        height: "3px",
        background: "#424E82",
        left: "35px",
        top: "50%",
        transform: "translate(0, -50%)" } }))), /*#__PURE__*/




    React.createElement("div", { className: "absolute", style: { top: 0, left: "100px" } }, /*#__PURE__*/
    React.createElement(TestTube, { value: value })), /*#__PURE__*/

    React.createElement("div", { className: "absolute", style: { top: "150px", left: "-50px" } }, /*#__PURE__*/
    React.createElement("div", { className: "relative", style: { width: "324px" } }, /*#__PURE__*/
    React.createElement("input", {
      className: "rt90",
      type: "range",
      id: "rangeInput",
      name: "rangeInput",
      min: 0,
      max: 100,
      step: 1,
      value: value,
      onChange: handleChange }))))));






}

function DemoE() {
  const [value, setValue] = useState(20);

  const handleChange = event => {
    setValue(parseInt(event.target.value, 10));
  };
  return /*#__PURE__*/(
    React.createElement(Card, { title: "Percentage" }, /*#__PURE__*/
    React.createElement("div", { style: { height: "30px" } }), /*#__PURE__*/
    React.createElement("div", { style: { padding: "0px 12px" } }, /*#__PURE__*/
    React.createElement("div", { className: "relative", style: { width: "300px" } }, /*#__PURE__*/
    React.createElement("svg", {
      width: "300",
      height: "150",
      viewBox: "0 0 300 150",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("path", {
      d: "M12 150C12 131.878 15.5695 113.933 22.5046 97.1897C29.4398 80.4467 39.6048 65.2337 52.4193 52.4193C65.2338 39.6048 80.4468 29.4398 97.1897 22.5046C113.933 15.5695 131.878 12 150 12C168.122 12 186.067 15.5695 202.81 22.5046C219.553 29.4398 234.766 39.6048 247.581 52.4193C260.395 65.2338 270.56 80.4468 277.495 97.1897C284.431 113.933 288 131.878 288 150",
      stroke: "#E8EBF9",
      strokeWidth: "22" }), /*#__PURE__*/

    React.createElement("path", {
      strokeDasharray: "434",
      strokeDashoffset: `${434 - 4.34 * value}`,
      d: "M12 150C12 131.878 15.5695 113.933 22.5046 97.1897C29.4398 80.4467 39.6048 65.2337 52.4193 52.4193C65.2338 39.6048 80.4468 29.4398 97.1897 22.5046C113.933 15.5695 131.878 12 150 12C168.122 12 186.067 15.5695 202.81 22.5046C219.553 29.4398 234.766 39.6048 247.581 52.4193C260.395 65.2338 270.56 80.4468 277.495 97.1897C284.431 113.933 288 131.878 288 150",
      stroke: "#424E82",
      strokeWidth: "22",
      strokeLinecap: "round" })), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute text-4xl font-bold",
      style: {
        left: "50%",
        top: "75%",
        transform: "translate(-50%, -50%)",
        color: "#424E82" } },


    value, "%"))), /*#__PURE__*/



    React.createElement("div", { className: "relative ", style: { width: "324px", height: "24px" } }, /*#__PURE__*/
    React.createElement("div", {
      className: "absolute rounded-full",
      style: {
        left: "12px",
        right: "12px",
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)",
        background: "#e8ebf9" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute rounded-full",
      style: {
        left: "12px",
        width: `${value * 3}px`,
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)",
        background: "#424E82" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute grid place-items-center",
      style: {
        width: "24px",
        height: "24px",
        top: 0,
        left: `${value * 3}px` } }, /*#__PURE__*/


    React.createElement("div", {
      className: "bg-white shadow-md rounded-full grid place-items-center",
      style: {
        width: "20px",
        height: "20px" } }, /*#__PURE__*/


    React.createElement("div", {
      className: "rounded-full",
      style: {
        width: "14px",
        height: "14px",
        background: "#424e82" } }))), /*#__PURE__*/




    React.createElement("input", {
      type: "range",
      id: "rangeInput",
      name: "rangeInput",
      min: 0,
      max: 100,
      step: 1,
      value: value,
      onChange: handleChange })), /*#__PURE__*/


    React.createElement("div", { className: "flex items-center justify-between px-3 font-semibold h-8" }, /*#__PURE__*/
    React.createElement("div", null, " 0 "), /*#__PURE__*/
    React.createElement("div", null, " 100 "))));



}

function deriveData(index, value) {
  const r1 = 130;

  const r2 = 150;
  const r3 = 140;
  const delta = Math.PI / 40;
  const angle = delta * index - Math.PI;

  const ss = Math.sin(angle);
  const cc = Math.cos(angle);

  const rs = index % 5 === 0 ? r1 : r3;

  const x1 = rs * cc;
  const y1 = rs * ss;
  const x2 = r2 * cc;
  const y2 = r2 * ss;

  const color = Math.ceil(value * (41 / 100)) > index ? "#424E82" : "#E8EBF9";
  return { x1, y1, x2, y2, color };
}



function Tick({ index, value }) {
  const { x1, y1, x2, y2, color } = deriveData(index, value);
  return /*#__PURE__*/(
    React.createElement("line", {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      stroke: color,
      strokeWidth: "3",
      strokeLinecap: "round" }));


}

function DemoF() {
  const [value, setValue] = useState(32);

  const handleChange = event => {
    setValue(parseInt(event.target.value, 10));
  };
  return /*#__PURE__*/(
    React.createElement(Card, { title: "Gauge" }, /*#__PURE__*/
    React.createElement("div", { style: { padding: "0px 12px" } }, /*#__PURE__*/
    React.createElement("div", { className: "relative", style: { width: "300px" } }, /*#__PURE__*/
    React.createElement("svg", {
      width: "300",
      height: "180",
      viewBox: "0 0 300 180",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("rect", { width: "300", height: "180", fill: "white" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M152.991 34.67C152.706 30.9785 147.294 30.9785 147.009 34.67L138.696 142.139C136.395 144.776 135 148.225 135 152C135 160.284 141.716 167 150 167C158.284 167 165 160.284 165 152C165 148.225 163.606 144.776 161.304 142.139L152.991 34.67Z",
      fill: "#424E82",
      transform: `rotate(${-90 + 1.8 * value}, 150, 152)` }), /*#__PURE__*/


    React.createElement("g", { transform: "translate(150, 152)" }, /*#__PURE__*/
    React.createElement("circle", { r: "8", fill: "#FFF" }),
    Array(41).
    fill(0).
    map((_, i) => /*#__PURE__*/
    React.createElement(Tick, { key: i, index: i, value: value })))))), /*#__PURE__*/





    React.createElement("div", { className: "relative ", style: { width: "324px", height: "24px" } }, /*#__PURE__*/
    React.createElement("div", {
      className: "absolute rounded-full",
      style: {
        left: "12px",
        right: "12px",
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)",
        background: "#e8ebf9" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute rounded-full",
      style: {
        left: "12px",
        width: `${value * 3}px`,
        height: "8px",
        top: "50%",
        transform: "translate(0, -50%)",
        background: "#424E82" } }), /*#__PURE__*/


    React.createElement("div", {
      className: "absolute grid place-items-center",
      style: {
        width: "24px",
        height: "24px",
        top: 0,
        left: `${value * 3}px` } }, /*#__PURE__*/


    React.createElement("div", {
      className: "bg-white shadow-md rounded-full grid place-items-center",
      style: {
        width: "20px",
        height: "20px" } }, /*#__PURE__*/


    React.createElement("div", {
      className: "rounded-full",
      style: {
        width: "14px",
        height: "14px",
        background: "#424e82" } }))), /*#__PURE__*/




    React.createElement("input", {
      type: "range",
      id: "rangeInput",
      name: "rangeInput",
      min: 0,
      max: 100,
      step: 1,
      value: value,
      onChange: handleChange })), /*#__PURE__*/


    React.createElement("div", { className: "flex items-center justify-between px-3 font-semibold h-8" }, /*#__PURE__*/
    React.createElement("div", null, " 0 "), /*#__PURE__*/
    React.createElement("div", null, " ", value, " "), /*#__PURE__*/

    React.createElement("div", null, " 100 "))));



}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));