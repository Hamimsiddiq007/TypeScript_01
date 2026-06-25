let response: any = "42"

let numericLength:number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name": "The art of war"}'

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log(error)
}

const data: unknown = "Hello World";
const strData: string = data as string;

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log("Redirect to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirect to user dashboard");
        return
    }
    role;
}