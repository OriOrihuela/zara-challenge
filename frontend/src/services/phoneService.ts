import type { PhoneDetail, PhonesResponse } from '../models';
import { apiClient } from './apiClient';

export const getPhones = async (
  options: {
    search?: string;
    limit?: number;
    offset?: number;
  } = {}
): Promise<PhonesResponse> => {
  const params: Record<string, string | number> = {};

  if (options.search) {
    params.search = options.search;
  }
  if (options.limit) {
    params.limit = options.limit;
  }
  if (options.offset) {
    params.offset = options.offset;
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
