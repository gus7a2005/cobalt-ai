export type AIAction = 
    | {
        type: 'CREATE_LINKEDIN_POST';
        payload: {
            content: string;
        }; 
    }
    | {
        type: 'SEARCH_PROFILE';
        payload: {
            name: string;
        }
    }