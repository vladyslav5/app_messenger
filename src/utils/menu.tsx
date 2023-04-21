import {menuType} from "../types/MenuType";
import {
    ALL_USERS_ROUTE,
    CHATS_ROUTE,
    CONTACTS_ROUTE,
    CREATE_CHAT_ROUTE,
    MY_CHATS_ROUTE,
    PROFILE_ROUTE
} from "./consts";

export const menu: menuType[] = [
    {name: "створити чати", path: CREATE_CHAT_ROUTE},
    {name: "профіль", path: PROFILE_ROUTE},
    {name: "контакти", path: CONTACTS_ROUTE},
    {name: "моі чати", path: MY_CHATS_ROUTE},
    {name: "всі чати", path: CHATS_ROUTE},
    {name: "найти користувача", path: ALL_USERS_ROUTE},]