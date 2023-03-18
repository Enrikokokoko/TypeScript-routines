
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

type Users = Person & {rights: string}

let user: Person = {
    name: 'Mark',
    age: 2,
    nickName: 'Mark was a good'
};

let admin: Person | Users = {
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


class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string){
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

const smth = new User('Maks', 20, 'Vodila');

console.log(smth);


class Userr {
    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ){}
}

const res = new Userr('Tor', 2000, 'God of thunder', 123)

console.log(res);


class Userprivate {

    private age: number = 20;
    constructor(public name:string){}
 
    //method call
    setAge(age: number){ 
        this.age = age;
    }
    //property call
    set myAge(age: number) {
        this.age = age
    }
}

const tt = new Userprivate('qwewqe')

tt.setAge(24)
console.log(tt);

tt.myAge = 26
console.log(tt);
