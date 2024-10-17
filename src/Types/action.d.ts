import type {StackScreenProps,StackNavigationProp} from '@react-navigation/stack'
import { RootNavigationParams } from './NavigationProps'
import { DrawerNavigationProp, } from "@react-navigation/drawer";
import { DrawerNavigationPramas } from "../navigation/drawer";
import { Node } from './user';
export interface action{
    type:string,
    prId:string,
    length:number,
    page:string,
    navigation:RootNavigationParams,
    title:string,
    options:string,
    id:string,
    data:string,
    msg:string,
    pId:string,
    token:string,
    op:string,
    check:boolean,
    address:Node,
    verints:[],
    email:string
}   