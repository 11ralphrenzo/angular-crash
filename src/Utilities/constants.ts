import { HttpHeaders } from "@angular/common/http"

export const MOCK_BASE_URL : string = "https://63d929f174f386d4efe5e913.mockapi.io"

export const API_VER_URL : string = "/api/v1"

export const TASKS_URL : string = "/tasks"

export const DEFAULT_HTTP_OPTIONS = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json'
    })
}