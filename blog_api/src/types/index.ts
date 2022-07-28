export type UserObject = {
    id: number,
    username: string,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    role: string,
}

export type createUserType = {
    username: string,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    role: string,
}

export type updateUserType = {
    username?: string,
    email?: string,
    first_name?: string,
    last_name?: string,
    role?: string,
}

export type BlogObject = {
    id: number,
    slug: string,
    author_id: number,
    title: string,
    content: string,
    is_published: number
    published_date?: string | null,
    created_date: string,
}

export type CreateBlogType = {
    slug: string,
    author_id: number,
    title: string,
    content: string,
}


export type BlogCommentType = {
    id: number,
    author_id: number,
    blog_id : number,
    comment: number,
    created_date: Date
}


export interface UserModelInterface {
    fetchUsers(): Promise<UserObject[]>;
    fetchUser(id: number): Promise<UserObject>;
    createUser(user: createUserType): Promise<UserObject>;
}

export interface BlogModelInterface {
    fetchBlogs(): Promise<BlogObject[]>;
    fetchBlog(slug:string): Promise<BlogObject>;
    fetchBlogByID(id:number): Promise<BlogObject>;
    createBlog(blog:CreateBlogType): Promise<BlogObject>;
    deleteBlog(id:number): Promise<boolean>;
    publishBlog(id:number): Promise<boolean>;
    unpublishBlog(id:number): Promise<boolean>;

}


