import labelMockHandler from './label/label.mockHandler';
import milestoneMockHandler from './milestone/milestone.mockHandler';
import userMockHandler from './user/user.mockHandler';

const handlers = [...userMockHandler, ...labelMockHandler, ...milestoneMockHandler];

export default handlers;
