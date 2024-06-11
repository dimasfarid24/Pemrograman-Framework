const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProduct = async (req, res, next) => {
    try {
        const result = await prisma.product.findMany();
        return res.json({
            status: true,
            message: 'Data Produk Behasil diambil',
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const getProductById = async (req, res, next) => {
    try {
        const result = await prisma.product.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json({
            status: true,
            message: 'Data Produk Behasil diambil berdasarkan Id',
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const createProduct = async (req, res, next) => {
    try {
        const result = await prisma.product.create({
            data : {
                kode_produk: req.body.kode_produk,
                nama: req.body.nama,
                deskripsi: req.body.deskripsi,
                harga: req.body.harga,
                stok: req.body.stok
            }
        });
        return res.json({
            status: true,
            message: 'Produk Berhasil ditambahkan',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const result = await prisma.product.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                kode_produk: req.body.kode_produk,
                nama: req.body.nama,
                deskripsi: req.body.deskripsi,
                harga: req.body.harga,
                stok: req.body.stok
            }
        });
        return res.json({
            status: true,
            message: 'Produk berhasil di update',
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const destroyProduct = async (req, res, next) => {
    try {
        const result = await prisma.product.delete({
            where: {
                id: parseInt(req.params.id)
            },
        });
        return res.json({
            status: true,
            message: 'Produk Berhasil di Delete.',
            data: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {createProduct, getProduct, getProductById, updateProduct, destroyProduct}