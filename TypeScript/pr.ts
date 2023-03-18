
const helloWorld = (greeting: 'hello') => console.log(greeting);

let st = 'sstt'

console.log(st);




let onlyNumber: number = 44 

function qwe () : void {

}

let arr: number[] = [1,2,3];

let arr1: Array<number> = [1,2,3];

let arr2: [number,string] = [1, 'qwe'];

let arr3: [any,any] = [false, 2]

let arr4: Array<any> = ["srt", true]

enum Direactions {
    Up,
    Down,
    Left = 6,
    Right
}

console.log(Direactions[7]);
 

// function with error
const msg = 'hello';

const error = (msg: string) : never => {
   throw new Error(msg)
} 

//function with infinity repeat

const infiniteLoop = () : never =>{
    while(true){

    }
}

const create = (o: object | null) : void => {};

type Name = string;

let id: Name;

id = '42';
//id = 34 error because of impossible type\


enum  links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.vom/'
}

console.log(links.youtube);

let liks;
(function(liks) {
liks['y'] = 'yyyy'

})(liks || ( liks ={}));



var Directions;
(function (Directions) {
    Directions[Directions['Up'] = 0] = 'Up'
    Directions[Directions['Down'] = 1] = 'Down'
    Directions[Directions['Left'] = 2] = 'Left'
    Directions[Directions['Right'] = 3] = 'Right'
})(Directions || (Directions = {}))


const createPassword = (name:string, age:number) => `${name}${age}`

console.log(createPassword('Make', 22));


type Person = {name: string, age: number, nickName: string };

type User = Person & {rights: string}

let user: Person = {
    name: 'Mark',
    age: 2,
    nickName: 'Mark was a good'
};

let admin: Person | User = {
    name: 'Igor',
    age: 34,
    nickName: 'Standing over the devil',
    rights: 'not available '
}

let noone: Person & {getPass:() => string} = {
    name: 'Someone',
    age: 20,
    nickName: 'no[o]ne',
    getPass:() => "qwe"
}

