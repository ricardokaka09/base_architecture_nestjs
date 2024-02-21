import { Module } from '@nestjs/common'
import { DataServicesModule } from './services/data-services/data-services.module'
import { BookUseCasesModule } from './use-cases/book/book-use-cases.module'
import { AuthorUseCaseModule } from './use-cases/author/author-use-cases.module'
import { GenreUseCasesModule } from './use-cases/genre/genre-use-cases.module'
import { AppController, AuthorController, BookController, GenreController } from './controllers'

@Module({
  imports: [DataServicesModule, BookUseCasesModule, AuthorUseCaseModule, GenreUseCasesModule],
  controllers: [AppController, BookController, AuthorController, GenreController],
})
export class AppModule {}
