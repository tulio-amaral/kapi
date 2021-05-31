import { ICreateDealsDTO } from 'dtos/ICreateDealsDTO';

import Deal from '../framework/mongoose/schema/Deal';

class CreateDealsUseCase {
  async execute({
    sequence,
    name,
    value,
    date,
  }: ICreateDealsDTO): Promise<void> {
    await Deal.create({ sequence, name, value, date });
  }
}

export default CreateDealsUseCase;
