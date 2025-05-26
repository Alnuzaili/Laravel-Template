/**
 * Formats an image path to ensure proper access to storage files
 * while preserving direct access to public assets
 * 
 * @param {string} path - The original image path
 * @return {string} - The formatted path
 */
export function formatImagePath(path) {
  if (!path) return '';
  
  // If path already has storage/, leave it as is
  if (path.includes('storage/')) {
    return path.startsWith('/') ? path : '/' + path;
  }
  
  // Don't add storage prefix for static assets in public directory
  const publicAssetPatterns = [
    '/assets/', 
    '/star-', 
    '/polygon-', 
    '/mask-group', 
    '/product-',
    '/asset-'
  ];
  
  // Check if this path matches any public asset pattern
  const isPublicAsset = publicAssetPatterns.some(pattern => 
    path.includes(pattern)
  );
  
  // For public assets, just ensure the path starts with a slash
  if (isPublicAsset) {
    return path.startsWith('/') ? path : '/' + path;
  }
  
  // Otherwise, it's a storage file - add the storage prefix
  if (path.startsWith('/')) {
    return '/storage' + path;
  }
  
  return '/storage/' + path;
}
