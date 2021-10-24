import createEntityApi from './createEntityApi';
import { UserDto } from './dto/user-dto';

const userApi = createEntityApi<UserDto>(`/api/users`);

export default userApi;
