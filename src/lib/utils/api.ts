// API URL configuration for different environments
export const getApiBaseUrl = (): string => {
  // For Next.js API routes, we use relative URLs
  // This works for both development and production
  return "";
};

// Helper function to build API endpoints
export const buildApiUrl = (
  endpoint: string,
  params?: Record<string, string>
): string => {
  const baseUrl = getApiBaseUrl();
  const url = new URL(endpoint, baseUrl || window.location.origin);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url.toString();
};
