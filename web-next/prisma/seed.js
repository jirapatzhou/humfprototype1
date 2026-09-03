const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const branches = [
    { slug: 'thonglor', name: 'HUMF Thonglor', lat: 13.73, lng: 100.5808, capacityPct: 24, openUntil: '22:00' },
    { slug: 'ari', name: 'HUMF Ari', lat: 13.7799, lng: 100.5461, capacityPct: 58, openUntil: '23:00' },
    { slug: 'siam', name: 'HUMF Siam', lat: 13.7466, lng: 100.5347, capacityPct: 96, openUntil: '22:00' },
    { slug: 'onnut', name: 'HUMF On Nut', lat: 13.705, lng: 100.6013, capacityPct: 31, openUntil: '22:00' },
  ];

  for (const b of branches) {
    await prisma.branch.upsert({ where: { slug: b.slug }, update: b, create: b });
  }

  const plans = [
    {
      key: 'starter',
      name: 'Starter Package',
      priceThb: 349,
      features: [
        'Access every HUMF branch',
        '7/25/30-day streak rewards',
        'HUMF Card NFC entry',
      ],
    },
    {
      key: 'elite',
      name: 'Elite Package',
      priceThb: 690,
      features: [
        'Everything in Starter',
        'Skip-the-queue access',
        'Free parking',
        'Full facility + towel service',
      ],
    },
  ];

  for (const p of plans) {
    await prisma.plan.upsert({
      where: { key: p.key },
      update: { name: p.name, priceThb: p.priceThb, features: p.features },
      create: p,
    });
  }

  console.log('Seeded branches and plans.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
