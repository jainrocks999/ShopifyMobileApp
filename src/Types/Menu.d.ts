export interface Menus {
    data: Data
  }
  
  export interface Data {
    menu: Menu
  }
  
  export interface Menu {
    id: string
    handle: string
    title: string
    items: Item[]
  }
  
  export interface Item {
    id: string
    title: string
    resourceId:string
    tags: any[]
    url: string
    type: string
    items: Item2[]
  }
  
  export interface Item2 {
    id: string
    resourceId: string
    title: string
    url: string
  }
  