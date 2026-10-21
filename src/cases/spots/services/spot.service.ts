import { api } from '../../../services/api';

type SpotDTO = Record<string, unknown>;

    const ENDPOINT = '/api/spots';

    export const SpotService = {
        async listALL(): Promise<SpotDTO> {
            const result = await api.get<SpotDTO>(ENDPOINT);
            return result.data;
        },

        async findOne(id: string): Promise<SpotDTO> {
            const result = await api.get<SpotDTO>(`${ENDPOINT}/${id}`);
            return result.data;
        },
    };