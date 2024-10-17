export interface PageDetail {
    data: Data
  }
  
  export interface Data {
    page: Page
  }
  
  export interface Page {
    title: string
    body: string
  }