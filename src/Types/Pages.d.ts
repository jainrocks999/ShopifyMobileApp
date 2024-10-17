export interface Page {
    data: Data
  }
  
  export interface Data {
    pages: Pages
  }
  
  export interface Pages {
    edges: Edge[]
  }
  
  export interface Edge {
    cursor: string
    node: Node
  }
  
  export interface Node {
    body: string
    bodySummary: string
    createdAt: string
    handle: string
    id: string
    onlineStoreUrl: string
    seo: Seo
    title: string
    updatedAt: string
  }
  
  export interface Seo {
    description: any
    title: any
  }
  