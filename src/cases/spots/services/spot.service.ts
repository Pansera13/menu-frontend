import { api } from '@/lib/axios';
import type { SpotDTO } from '../dtos/spot.dot';

    const ENDPOINT = '/spots';

    export const SpotService = {
        async listALL(): Promise<SpotDTO[]> {
            const result = await api.get<SpotDTO[]>(ENDPOINT);
            return result.data;
        },

        async findOne(id: string): Promise<SpotDTO> {
            const result = await api.get<SpotDTO>(`${ENDPOINT}/${id}`);
            return result.data;
        },
    };
