export interface ResponseCode<T> {
    code: number;
    msg: string;
    fail: boolean;
    success: boolean;
    multidata: T;
  }


export interface PenddingUrl{
    url: string|undefined;
    f: () => void
}
  