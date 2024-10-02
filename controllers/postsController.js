const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const index = async (req, res, next) => {
    let { published, word } = req.query;

    if (published === 'true') {
        published = true;
    } else if (published === 'false') {
        published = false;
    } else {
        published = undefined;
    }

    const where = {
        published,
        title: { contains: word },
        content: { contains: word }
    }

    try {
        const posts = await prisma.post.findMany({ where });

        const count = parseInt(posts.length);
        if (count === 0) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "No posts found",
                count
            })
        }

        res.status(200).json({
            status: 200,
            success: true,
            data: posts,
        });
    } catch (err) {
        next(err);
    }
};

const store = async (req, res, next) => {

};

const show = async (req, res, next) => {

};

const update = async (req, res, next) => {

};

const destroy = async (req, res, next) => {

};

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}