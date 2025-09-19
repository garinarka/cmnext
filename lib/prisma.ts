import { PrismaClient } from '@/lib/generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

// Gunakan global agar tidak bikin banyak instance di dev mode
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
