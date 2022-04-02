import { Menu } from './menu';

export interface ResponseV1 {
    _id?: number;
    dayReference?: string;
    lastId?: number;
    menu?: Menu;
    rdCod?: string;
    uploadedIn?: string;
}
