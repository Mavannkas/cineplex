export interface PaginationParams {
    page?: number;
    limit?: number;
}

export const isPaginationParams = (obj: any): obj is PaginationParams => {
    return typeof obj === 'object' && (obj.page || obj.limit);
}

export const queryWithPagination = (query: string, params: (string | number)[], pagination?: PaginationParams): [string, (string | number)[]] => {
    const { page = 0, limit = 10 } = pagination ?? {};
    const offset = (page) * limit;
    return [`${query} LIMIT ?, ?`, [...params, +offset, +limit]];
}