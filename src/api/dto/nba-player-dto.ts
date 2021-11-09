import { EntityParams } from '../createEntityApi';

export interface NbaPlayerDto {
  id: number;
  team_id: number;
  first_name: string;
  last_name: string;
  position: string;
  height_feet: number | null;
  height_inches: number | null;
  weight_pounds: number | null;
}

export type NbaPlayerDtoParams = EntityParams<NbaPlayerDto>;
