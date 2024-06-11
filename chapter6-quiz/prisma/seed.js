// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Menambahkan customer baru
  const customer1 = await prisma.customer.create({
    data: {
      nama: 'Budi',
      alamat: 'jl. A',
      jenis_kelamin: 'L',
      umur: 20,
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      nama: 'Andi',
      alamat: 'Jl. B',
      jenis_kelamin: 'L',
      umur: 21,
    },
  });
  
  const customer3 = await prisma.customer.create({
    data: {
      nama: 'Caca',
      alamat: 'Jl. C',
      jenis_kelamin: 'P',
      umur: 22,
    },
  });

  const customer4 = await prisma.customer.create({
    data: {
      nama: 'Dedi',
      alamat: 'Jl. D',
      jenis_kelamin: 'L',
      umur: 23,
    },
  });

  const customer5 = await prisma.customer.create({
    data: {
      nama: 'Eko',
      alamat: 'Jl. E',
      jenis_kelamin: 'L',
      umur: 24,
    },
  });

  const customer6 = await prisma.customer.create({
    data: {
      nama: 'Fajar',
      alamat: 'Jl. F',
      jenis_kelamin: 'L',
      umur: 25,
    },
  });

  const customer7 = await prisma.customer.create({
    data: {
      nama: 'Gita',
      alamat: 'Jl. G',
      jenis_kelamin: 'P',
      umur: 26,
    },
  });

  // Menambahkan product baru
  const product1 = await prisma.product.create({
    data: {
      kode_produk: 1,
      nama: 'Baju',
      harga: 50000,
      stok: 10
    },
  });

  const product2 = await prisma.product.create({
    data: {
      kode_produk: 2,
      nama: 'Celana',
      harga: 50000,
      stok: 19
    },
  });

  const product3 = await prisma.product.create({
    data: {
      kode_produk: 3,
      nama: 'Sepatu',
      harga: 50000,
      stok: 76
    },
  });

  const product4 = await prisma.product.create({
    data: {
      kode_produk: 4,
      nama: 'Topi',
      harga: 50000,
      stok: 8
    },
  });

  const product5 = await prisma.product.create({
    data: {
      kode_produk: 5,
      nama: 'Kacamata',
      harga: 50000,
      stok: 5
    },
  });

  const product6 = await prisma.product.create({
    data: {
      kode_produk: 6,
      nama: 'Jam',
      harga: 50000,
      stok: 3
    },
  });

  const product7 = await prisma.product.create({
    data: {
      kode_produk: 7,
      nama: 'Tas',
      harga: 50000,
      stok: 14
    },
  });

  const product8 = await prisma.product.create({
    data: {
      kode_produk: 8,
      nama: 'Dompet',
      harga: 50000,
      stok: 7
    },
  });

  const product9 = await prisma.product.create({
    data: {
      kode_produk: 9,
      nama: 'Koper',
      harga: 50000,
      stok: 2
    },
  });

  const product10 = await prisma.product.create({
    data: {
      kode_produk: 10,
      nama: 'Kemeja',
      harga: 50000,
      stok: 1
    },
  });


  // Menambahkan transaction baru
  const transaction1 = await prisma.transaction.create({
    data: {
      kode_transaksi: 1
      ,
      nama_customer: customer1.nama,
      total_pembelian: product1.harga + product2.harga ,
      detail_product: {
        items: [
            {name: product1.nama, quantity: 1},
            {name: product2.nama, quantity: 1},
        ]
      },
      customerId: customer1.id,
      productId: product1.id,
    },
  });

  const transaction2 = await prisma.transaction.create({
    data: {
      kode_transaksi: 2
      ,
      nama_customer: customer2.nama,
      total_pembelian: product1.harga + product2.harga + product3.harga + product4.harga,
      detail_product: {
        items: [
            {name: product1.nama, quantity: 1},
            {name: product2.nama, quantity: 1},
            {name: product3.nama, quantity: 1},
            {name: product4.nama, quantity: 1},
        ]
      },
      customerId: customer2.id,
      productId: product1.id,
    },
  });

  const transaction3 = await prisma.transaction.create({
    data: {
      kode_transaksi: 3
      ,
      nama_customer: customer3.nama,
      total_pembelian: product1.harga + product2.harga + product3.harga + product4.harga + product5.harga + product6.harga,
      detail_product: {
        items: [
            {name: product1.nama, quantity: 1},
            {name: product2.nama, quantity: 1},
            {name: product3.nama, quantity: 1},
            {name: product4.nama, quantity: 1},
            {name: product5.nama, quantity: 1},
            {name: product6.nama, quantity: 1},
        ]
      },
      customerId: customer2.id,
      productId: product1.id,
    },
  });
  
    const transaction4 = await prisma.transaction.create({
      data: {
        kode_transaksi: 4
        ,
        nama_customer: customer4.nama,
        total_pembelian: product1.harga + product2.harga + product3.harga + product4.harga + product5.harga + product6.harga + product7.harga + product8.harga,
        detail_product: {
          items: [
              {name: product1.nama, quantity: 1},
              {name: product2.nama, quantity: 1},
              {name: product3.nama, quantity: 1},
              {name: product4.nama, quantity: 1},
              {name: product5.nama, quantity: 1},
              {name: product6.nama, quantity: 1},
              {name: product7.nama, quantity: 1},
              {name: product8.nama, quantity: 1},
          ]
        },
        customerId: customer4.id,
        productId: product1.id,
      },
    });
  
    const transaction5 = await prisma.transaction.create({
      data: {
        kode_transaksi: 5
        ,
        nama_customer: customer5.nama,
        total_pembelian: product1.harga + product2.harga + product3.harga + product4.harga + product5.harga + product6.harga + product7.harga + product8.harga + product9.harga + product10.harga,
        detail_product: {
          items: [
              {name: product1.nama, quantity: 1},
              {name: product2.nama, quantity: 1},
              {name: product3.nama, quantity: 1},
              {name: product4.nama, quantity: 1},
              {name: product5.nama, quantity: 1},
              {name: product6.nama, quantity: 1},
              {name: product7.nama, quantity: 1},
          ]
        },
        customerId: customer5.id,
        productId: product1.id,
      },
    });
  
    const transaction6 = await prisma.transaction.create({
      data: {
        kode_transaksi: 6
        ,
        nama_customer: customer6.nama,
        total_pembelian: product1.harga + product2.harga + product3.harga + product4.harga + product5.harga + product6.harga + product7.harga + product8.harga,
        detail_product: {
          items: [
              {name: product1.nama, quantity: 1},
              {name: product2.nama, quantity: 1},
              {name: product3.nama, quantity: 1},
              {name: product4.nama, quantity: 1},
              {name: product5.nama, quantity: 1},
              {name: product6.nama, quantity: 1},
              {name: product7.nama, quantity: 1},
              {name: product8.nama, quantity: 1},
          ]
        },
        customerId: customer6.id,
        productId: product1.id,
      },
    });
  
    const transaction7 = await prisma.transaction.create({
      data: {
        kode_transaksi: 7
        ,
        nama_customer: customer7.nama,
        total_pembelian: product1.harga + product2.harga + product3.harga + product4.harga + product5.harga + product6.harga + product7.harga + product8.harga + product9.harga,
        detail_product: {
          items: [
              {name: product1.nama, quantity: 1},
              {name: product2.nama, quantity: 1},
              {name: product3.nama, quantity: 1},
              {name: product4.nama, quantity: 1},
              {name: product5.nama, quantity: 1},
              {name: product6.nama, quantity: 1},
              {name: product7.nama, quantity: 1},
              {name: product8.nama, quantity: 1},
              {name: product9.nama, quantity: 1},
          ]
        },
        customerId: customer7.id,
        productId: product1.id,
      },
    });
  
  console.log({ customer1, customer2, customer3, customer4, customer5, customer6, customer7, product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, transaction1, transaction2, transaction3, transaction4, transaction5, transaction6, transaction7 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
