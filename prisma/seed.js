const { PrismaClient } = require("@prisma/client");
const { generateHash } = require("../lib/bcrypt");

const prisma = new PrismaClient();

const categories = [
  { name: "Harem" },
  { name: "Psikologi" },
  { name: "Dewasa" },
];

const books = [
  {
    name: "kuzu no honkai",
    merk: "manga",
    qty: 20,
    available: true,
    desc: "buku anime yang menceritakan proses kedewasaan",
    price: 45000,
    img: "https://cdn.myanimelist.net/images/anime/5/83937.jpg",
    categoryId: 1,
  },

  {
    name: "Redo Healer",
    merk: "manga",
    qty: 30,
    available: true,
    desc: "buku anime yang menceritakan proses menyembuhkan",
    price: 45000,
    img: "https://i.postimg.cc/90X3TDRP/Kaifuku-Jutsushi-no-Yarinaoshi-Keyaru.jpg",
    categoryId: 2,
  },

  {
    name: "Mushoku Tensei",
    merk: "manga",
    qty: 30,
    available: true,
    desc: "buku anime yang menceritakan cara berkeluarga",
    price: 45000,
    img: "https://i.postimg.cc/90X3TDRP/Kaifuku-Jutsushi-no-Yarinaoshi-Keyaru.jpg",
    categoryId: 3,
  },
];

async function main() {
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
  for (const book of books) {
    await prisma.book.create({
      data: book,
    });
  }

  await prisma.user.create({
    data: {
      username: "admin",
      password: await generateHash("admin"),
    },
  });
  console.log("Seed data success");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
