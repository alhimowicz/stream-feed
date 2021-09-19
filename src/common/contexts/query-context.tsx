import React, { FC, ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface IQueryProvider { children?: ReactNode; }


export const QueryProvider: FC<IQueryProvider> = ({ children }): ReactElement => {
    const client = new QueryClient();
    
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
};
