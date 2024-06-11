
export interface UserAuth {
    logged: boolean,
    token: string | null,
    info: {
        name: string,
        nickname: string,
        email: string,
        
    }
}