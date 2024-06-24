import { get } from './axios';
function login() {
    return get("/api/platform/api/public/canteen/tree")
}

export {
    login
}