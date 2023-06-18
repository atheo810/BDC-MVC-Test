const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookController {
  static async listpage(req, res) {
    const result = await prisma.book.findMany({});
    res.render("pages/list", { books: result });
  }

  static async detailpage(req, res) {
    const result = await prisma.book.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.render("pages/detail", { book: result });
  }

  static async createPage(req, res) {
    res.render("pages/add");
  }

  static async store(req, res) {
    await prisma.book.create({
      data: {
        name: req.body.name,
        merk: req.body.merk,
        qty: Number(req.body.qty),
        available: req.body.available === "true" ? true : false,
        price: Number(req.body.price),
        img: req.body.img,
        desc: req.body.description,
      },
    });
    res.redirect("/book");
  }

  static async editPage(req, res) {
    const result = await prisma.book.findUnique({
      where: {
        id: Number(req.body.id),
      },
    });
    res.render("pages/edit", { book: result });
  }

  static async update(req, res) {
    await prisma.book.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        category: req.body.category,
        qty: Number(req.body.qty),
        available: req.body.available === "true" ? true : false,
        price: Number(req.body.price),
        img: req.body.img,
        desc: req.body.description,
      },
    });

    res.redirect("/book");
  }

  static async deletePage(req, res) {
    await prisma.book.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.redirect("/book");
  }

  static async aboutPage(req, res) {
    res.render("pages/about");
  }
}

module.exports = BookController;
