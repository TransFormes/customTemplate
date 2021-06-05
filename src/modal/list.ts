export interface Page{
    pagedata: pageData<list>
}

interface pageData<T> {
    current: number;
    orders: [];
    pages: number;
    searchCount: boolean;
    size: number;
    total: number;
    records: Array<T>;
  }

export interface list{
    id: string
}