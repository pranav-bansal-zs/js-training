
// Relay ans
const team1=fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
    if(res){
        return "team1 won"
    }
})

const team2=fetch('https://jsonplaceholder.typicode.com/posts/2').then((res)=>{
    if(res){
        return "team2 won"
    }
})

const team3=fetch('https://jsonplaceholder.typicode.com/posts/3').then((res)=>{
    if(res){
        return "team3 won"
    }
})

const team4=fetch('https://jsonplaceholder.typicode.com/posts/4').then((res)=>{
    if(res){
        return "team4 won"
    }
})

const race=Promise.race([team1,team2,team3,team4]).then((res)=>{
    console.log(res);
});

// Question on reduce
const arr=[10,20,30];
const arr1=arr.reduce((acc,value,id)=>{
    acc[value]=id+1;
    return acc;
},{})
console.log(arr1);

//Question-1
function promise1(){
        return new Promise((res)=>{
            setTimeout(()=>{
             res("success for promise1");
        })
},2000)
}
promise1().then((res)=>{
    console.log(res);
})

//Question-2
const promise2_1=new Promise((res)=>{
        setTimeout(()=>{
         res(1);
    })
},1000)

const promise2_2=new Promise((res)=>{
        setTimeout(()=>{
         res("success for promise2_2");
    })
},2000)

const promise2=Promise.all([promise2_1,promise2_2]).then((res)=>{
    console.log(res);
});

//Question-3
const promise3_1=new Promise((res)=>{
    res("success for promise3_1");
})

const promise3_2=new Promise((res,rej)=>{
    rej("failed for promise3_2");
})

const promise3_3=new Promise((res)=>{
    setTimeout(()=>{
     res("success for promise3_3");
})
},3000)

const promise3=Promise.allSettled([promise3_1,promise3_2,promise3_3]).then((res)=>{
    console.log(res);
})

//Question4 
const promise4_1=new Promise((res)=>{
    setTimeout(()=>{
        res("success for promise4_1");
    },2000);
})
const promise4_2=new Promise((res)=>{
    setTimeout(()=>{
        res("success for promise4_2");
    },3000)
})

const promise4=Promise.race([promise4_1,promise4_2]).then((res)=>{
    console.log(res);
})

// //Question5

// const promise5_1=new Promise((res,rej)=>{
//     res("success for promise5_1");
// })
// const promise5_2=new Promise((res,rej)=>{
//     res("success for promise5_2");
// })
// const promise5_3=new Promise((res,rej)=>{
//     rej("failed for promise5_3");
// })
// const promise5=Promise.all([promise5_1,promise5_2,promise5_3]).then((result)=>{
//     console.log(result);
// })

//Question6

async function ques6(){
    const data1=await fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>res.json());
    const data2=await fetch('https://jsonplaceholder.typicode.com/posts/2').then((res)=>res.json());
    const data3=await fetch('https://jsonplaceholder.typicode.com/posts/3').then((res)=>res.json());

    return{data1,data2,data3}
}
ques6().then((data)=>{
    console.log(data);
});

//Question 7
let x = 0;

async function async1() {
  await new Promise((res) => setTimeout(res, 200));
  x += 1; 
}
async function async2() {
    await new Promise((res) => setTimeout(res, 100));
    x += 2; 
  }

async function race1() {
  await Promise.all([async1(), async2()]);
  
  console.log("Final value of shared variable:", x);
}

race1();


//Question8
const data4=fetch('https://jsonplaceholder.typicode.com/posts/4').then((res)=>res.json());
const data5=fetch('https://jsonplaceholder.typicode.com/posts/5').then((res)=>res.json());
const data6=fetch('https://jsonplaceholder.typicode.com/posts/6').then((res)=>res.json());
const promise8_1=Promise.all([data4,data5,data6]).then((res)=>{console.log(res)});
console.log("Promises all",promise8_1);
const promise8_2=Promise.race([data4,data5,data6]).then((res)=>{console.log(res)});
console.log("Fastest Response:",promise8_2);

//Question9
