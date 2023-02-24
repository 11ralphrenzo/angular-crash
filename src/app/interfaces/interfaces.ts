import { Observable } from "rxjs";
import { Task } from "../Models/Task";

export interface ITaskService {
    getTasks() : Observable<Task[]>  
    addTask(task : Task) : Observable<Task> 
    updateTask(task : Task) : Observable<Task> 
    deleteTask(task : Task) : Observable<Task>  
}