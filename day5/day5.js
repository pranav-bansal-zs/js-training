class Counter {
    constructor() {
        this.count =0;
        this.increment=this.increment.bind(this)
    }

    increment() {
        this.count++;
        console.log(this.count);
    }

    start() {
        setInterval(this.increment(), 1000);
    }
}

const counter = new Counter();
counter.start();

function randomdate(){
    const ryear = Math.floor(Math.random()*(2026-2020))+2020;
    const rmonth = Math.floor(Math.random()*12);
    const rday = Math.floor(Math.random()*28)+1;
    return new Date(ryear,rmonth,rday);
}
  const arr=[];
for(let i=0;i<10;i++){
    arr[i]=randomdate();
}
  console.log(arr);

const ascarr=[...arr].sort((prevdate,nextdate)=>prevdate-nextdate);
const descarr=[...arr].sort((prevdate,nextdate)=>nextdate-prevdate);
console.log(ascarr);
console.log(descarr);


const table1 = document.getElementById('tabledate');
for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    const data1 = document.createElement('td');
    const data2 = document.createElement('td');
    const data3 = document.createElement('td');
    data1.textContent=arr[i].toDateString();
    data2.textContent = ascarr[i].toDateString()
    data3.textContent = descarr[i].toDateString();
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    table1.appendChild(row);
}