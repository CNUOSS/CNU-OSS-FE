import { MethodType } from '@hooks/useMutation';

export const getSubscribedSWAPI = `/subscriptions/search?`;

export const createSubscribedSWAPI: { method: MethodType; url: string } = { method: 'POST', url: '/subscriptions' };
