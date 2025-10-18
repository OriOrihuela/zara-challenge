import type { PhoneDetail, PhonesResponse } from '../models';
import { apiClient } from './apiClient';

export const getPhones = async (
  search: string = ''
): Promise<PhonesResponse> => {
  const params: Record<string, string | number> = {
    limit: 20,
    offset: 0
  };

  if (search) {
    params.search = search;
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
