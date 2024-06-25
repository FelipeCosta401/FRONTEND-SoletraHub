
export interface UserAuth {
    logged: boolean,
    token: string | null,
    info: {
        avatar?: any;
        name: string,
        nickname: string,
        email: string,
        
    }
}