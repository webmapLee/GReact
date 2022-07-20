
const task = (deadline)=>{
    const count = Math.floor(Math.random() * 5000000000)
    let j = 1;
    for(let i = 1;i<count;i++){
        j += i
    }
    console.log(deadline.timeRemaining(),j)
    requestIdleCallback(task)
}

requestIdleCallback(task)

