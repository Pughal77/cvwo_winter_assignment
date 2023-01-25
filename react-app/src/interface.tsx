export interface user {
    username:String
}
export interface post {
    user:user;
    title:String;
    text:String
}