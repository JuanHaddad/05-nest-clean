/* eslint-disable prettier/prettier */

import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService 
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy // duas funçoes nativas do nest
    {   // extendendo prisma client para o construtor ficar de boa
    constructor(){
        super({
            log: ['query'],
        })
    }
    
    onModuleInit() {
        return this.$connect()
    }
    
    onModuleDestroy() {
        return this.$disconnect()
    }
  
}
