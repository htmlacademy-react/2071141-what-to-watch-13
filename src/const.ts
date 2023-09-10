export enum NameSpace {
  User = 'USER',
  Film = 'OFFER',
  Films = 'OFFERS',
  MyList = 'MYLIST',
  Review = 'REVIEW',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = 'films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Film = '/film',
  Films = '/films',
  MyList = '/mylist',
  Review = '/review',
}

export enum RequestStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Error = 'Error',
  Rejected = 'Rejected',
}
