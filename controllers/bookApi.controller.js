const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookApiController {
  static async getBook(req, res) {
    const result = await prisma.book.findMany({});
    res.status(200).json(result);
  }

  static async getDetailBook(req, res) {
    const result = await prisma.book.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (result === null) {
      res.status(404).json({ message: "Data not found" });
    } else {
      res.status(200).json(result);
    }
  }

  static async addBook(req, res) {
    const result = await prisma.book.create({
      data: {
        name: req.body.name,
        category: req.body.category,
        qty: req.body.qty,
        available: req.body.available,
        desc: req.body.desc,
        price: req.body.price,
        img: req.body.img,
      },
    });
    res.status(201).json(result);
  }

  static async editBook(req, res){
    const result = await prisma.book.update({
        where:{
            id: Number(req.params.id)
        },
        data:{
            name: req.body.name,
            qty: req.body.qty,
            available: req.body.available,
            price: req.body.price,
            img: req.body.img,y,
        }
    });
    res.status(200).json(result);
  }

  static async deleteBook(req, res){
    const result = await prisma.book.delete({
        where:{
            id: Number(req.params.id)
        }
    });
    res.status(201).json(result);
  }
}

module.exports = BookApiController