import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Filme} from './filme.model';

@model()
export class Receita extends Entity {
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
  pais: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @belongsTo(() => Filme)
  filmeId: number;

  constructor(data?: Partial<Receita>) {
    super(data);
  }
}

export interface ReceitaRelations {
  // describe navigational properties here
}

export type ReceitaWithRelations = Receita & ReceitaRelations;
