export interface Response<T> {
    success: boolean
    errorMessage: any
    data: T[]
}