const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const data = [
    {
        name: "kuzu no honkai",
        category: "anime",
        qty: 20,
        available : true,
        desc: "buku anime yang menceritakan proses kedewasaan",
        price: 45000,
        img: "https://cdn.myanimelist.net/images/anime/5/83937.jpg"

    },
    
    {
        name: "Redo Healer",
        category: "anime",
        qty: 30,
        available : true,
        desc: "buku anime yang menceritakan proses menyembuhkan",
        price: 45000,
        img: "https://i.postimg.cc/90X3TDRP/Kaifuku-Jutsushi-no-Yarinaoshi-Keyaru.jpg"

    },

    {
        name: "Mushoku Tensei",
        category: "anime",
        qty: 30,
        available : true,
        desc: "buku anime yang menceritakan cara berkeluarga",
        price: 45000,
        img: "https://i.postimg.cc/90X3TDRP/Kaifuku-Jutsushi-no-Yarinaoshi-Keyaru.jpg"

    }
];