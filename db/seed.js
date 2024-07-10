const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function main() {
    console.log("Seeding database...")

    //CREATING DEVELOPERS
    console.log("Creating developers...")
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

    //CREATING GAMES
    console.log("Creating games...")
    const ACOd = await prisma.game.create({
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

    const UFC4 = await prisma.game.create({
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

    const ACOr = await prisma.game.create({
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

    //CREATING USERS
    console.log("Creating users...")
    let trent = undefined;
    try{
    trent = await prisma.user.create({
        data: {
            firstName: "Trent",
            lastName: "Carpenter",
            username: "tcar7699",
            password: await bcrypt.hash("Tiger4062", saltRounds), 
            email: "tcarpenter7699@gmail.com"
        }
    });
    }catch(err) {
    throw err;
    }
   

    //CREATING REVIEWS
    console.log("Creating reviews...")
    await prisma.review.create({
        data: {
            title: "One of my favs in the series!",
            content: "Love this game. Spent so much time just exploring and the only game in the series I made an effort to 100% complete.",
            rating: 5,
            user_id: trent.id,
            game_id: ACOr.id,
        }
    });

    await prisma.review.create({
        data: {
            title: "So much fun!",
            content: "Absolutely love this game. So much fun to play as your favorite fighters and play against friends.",
            rating: 5,
            user_id: trent.id,
            game_id: UFC4.id,
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