export interface Sidebar{
    id:number;
    name:string;
    email:string;
    className:string;
}
export const sidebarNav:Sidebar[]=[
    {id:1,name:"Profile",email:"test@gmail.com",className:"ri-user-2-line"},
    {id:2,name:"Chats",email:"test@gmail.com",className:"ri-message-3-line"},
    {id:3,name:"Groups",email:"test@gmail.com",className:"ri-group-line"},
    {id:4,name:"Contacts",email:"test@gmail.com",className:"ri-contacts-line"},
    {id:5,name:"Settings",email:"test@gmail.com",className:"ri-settings-2-line"},
];