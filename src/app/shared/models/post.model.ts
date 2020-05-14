import { PostContent } from './post-content.model';

export class Post {
    id: number;
    content: PostContent;
    /*post_author?: number; //These fields don't match the response object
    post_date?: string;
    //post_content?: string;
    post_title?: string;
    post_status?: string; //should probably be made into an enum
    post_modified?: string;
    menu_order?: number;
    post_type?: string;*/ //enum
}