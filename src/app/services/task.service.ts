import { Injectable, isDevMode } from '@angular/core';
import { Task } from '../Models/Task'
import { TASKS } from 'src/app/Data/mock-task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { API_VER_URL, DEFAULT_HTTP_OPTIONS, MOCK_BASE_URL, TASKS_URL } from 'src/Utilities/constants';
import { ITaskService } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements ITaskService {
  private apiUrl = MOCK_BASE_URL + API_VER_URL + TASKS_URL

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task) : Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, DEFAULT_HTTP_OPTIONS)
  }

  updateTask(task: Task) : Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task, DEFAULT_HTTP_OPTIONS)
  }

  deleteTask(task: Task) : Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`);
  }
}