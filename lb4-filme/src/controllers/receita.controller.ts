import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Receita} from '../models';
import {ReceitaRepository} from '../repositories';

export class ReceitaController {
  constructor(
    @repository(ReceitaRepository)
    public receitaRepository : ReceitaRepository,
  ) {}

  @post('/receitas')
  @response(200, {
    description: 'Receita model instance',
    content: {'application/json': {schema: getModelSchemaRef(Receita)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receita, {
            title: 'NewReceita',
            exclude: ['id'],
          }),
        },
      },
    })
    receita: Omit<Receita, 'id'>,
  ): Promise<Receita> {
    return this.receitaRepository.create(receita);
  }

  @get('/receitas/count')
  @response(200, {
    description: 'Receita model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Receita) where?: Where<Receita>,
  ): Promise<Count> {
    return this.receitaRepository.count(where);
  }

  @get('/receitas')
  @response(200, {
    description: 'Array of Receita model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Receita, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Receita) filter?: Filter<Receita>,
  ): Promise<Receita[]> {
    return this.receitaRepository.find(filter);
  }

  @patch('/receitas')
  @response(200, {
    description: 'Receita PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receita, {partial: true}),
        },
      },
    })
    receita: Receita,
    @param.where(Receita) where?: Where<Receita>,
  ): Promise<Count> {
    return this.receitaRepository.updateAll(receita, where);
  }

  @get('/receitas/{id}')
  @response(200, {
    description: 'Receita model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Receita, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Receita, {exclude: 'where'}) filter?: FilterExcludingWhere<Receita>
  ): Promise<Receita> {
    return this.receitaRepository.findById(id, filter);
  }

  @patch('/receitas/{id}')
  @response(204, {
    description: 'Receita PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receita, {partial: true}),
        },
      },
    })
    receita: Receita,
  ): Promise<void> {
    await this.receitaRepository.updateById(id, receita);
  }

  @put('/receitas/{id}')
  @response(204, {
    description: 'Receita PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() receita: Receita,
  ): Promise<void> {
    await this.receitaRepository.replaceById(id, receita);
  }

  @del('/receitas/{id}')
  @response(204, {
    description: 'Receita DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.receitaRepository.deleteById(id);
  }
}
