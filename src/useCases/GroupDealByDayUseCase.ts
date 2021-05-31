/* eslint-disable no-underscore-dangle */
import Deal from '../framework/mongoose/schema/Deal';
import Group from '../framework/mongoose/schema/Group';

type IResponse = {
  _id: string;
  total: number;
};

class GroupDealByDayUseCase {
  async execute() {
    const groupByDay = await Deal.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
          total: {
            $sum: '$value',
          },
        },
      },
    ]);

    groupByDay.map(async (dealsByDay: IResponse) => {
      const date = dealsByDay._id;

      const dateAlreadyRegistered = await Group.findOne({ date });

      if (dateAlreadyRegistered) {
        return;
      }

      await Group.create({ date, total: dealsByDay.total });
    });

    return groupByDay;
  }
}

export default GroupDealByDayUseCase;
