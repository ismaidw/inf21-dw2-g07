import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Receita,
  Filme,
} from '../models';
import {ReceitaRepository} from '../repositories';

export class ReceitaFilmeController {
  constructor(
    @repository(ReceitaRepository)
    public receitaRepository: ReceitaRepository,
  ) { }

  @get('/receitas/{id}/filme', {
    responses: {
      '200': {
        description: 'Filme belonging to Receita',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Filme)},
          },
        },
      },
    },
  })
  async getFilme(
    @param.path.number('id') id: typeof Receita.prototype.id,
  ): Promise<Filme> {
    return this.receitaRepository.filme(id);
  }
}
