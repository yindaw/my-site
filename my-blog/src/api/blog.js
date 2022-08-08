import request from "./request";
/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        page,
        limit,
        categoryid
    });
}

/** 
 * 获取博客分类
 */
export async function getBlogCategories() {
    return await request.get("/api/blogType");
}

/**
 * 获取单个博客
 * @param {*} id 
 * @returns 
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {*} commentInfo 
 * @returns 
 */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo);
}


export async function getComments(blogId, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogId,
            page,
            limit
        }
    });
}