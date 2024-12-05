class TaskManeger{
    constructor{}{
        this.task=[];
        this.idcounter=1;
    }
    addtask(title,discription,category,duedate){
        consttask= {
            id;this,idcounter++,
            title,
            discription,
            category,
            duedate:duedate||'no due date',
            isComplete:false
        }
        this.task.push(task);
        console.log('task added:',task);
    }
    updatetask(id,updatefields){
        cost task=this.task.findIndex((task)=>task.id==id);
        if(task){
            Object.assign(task,updatefields);
            console.log('task updated:',task);
        }else{
            console.log('task with ID${id} not found');
        }
    }
    deletetask(id){
        cost task=this.task.findIndex((task)=>task.id==id);
        if(index2!==1){
            const removedtask=this.tasks.splice(index2,1);
            console.log('task deleted:' removedtask[0]);
        }else{
            console.log('task with ID${id} not found');
        }
    }
    toggletaskcomplition(id){
        cost task=this.task.findIndex((task)=>task.id==id);
        if(task){
            task.isComplete=!task.isComplete
            console.log('task complition toggled',task);
        }else{
            console.log('task with ID${id} not found')
        }

    }
    viewtask(){
        console.log("all task");
    }

}