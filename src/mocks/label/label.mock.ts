import { faker } from '@faker-js/faker';

import { LabelAtom } from '@/stores/Label/label.atom';

const createLabel = (): LabelAtom => ({
  id: faker.datatype.uuid(),
  title: faker.name.jobTitle(),
  description: faker.name.jobDescriptor(),
  color: faker.color.rgb({ format: 'hex', casing: 'lower' }),
  bgColor: faker.color.rgb({ format: 'hex', casing: 'lower' }),
});

export const createRandomMilestones = (n: number) => Array.from({ length: n }, () => createLabel());