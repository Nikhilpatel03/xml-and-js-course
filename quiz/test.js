// new Promise((resolve,reject)=> {
//     resolve('Success!')
// })
// .then(()=>{
//     throw Error('Oh no!')
// })
// .catch(error=>{
//     return "actually, that worked"
// })
// .catch(error=>{
//     console.log(error.message)
// })

// Promise.resolve('Success')
// .then(data=> {
//     return data.toUpperCase()})
// .then(data=>{
//     console.log(data)
// })

// const main = () =>{
//     const data = await loadData();
//     console.log(data.length);
// };
// const length = main();
// console.log(length);

// // #6
// const timeoutFunction = (ms) => {
//     return new Promise((resolve) =>{
//         setTimeout(resolve,ms);
//     });
// };

// const intervalFunction = (ms) => {
//     return new Promise((resolve) =>{
//         setInterval(resolve,ms);
//     });
// };

// var milliseconds = 2000;
// timeoutFunction(milliseconds).then(finish).then(()=>console.log('timeout'));
// intervalFunction(milliseconds).then(finish).then(()=>console.log('interval'));
	
// function finish() {
// 	console.log('Finish');
// };

//qtn7
// const func1 = new Promise((resolve)=>
// {
//     resolve(`func1`)
// });
// const func2 = new Promise((resolve)=>
// {
//     resolve(`func2`)
// });
// const func3 = new Promise((resolve)=>
// {
//     resolve(`func3`)
// });

// const main = () => {
//     return Promise.all([func1,func2,func3]).then((messages)=>console.log(messages));
// }
// main();


// const func1 = new Promise((resolve) => resolve(`func1`));
// const func2 = new Promise((resolve) => resolve(`func2`));
// const func3 = new Promise((resolve) => resolve(`func3`));

// const main = () => {
// // call func1, func2, and func3. wait until ALL of them are resolve and console.log resolved result
// return Promise.all([func1,func2,func3]).then((messages)=>console.log(messages));
// }
// main();

//qtn8
const users = [
    {username: `user1`,email:`user1@email.com`},
    {username: `user2`,email:`user2@email.com`}
];

const getUser = (username) => {
    return new Promise((resolve)=>{
    // get user data by username from users array
       const user=users.filter(value=>{
             return value.username === username;
    });
    resolve(user);
}).then(data=>console.log(data));
}

const getUsers = (a,b) => {

    if (a !== undefined){
        const user=users.filter(value=>{
            return value.username === a;
   });
   console.log(user);
    }
    if (b !== undefined){
        const user=users.filter(value=>{
            return value.username === b;
   });
   console.log(user);
    }
}

const main = () => {
const userNames=[`user1`,`user2`];
const user = 'user1'
console.log('Using getUsers function:');
getUsers.apply(this,userNames);

console.log('Using getUser function:');
getUser(user);
};
main()

// qtn9
// const test = (arg1) =>{
//     return new Promise((resolve,reject)=>
//     {
//         if(typeof arg1 === "undefined"){
//             reject("No arguements passed!");
//         }
//         else{
//             resolve(arg1);
//         }
//     }).then(data=>{
//          console.log(data)
//     }).catch(error=>{
//         console.log(error)
//     })
// }
// test(1);  //passing arguement
// test();   //not passing arguement

    