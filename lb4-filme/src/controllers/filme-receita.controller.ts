import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  Filme,
  Receita
} from '../models';
import {FilmeRepository} from '../repositories';

export class FilmeReceitaController {
  constructor(
    @repository(FilmeRepository) protected filmeRepository: FilmeRepository,
  ) { }

  @get('/filmes/{id}/receitas', {
    responses: {
      '200': {
        description: 'Array of Filme has many Receita',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Receita)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Receita>,
  ): Promise<Receita[]> {
    return this.filmeRepository.receitas(id).find(filter);
  }

  @post('/filmes/{id}/receitas', {
    responses: {
      '200': {
        description: 'Filme model instance',
        content: {'application/json': {schema: getModelSchemaRef(Receita)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Filme.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receita, {
            title: 'NewReceitaInFilme',
            exclude: ['id'],
            optional: ['filmeId']
          }),
        },
      },
    }) receita: Omit<Receita, 'id'>,
  ): Promise<Receita> {
    return this.filmeRepository.receitas(id).create(receita);
  }

  @patch('/filmes/{id}/receitas', {
    responses: {
      '200': {
        description: 'Filme.Receita PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receita, {partial: true}),
        },
      },
    })
    receita: Partial<Receita>,
    @param.query.object('where', getWhereSchemaFor(Receita)) where?: Where<Receita>,
  ): Promise<Count> {
    return this.filmeRepository.receitas(id).patch(receita, where);
  }

  @del('/filmes/{id}/receitas', {
    responses: {
      '200': {
        description: 'Filme.Receita DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Receita)) where?: Where<Receita>,
  ): Promise<Count> {
    return this.filmeRepository.receitas(id).delete(where);
  }
}
