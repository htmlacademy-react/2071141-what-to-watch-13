import { NameSpace } from '../../const';
import { TAppState, TUserProcess } from '../../types/state';

export const getUser = (
  state: Pick<TAppState, NameSpace.User>
): TUserProcess['user'] | null => state[NameSpace.User].user;

export const getAuthorizationStatus = (
  state: Pick<TAppState, NameSpace.User>
): TUserProcess['authorizationStatus'] =>
  state[NameSpace.User].authorizationStatus;

export const getLoginFetchingStatus = (
  state: Pick<TAppState, NameSpace.User>
): TUserProcess['fetchingStatus'] => state[NameSpace.User].fetchingStatus;
