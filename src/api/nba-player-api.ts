import createEntityApi from './createEntityApi';
import { NbaPlayerDto } from './dto/nba-player-dto';

const nbaPlayersApi = createEntityApi<NbaPlayerDto>(`/api/players`);

export default nbaPlayersApi;
