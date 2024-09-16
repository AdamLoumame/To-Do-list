let submitButton = document.querySelector("#submitButton")
let tasklist = document.querySelector(".tasklist")


//////////////////////// get back the items from the storage and place it in the list of task !! ////////////////////////////////

for (let i=0 ; i<localStorage.length;i++){
    // creating the task
    let task = document.createElement("div")
    task.innerHTML = `<p>${localStorage.key(i)}</p>
                      <button class="Delete">Delete</button>`
    task.className="task"// add class name of task so it can be styled in css
    task.id = localStorage.key(i) // add an id of the same value of p to the task
    tasklist.prepend(task) // add the task to the tasklist 
    
    // add the function button delete
    document.querySelector(".Delete").addEventListener("click",function(){
        this.parentElement.remove()
        localStorage.removeItem(this.parentElement.id)
    })
}

////////////////////////////////////////////////////////////////////////////////

submitButton.addEventListener("click",function (e){
    e.preventDefault() // not do the task of submitting
    let inputFieldValue = document.querySelector(".inputField").value.replace(/\s+/g, ' ').trim() // get the text from the input


    // checking if the input name is already in tasklist using the id of task that holds its inputFieldValue
    let isnotin=true
    if (Array.from(tasklist.children).length !== 0){
        for (let i of Array.from(tasklist.children)){
            if (i.id === inputFieldValue){
                isnotin = false
            }
        }
    }

    if(inputFieldValue !== "" && isnotin){
        // creating the task
        let task = document.createElement("div") // creating the task div
        task.innerHTML = `<p>${inputFieldValue}</p><button class="Delete">Delete</button>` // adding the task inputted and del bt
        task.className="task"// add class name of task so it can be styled in css
        task.id = inputFieldValue // add an id of the same value of p to the task
        tasklist.prepend(task) // add the task to the tasklist 
        localStorage.setItem(task.id,task.id)

        // add the function button delete
        document.querySelector(".Delete").addEventListener("click",function(){
            this.parentElement.remove()
            localStorage.removeItem(this.parentElement.id)
        })
    }        
})