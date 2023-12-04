export interface IPublication {
    id?:          number;
    type:        PublcationTypes;
    title:       string;
    author:      string;
    authorTwo?:   string;
    authorThree?: string;
    authorFour?:  string;
    publisher:   string;
    isbn?:        string;
    issn?:        string;
    year:        number;
    vol:         string;
};

export enum PublcationTypes {
    articulo = 1,
    publicacion = 2,
    revista = 3
};