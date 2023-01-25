export interface User {
    UserName:String
}
export interface Post {
    User:User;
    Title:String;
    Text:String
}