// API URL configuration for different environments
export const getApiBaseUrl = (): string => {
  // In development, use localhost
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3001";
  }

  // Check if we're in a Vercel deployment
  if (process.env.VERCEL_URL) {
    // For Vercel deployments, use the same domain but different subdomain
    // You can deploy your Express server to a subdomain like api.vertonet.vercel.app
    return process.env.EXPRESS_API_URL || `https://api.vertonet.vercel.app`;
  }

  // Fallback for other production environments
  return (
    process.env.EXPRESS_API_URL || "https://your-express-server.railway.app"
  );
};

// Helper function to build API endpoints
export const buildApiUrl = (
  endpoint: string,
  params?: Record<string, string>
): string => {
  const baseUrl = getApiBaseUrl();
  const url = new URL(endpoint, baseUrl);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url.toString();
};
