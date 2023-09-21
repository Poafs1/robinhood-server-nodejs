import { createParamDecorator } from '@nestjs/common';

/**
 * Fake User decorator
 * Normally, we will get user from context & bearer token
 */
export const User = createParamDecorator((_data) => {
  return {
    id: '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b',
    username: 'โรบินฮู้ด',
    email: 'user1@robinhood.co.th',
  };
});
