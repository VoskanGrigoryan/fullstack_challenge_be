// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const project1 = await prisma.projects.upsert({
//     where: { title: 'Full Stack Application' },
//     update: {},
//     create: {
//       title: 'Full Stack Application',
//       description:
//         'Finish a full stack project with CRUD operations, JWT and a fully working frontend',
//       creator: 'voskan grigoryan',
//     },
//   });

//   const project2 = await prisma.projects.upsert({
//     where: { title: 'Automated testing in UI5' },
//     update: {},
//     create: {
//       title: 'Automated testing in UI5',
//       description:
//         'Learn the ins and outs of how to apply automated testing to UI5 applications utilizing WebDriver.io with WDI5 and OPA5 under the hood',
//       creator: 'voskan grigoryan',
//     },
//   });

//   // const task1 = await prisma.tasks.upsert({
//   //   where: { title: 'Full Stack Application' },
//   //   update: {},
//   //   create: {
//   //     title: 'Full Stack Application',
//   //     description:
//   //       'Finish a full stack project with CRUD operations, JWT and a fully working frontend',
//   //     creator: 'voskan grigoryan',
//   //   },
//   // });
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
