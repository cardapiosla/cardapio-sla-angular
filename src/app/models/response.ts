export class Response<T> {
    hasException: boolean | undefined;
    exceptionMessage: string | undefined;
    content: T | undefined;
    success: boolean | undefined;
}
