import {Entity, hasMany, model, property} from '@loopback/repository';
import {Receita} from './receita.model';

@model()
export class Filme extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    required: true,
  })
  release_year: number;

  @property({
    type: 'string',
  })
  language?: string;

  @property({
    type: 'number',
  })
  lenght?: number;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;

  @hasMany(() => Receita)
  receitas: Receita[];

  constructor(data?: Partial<Filme>) {
    super(data);
  }
}

export interface FilmeRelations {
  // describe navigational properties here
}

export type FilmeWithRelations = Filme & FilmeRelations;
