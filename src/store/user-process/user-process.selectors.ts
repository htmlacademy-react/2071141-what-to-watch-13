import { NameSpace } from '../../const';
import { TAppState, TUserProcess } from '../../types/state';

export const getUser = (
  state: Pick<TAppState, NameSpace.User>
): TUserProcess | null => state[NameSpace.User];
