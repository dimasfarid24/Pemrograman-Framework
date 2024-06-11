const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTransactions = async (req, res, next) => {
    try {
        const result = await prisma.transaction.findMany();
        return res.json({
            status: true,
            message: 'Data Transaksi Berhasil diambil',
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const getTransactionById = async (req, res, next) => {
    try {
        const result = await prisma.transaction.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json({
            status: true,
            message: 'Data Transaksi Berhasil diambil berdasarkan Id',
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const createTransaction = async (req, res, next) => {
    const { kode_transaksi, customerId, productId, quantity } = req.body;

    try {
        const transaction = await prisma.$transaction(async (prisma) => {
            // Kurangi stok produk
            const product = await prisma.product.update({
                where: { id: productId },
                data: {
                    stok: { decrement: quantity }
                }
            });

            // Buat transaksi baru
            const result = await prisma.transaction.create({
                data: {
                    kode_transaksi,
                    customerId,
                    productId,
                    quantity,
                    total_pembelian: product.harga * quantity
                }
            });

            return result;
        });

        return res.json({
            status: true,
            message: 'Transaksi Berhasil ditambahkan',
            data: transaction
        });
    } catch (error) {
        next(error);
    }
}

const deleteTransaction = async (req, res, next) => {
    const { id } = req.params;

    try {
        const transaction = await prisma.$transaction(async (prisma) => {
            // Ambil detail transaksi yang akan dihapus
            const trans = await prisma.transaction.findFirst({
                where: { id: parseInt(id) }
            });

            // Kembalikan stok produk
            await prisma.product.update({
                where: { id: trans.productId },
                data: {
                    stok: { increment: trans.quantity }
                }
            });

            // Hapus transaksi
            const result = await prisma.transaction.delete({
                where: { id: parseInt(id) }
            });

            return result;
        });

        return res.json({
            status: true,
            message: 'Transaksi Berhasil dihapus',
            data: transaction
        });
    } catch (error) {
        next(error);
    }
}

module.exports = { getTransactions, getTransactionById, createTransaction, deleteTransaction };