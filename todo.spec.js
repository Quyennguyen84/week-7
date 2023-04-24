const taskService = new taskService();
const todo = new todo(taskService);
describe('Todo App'), () => {
    it(' should intialize some HTML'), ()=>{
        spyOn(todo, 'init');
        todo.init();
        expect(todo.init).toHaveBeenCalled();
    });
    it('should add a task', async() => {
        const newTask = {
            task_id: 0,
            task_name: 'Third task',
            status 'pending',
            create_date: '2023-04-14 22:50:32',
        };
        const addTaskServiceSpy = spyOn(taskService, 'addTask');
        expect(todo.tasks.length).toBe(0);
        await todo.addTask(newTask);
        expect(addTaskServiceSpy).toHaveBeenCalled();
        expect(todo.tasks.length).toBe(1);

    });
    it ('should delete a task', async() =>{
        const existingTask = {
            task_id: 0,
            task_name: 'Third task',
            status 'pending',
            create_date: '2023-04-14 22:50:32',
        }; 
    const deleteTaskServiceSpy = spyOn(taskService, 'deleteTask');
    expect(todo.tasks.length).toBe(1);
    await todo.deleteTask(existingTask.task_id);
    expect(deleteTaskServiceSpy).toHaveBeenCalled();
    expect(todo.tasks.length).toBe(0);

    });
    xit ('update', () =>

    });
});
