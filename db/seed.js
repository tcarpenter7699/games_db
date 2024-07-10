const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    console.log("Seeding database...")

    const Ubisoft = await prisma.developer.create({
        data: {
            name: "Ubisoft",
            logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfALO0gMdRv0SE-fz5x-OjHeEXi9UQHZGYag&s"
        }
    });

    const EA = await prisma.developer.create({
        data: {
            name: "Electronic Arts",
            logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQg9ImlbxXGgl4_V7UQU-j2Q1Z53-GLlANA&s"
        }
    });

    await prisma.game.create({
        data: {
            title: "Assassin's Creed Odyssey",
            developer_id: Ubisoft.id,
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmgNuTz4S-RKG8_UDrR8YlK370g6oOi59iw&s",
            category: "RPG",
            year: "2018",
            platform: "Microsoft Windows, PS4, and Xbox One",
            trailer: "https://www.youtube.com/watch?v=s_SJZSAtLBA",
        }
    });

    await prisma.game.create({
        data: {
            title: "EA Sports UFC 4",
            developer_id: EA.id,
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIcvFq_Hbr9RUovZJfjMO62LVfsb_Ni9omw&s",
            category: "Sports",
            year: "2020",
            platform: "PS4 and Xbox One",
            trailer: "https://www.youtube.com/watch?v=GjugTk9ovcI",
        }
    });

    await prisma.game.create({
        data: {
            title: "Assassin's Creed Origins",
            developer_id: Ubisoft.id,
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFGBAV9haQClm48vNMBkCfetOQphAiuRKSg&s",
            category: "RPG",
            year: "2017",
            platform: "Microsoft Windows, PS4, and Xbox One",
            trailer: "https://www.youtube.com/watch?v=cUuKIpCM2o0",
        }
    });
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })