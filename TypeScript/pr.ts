
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

class Us {
    
    private nickName: string = '47'
    static secret = 12345;
    constructor(public name: string, public age: number){}

    getPass():string{
        return `${this.name}${Us.secret}`;
    }
}

const s = new Us('Mitchel', 35)

console.log(s.getPass());


class NewUser extends Us {
    name: string = 'New';

    constructor(age: number) {
        super(NewUser.name, age);
    }
}

const max = new Us('Max', 21)
const newuser = new NewUser(31)
console.log(newuser);

abstract class Admin {
    constructor(public name: string, public age: number) {}
    greet():void {
        console.log(this.name); 
    }

    abstract getPass(): string;
}
//can't create copy because of abstract class

class Yaphets extends Admin {
    name: string = 'Yaphets'
    constructor(age: number) {
        super(Yaphets.name, age);
    }

    getPass():string {
        return `${this.age}${this.name}`;
    }

}

const yaphets = new Yaphets(30)
console.log(yaphets.getPass());

namespace Utils {
    export const SECRET: string = '123321';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEMpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass('Mark', 23);
console.log(myPass);


const isSecret = Utils.isEMpty(Utils.SECRET);
console.log(isSecret);

//console.log(PI); gives an error because was called without export 

// import{ PI} from "./pr";

// const sss = PI

// console.log(sss);

interface UserI {
    readonly name?: string,
    age?: number,
}

const jane: UserI = {
    name: 'Jane',
}

const met: UserI = {
    age: 23
} 

//jane.name = 'qwe' property only for read 

 interface UserIn {
    name: string,
    age: number,
    [propName: string]: any;
 }

 const perUser: UserIn = {
    name: 'Ricardo',
    age: 20,
    nickName: 'Symbol of America',
    justTest: 'test'
 }

 console.log(perUser);

 interface Pass extends UserIn{
    getPass(): string,
 }
 
 class Yuser implements Pass{
    name: string = 'Yuser';
    age: number = 12;
    nickName: string = "Cruser";

    getPass() {
        return `${this.name}${this.age}`;
    }
 }
 const yuser = new Yuser()
 console.log(yuser, yuser.getPass());
 

 const getter = <T>(data: T): T => data;

 console.log(getter('qwe').length);

//  console.log(getter<number>(10).length);
 
class UserGen <T, K> {
    constructor(public name: T, public age: K) {}

    public gerPass():string {
        return `${this.name}${this.age}`
    }
}

const strings = new UserGen('Kline', '24');
console.log(strings, strings.gerPass());

const numbers = new UserGen(123,321);
console.log(numbers, numbers.gerPass());

const mix = new UserGen('Kline', 21)
console.log(mix, mix.gerPass());
