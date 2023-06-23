const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CategoryController {
  static async listPage(req, res) {
    const result = await prisma.book.findMany({
      include: {
        category: true,
      },
    });
    res.render("pages/create/list", { categories: result });
    console.log(result);
  }

  static async createPage(req, res) {
    res.render("pages/create/create");
  }

  static async store(req, res) {
    await prisma.category.create({
      data: {
        nama: req.body.name,
      },
    });
    res.redirect("category");
  }

  static async editPage(req, res) {
    const result = await prisma.category.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.render("pages/create/edit", { category: result });
  }

  static async update(req, res) {
    try {
      await prisma.category.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name: req.body.name,
        },
      });

      res.redirect("/category");
    } catch (err) {
      if (err.code === "P2002") {
        req.flash("error", "A category with this name is already in use");
      }
      res.redirect(`/category/${req.params.id}/edit`);
    }
  }

  static async delete(req, res) {
    const result = await prisma.category.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.redirect("/category");
  }
}
module.exports = CategoryController;
