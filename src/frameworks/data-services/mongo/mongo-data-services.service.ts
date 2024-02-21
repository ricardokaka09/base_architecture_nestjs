import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { Author, IDataServices } from '../../../core'
import { MongoGenericRepository } from './mongo-generic-repository'
import { AuthorDocument, Book, BookDocument, Genre, GenreDocument } from './models'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class MongoDataService implements IDataServices, OnApplicationBootstrap {
  authors: MongoGenericRepository<Author>
  books: MongoGenericRepository<Book>
  genres: MongoGenericRepository<Genre>

  constructor(
    @InjectModel(Author.name)
    private authorRepository: Model<AuthorDocument>,
    @InjectModel(Book.name)
    private bookRepository: Model<BookDocument>,
    @InjectModel(Genre.name)
    private genreRepository: Model<GenreDocument>,
  ) {}

  onApplicationBootstrap() {
    this.authors = new MongoGenericRepository<Author>(this.authorRepository)
    this.books = new MongoGenericRepository<Book>(this.bookRepository, ['book', 'genre'])
    this.genres = new MongoGenericRepository<Genre>(this.genreRepository)
  }
}
