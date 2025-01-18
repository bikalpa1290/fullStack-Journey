let tasks=[];
// const newTask=tasks


function addTask(taskNumber,name,iscomplete){
    tasks.push({taskNumber,name,iscomplete})
    console.log(`your task is added`);
}
addTask(1,"complete java")
addTask(2,"complete maths")
addTask(3,"workout")
function showTask(){
    for (let task of tasks){
        console.log(`${task.taskNumber}.your task is to --${task.name}--status (${task.iscomplete? "Complete":"pending"})`);
    }
}
// showTask()

function markComp(taskNumber){
    const task=tasks.find(t=>t.taskNumber===taskNumber);
    if (task && !task.iscomplete){
        task.iscomplete=true;
        console.log(`your task  to - ${task.name} - which is task no ${task.taskNumber} is completed`);
    }else if(task && task.iscomplete){
        console.log("your task is already completed");
    }else{
        console.log(`you do not have a task assigned at no ${taskNumber}`);
    }
}

const deletTask=(taskNumber)=>{
    const nameTask=tasks.find(t=>t.taskNumber===taskNumber);
    const task=tasks.findIndex(t=>t.taskNumber===taskNumber);
    if (task!==-1){
        console.log(`your task to complete-${nameTask.name} at task no ${nameTask.taskNumber} has been removed`);
        removedtask=tasks.splice(task,1)
    }else{
        console.log(` your task at ${task.taskNumber} has been removed already or you have never added!!`);
    }
}
// deletTask(1) 
// deletTask(1)
// showTask()
// console.log(tasks);
// showTask()
// markComp(2)
// showTask()
// console.log(tasks);\
showTask()
console.log( tasks.findIndex(task => task.taskNumber === 1));