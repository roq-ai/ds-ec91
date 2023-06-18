const mapping: Record<string, string> = {
  organizations: 'organization',
  requests: 'request',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
