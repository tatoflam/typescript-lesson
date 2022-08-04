import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NoSubstitutionTemplateLiteral, TypeOfExpression } from 'typescript';

// data.json is from https://jsonplaceholder.typicode.com/users
import Data from "./data.json"
import TestComponent from './TestComponent';

type USERS = typeof Data;

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username: string = "User1";
let dummyNum = 2;
let bool: boolean = true;

let array1 = [true, false, true]
let array2 = [0,1, "Hello"]

interface NAME {
  first: string;
  last?: string | null;
}

let nameObj: NAME = {first:"Yamada", }
let nameObj2: NAME = {first:"Yamada", last:"Taro"}
let nameObj3: NAME = {first:"Yamada", last:null}

const func1 = (x: number, y:number): number => {
  return x + y;
}

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

// Inetsection Types
const userA = {
  age: 30,
  city: "Fukuoka",
  password: "aaa",
  username: "tt"
}

// Union Types
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

// Literal types
let gafa: "Google" | "amazon" | "facebook" | "apple";
// gafa = "Tesla"
gafa = "Google"
let memory: 256 | 512;
memory  = 256;

// typeof (type)
let msg: string = "Hi";
let msg2: typeof msg;

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"}

// keyof (element)
type KEYS = {
  primary: string;
  secondary: string;
};
let key : keyof KEYS;
key = "primary"

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
}
let keySports: keyof typeof SPORTS;
keySports = "soccer"

// enum (automatically create enum member)
// mitigate bug by enum and raise maintenance ability. 
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Linux
}
const PC2: PC = {
  id: 2,
  OSType: OS.Windows
}

// compatibility of type
// level of abstraction: string > "test"(literal)
const comp1 = "test";
let comp2:string = comp1;

let comp3:string = "test3";
// let comp4: "test" = comp3;  // this line fails. 

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

// Belows don't work
// funcComp1 = funcComp2
// funcComp2 = funcComp1

// Generics
interface GEN<T>{
  // This is template; item alias type is not defined
  item: T;
}
const gen0: GEN<string> = {item: "hello"};
// const gen1: GEN = {item: "hello"}
const gen2: GEN<number> = {item: 100};

// as default type of generics are specified by interface, caller side can use it without parameter type
interface GEN1<T= string> {
  item: T;
}
const gen1: GEN1 = {item: "hello"};

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<number> = {item: 0}

function funcGen<T>(props: T) {
  return {item: props}
}
const gen5 = funcGen<string>("test")
const gen6 = funcGen<number>(3)
const gen7 = funcGen<number | null>(null)

function funcGen1<T extends string | null>(props: T){
  return {value: props};
}
const gen8 = funcGen1("hello");
// const gen9 = funcGen1(1234);

interface Props {
  price: number;
}

// function with Generics
function funcGen3<T extends Props>(props: T){
  return {value: props.price}
}
const gen10 = funcGen3({price: 10});

// arrow function with Generics
const funcGen4 = <T extends Props>(props: T) => {
  return {value: props.price}
}

// React Hooks Props type
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="Hello from App"/>
      </header>
    </div>
  );
}

export default App;
