import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfigartion } from './common/config/env.config';
import { JoiValidationSchema } from './common/config/joi.validation';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfigartion],
      validationSchema: JoiValidationSchema,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot(process.env.MONGODB || 'mongodb://localhost:27017/pokedex',{
      dbName:'pokemonsdb'
    }),

    PokemonModule,

    CommonModule,

    SeedModule
  ],
})
export class AppModule {

  constructor() {}

}
