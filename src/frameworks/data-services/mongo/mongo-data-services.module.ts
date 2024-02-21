import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Author, AuthorSchema, Book, BookSchema, Genre, GenreSchema } from './models'
import { IDataServices } from '../../../core'
import { MongoDataService } from './mongo-data-services.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Genre.name, schema: GenreSchema },
      { name: Book.name, schema: BookSchema },
    ]),
    MongooseModule.forRoot('mongodb://root:123@127.0.0.1:27017', { dbName: 'library' }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataService,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
