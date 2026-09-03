'use server';

import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { authOptions } from '../../lib/auth';
import { prisma } from '../../lib/prisma';

export async function selectPlan(formData) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  const planKey = formData.get('planKey');
  const plan = await prisma.plan.findUnique({ where: { key: planKey } });
  if (!plan) return;

  const existing = await prisma.membership.findFirst({
    where: { userId: session.user.id, status: 'active' },
  });

  if (existing) {
    await prisma.membership.update({
      where: { id: existing.id },
      data: { planId: plan.id },
    });
  } else {
    await prisma.membership.create({
      data: { userId: session.user.id, planId: plan.id },
    });
  }

  revalidatePath('/account');
  redirect('/account');
}
