import type { PhoneDetail, PhonesResponse } from '../models';
import { apiClient } from './apiClient';

const DEFAULT_LIMIT = 20;
const DEFAULT_OFFSET = 0;

interface GetPhonesOptions {
  search?: string;
  limit: number;
  offset: number;
}

export const getPhones = async (
  options: GetPhonesOptions = {
    limit: DEFAULT_LIMIT,
    offset: DEFAULT_OFFSET
  }
): Promise<PhonesResponse> => {
  const params: Record<string, string | number> = {
    limit: options.limit,
    offset: options.offset
  };

  if (options.search) {
    params.search = options.search;
  }

  const response = await apiClient.get<PhonesResponse>('/products', {
    params
  });
  return response.data;
};

export const getPhoneById = async (id: string): Promise<PhoneDetail> => {
  const response = await apiClient.get<PhoneDetail>(`/products/${id}`);
  return response.data;
};
